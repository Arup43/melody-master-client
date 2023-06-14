import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const Feedback = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [axiosSecure] = useAxiosSecure();

  const {id} = useParams();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const res = await axiosSecure.patch(`/feedback/${id}`, data);
    if (res.data.modifiedCount) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Feedback sent successfully!`,
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/dashboard/manage-classes");
    } else {
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: `Feedback not sent! Something went wrong!`,
            showConfirmButton: false,
            timer: 1500,
        });
    }
  };

  return (
    <div className="w-full mx-auto pl-20">
      <h1 className="text-3xl font-semibold mb-10">Write your feedback</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <textarea
            placeholder="Feedback"
            className="textarea textarea-primary textarea-bordered textarea-lg w-1/2"
            {...register("feedback", { required: true })}
          ></textarea>
          {errors.feedback && (
            <span className="text-red-600 mt-5">Email is required</span>
          )}
        </div>
        <button className="btn btn-outline btn-primary mt-10">
          Send Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
