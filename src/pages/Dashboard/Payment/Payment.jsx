import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

const Payment = () => {
    const {id: selectedClassId} = useParams();
    console.log(selectedClassId);
    const [axiosSecure] = useAxiosSecure();
    const [selectedClass, setSelectedClass] = useState(null);

    useEffect(() => {
        axiosSecure.get(`/selected-classes/${selectedClassId}`)
            .then((response) => {
                console.log(response.data);
                setSelectedClass(response.data);
            })
    }, [selectedClassId, axiosSecure]);

    return (
        <div className="w-full">
            <h1 className="text-2xl ms-20 mb-10 font-semibold">Make your Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass = {selectedClass}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;