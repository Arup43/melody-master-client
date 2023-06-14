import { useEffect, useState } from "react";
import "./Testimonial.css";
import { Roll } from "react-awesome-reveal";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="text-center my-5 py-5 w-2/3 mx-auto">
      <h1 className="mb-4 text-5xl">Testimonials</h1>
      <p className="mb-20">See what our students thinks about Us</p>
      <Roll cascade dump={0.2} className="reviews w-full mx-auto my-5 py-4">
        {reviews.map((r) => {
          return (
            <div className="review" key={r._id}>
              <div className="img-container">
                <img
                  src={r.photoUrl}
                  alt={r.name}
                />
              </div>
              <p>
                “{r.review}”
              </p>
              <h3 className="text-xl font-semibold mb-10">{r.name}</h3>
            </div>
          );
        })}
      </Roll>
    </div>
  );
};

export default Testimonial;
