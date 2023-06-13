import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import moment from 'moment'

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const {user} = useAuth();

  useEffect(() => {
    axiosSecure.get(`/payments?email=${user.email}`).then((response) => {
      console.log(response.data);
      setPayments(response.data);
    });
  }, [axiosSecure, user.email]);
  
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-10">
        My Payment History
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Transaction Id</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Student Email</th>
              <th>Instructor Name</th>
              <th>Total Payment</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments?.map((p) => {
              return (
                <tr key={p._id}>
                    <td>{p.transactionId}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={p.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{p.className}</td>
                  <td>{p.email}</td>
                  <td>{p.instructor}</td>
                  <td>
                    <p>{p.price}</p>
                  </td>
                  <td>{moment(p.date).format('llll')}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
