import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [hide, setHide] = useState(true);

  const navigate = useNavigate();

  const { signIn } = useContext(AuthContext);

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      reset();
      navigate(from, { replace: true });
    });
  };

  const toggleHide = () => {
    setHide(!hide);
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content w-full">
          <div className="card w-full max-w-lg shadow-2xl bg-base-100">
            <h1 className="text-2xl text-center mt-7">Please Login!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={`${hide? "password" : "text"}`}
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                  })}
                />
                <span className="absolute top-2/3 right-3 transform -translate-y-1/2 cursor-pointer">
                  {
                    hide? <FaEye onClick={toggleHide}></FaEye> : <FaEyeSlash onClick={toggleHide}></FaEyeSlash>
                  }
                </span>
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
              </div>
              <label>
                <small className="mr-1">Don&apos;t have an account?</small>
                <Link to="/register" className="label-text-alt link link-hover">
                  Register
                </Link>
              </label>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="text-center text-1xl mt-5">
                <h1>Or, Sign In with</h1>
                <SocialLogin></SocialLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
