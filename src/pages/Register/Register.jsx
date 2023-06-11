import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 pt-32">
        <div className="hero-content w-full">
          <div className="card w-full max-w-lg shadow-2xl bg-base-100">
            <h1 className="text-2xl text-center mt-7">Please Register!</h1>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
              </div>
              <label>
                <small className="mr-1">Already have an account?</small>
                <Link to="/login" className="label-text-alt link link-hover">
                  Login
                </Link>
              </label>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="text-center text-1xl mt-5">
                <h1>Or, Sign Up with</h1>
                <button className="text-2xl mt-3"><FaGoogle /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
