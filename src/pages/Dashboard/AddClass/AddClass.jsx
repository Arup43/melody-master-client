import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddClass = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const saveClass = {
      ...data,
      availableSeats: parseInt(data.availableSeats),
      price: parseFloat(data.price),
      status: "pending",
      totalEnrolled: 0,
      feedBack: "",
    };
    const res = await axiosSecure.post("/classes", saveClass);
    if (res.data.insertedId) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Class added successfully.",
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
    <div className="w-full">
      <div className="hero min-h-screen bg-base-200 pt-32">
        <div className="hero-content w-full">
          <div className="card w-full max-w-lg shadow-2xl bg-base-100">
            <h1 className="text-2xl text-center mt-7">Add a class!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  placeholder="class name"
                  className="input input-bordered"
                  {...register("className", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Class Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Class Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="class image url"
                  className="input input-bordered"
                  {...register("imgURL", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Class Image is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  placeholder="instructor name"
                  defaultValue={user?.displayName}
                  readOnly
                  className="input input-bordered"
                  {...register("instructorName", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">
                    Instructor Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="email"
                  placeholder="instructor email"
                  defaultValue={user?.email}
                  readOnly
                  className="input input-bordered"
                  {...register("instructorEmail", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">
                    Instructor Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="number"
                  placeholder="available seats"
                  className="input input-bordered"
                  {...register("availableSeats", {
                    required: true,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">
                    Available seats number is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="price"
                  className="input input-bordered"
                  {...register("price", {
                    required: true,
                  })}
                />
                {errors.confirmPassword?.type == "required" && (
                  <span className="text-red-600">Price is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Add Class"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddClass;
