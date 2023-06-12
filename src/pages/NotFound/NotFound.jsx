import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 pt-10">
      <h1 className="text-2xl">Sorry, Page not found!!</h1>
      <br />
      <img className="w-2/5" src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"></img>

      <Link to="/">
        <button className="btn btn-success mt-5 px-4 py-3">
          Go to Home Page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
