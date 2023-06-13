/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAdmin from "../../../hooks/useAdmin";
import useAuth from "../../../hooks/useAuth";
import useInstructor from "../../../hooks/useInstructor";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Class = ({ id, image, name, instructor, availableSeats, price }) => {
  const { user } = useAuth();
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();
  const [axiosSecure] = useAxiosSecure();

  const handleSelect = async () => {
    if (!user) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You must be logged in before selecting the course!",
      });
      return;
    }
    const saveClass = {
      classId: id,
      email: user.email,
      image: image,
      name: name,
      instructor: instructor,
      availableSeats: availableSeats,
      price: price,
    };

    const res = await axiosSecure.post("/selected-classes", saveClass);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Class selected successfully.",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div
      className={`shadow-lg border-0 rounded-lg ${
        availableSeats === 0 && "bg-red-500 bg-opacity-60"
      }`}
    >
      <div>
        <img src={image} className="w-full rounded-md h-64" alt="" />
        <div className="p-6">
          <h1 className="text-2xl mb-5">{name}</h1>
          <p>
            <span className="font-semibold">Instructor</span>: {instructor}
          </p>
          <p>
            <span className="font-semibold">Available seats</span>:{" "}
            {availableSeats}
          </p>
          <p>
            <span className="font-semibold">Price</span>: ${price}
          </p>
          <button
            disabled={isInstructor || isAdmin || availableSeats === 0}
            onClick={handleSelect}
            className="btn btn-outline btn-primary mt-5"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default Class;
