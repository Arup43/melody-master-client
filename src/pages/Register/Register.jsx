
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");

  const navigate = useNavigate();
  
  const { createUser, updateUserProfile } = useContext(AuthContext);
  
  const onSubmit = (data) => {
    createUser(data.email, data.password)
        .then(() => {
            updateUserProfile(data.name, data.photoUrl)
                .then(() => {
                    console.log("User Created Successfully!");
                    const saveUser = { name: data.name, email: data.email, role: 'student' }
                    fetch("http://localhost:5000/users", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            reset();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                        }
                    })
                })
        })
  };


  return (
    <div>
      <div className="hero min-h-screen bg-base-200 pt-32">
        <div className="hero-content w-full">
          <div className="card w-full max-w-lg shadow-2xl bg-base-100">
            <h1 className="text-2xl text-center mt-7">Please Register!</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have a capital letter and a special character.
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password.current || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword?.type == "required" && (
                  <span className="text-red-600">This field is required</span>
                )}
                {errors.confirmPassword?.type == "validate" && (
                  <span className="text-red-600">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                  {...register("photoUrl", { required: true })}
                />
                {errors.photoUrl && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <label>
                <small className="mr-1">Already have an account?</small>
                <Link to="/login" className="label-text-alt link link-hover">
                  Login
                </Link>
              </label>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
              <div className="text-center text-1xl mt-5">
                <h1>Or, Sign Up with</h1>
                <SocialLogin></SocialLogin>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
