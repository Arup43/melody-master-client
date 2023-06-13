/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import './CheckoutForm.css'
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ selectedClass }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const {user} = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [axiosSecure] = useAxiosSecure();
    console.log(selectedClass);
    const navigate = useNavigate();

    useEffect(() => {
        if (selectedClass?.price > 0) {
            axiosSecure.post('/create-payment-intent', { price: selectedClass?.price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [selectedClass?.price, axiosSecure]);
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: card,
        });

        if (error) {
            setError(error.message);
            console.log('[error]', error);
        } else {
            setError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price: selectedClass?.price,
                date: new Date(),
                classId: selectedClass?.classId,
                className: selectedClass?.name,
                instructor: selectedClass?.instructor,
                selectedClassId: selectedClass?._id,
                image: selectedClass?.image
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertResult.insertedId) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Payment Successful',
                            text: 'You have successfully paid for the class',
                            confirmButtonText: 'OK'
                        })
                        navigate('/dashboard/enrolled-classes');
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Payment Failed',
                            text: 'Something went wrong. Please try again later.',
                            confirmButtonText: 'OK'
                        })
                    }
                })
        }
    };

    return (
        <>
            <form className="w-full ms-20" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-primary mt-5 px-10 btn-outline" type="submit" disabled={!stripe || !clientSecret || processing}>PAY</button>
            </form>
            {error && <p className="text-red-500 ms-20 mt-10 font-semibold">{error}</p>}
            {transactionId && <p className="text-green-500 font-semibold mt-10 ms-20">Transaction Successful with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;