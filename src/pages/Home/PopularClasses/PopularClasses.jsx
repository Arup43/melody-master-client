import { useEffect, useState } from "react";

const PopularClasses = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    const fetchClasses = async () => {
      const res = await fetch("http://localhost:5000/popular-classes");
      const data = await res.json();
      setClasses(data);
    };
    fetchClasses();
  }, []);

  console.log(classes);

  return (
    <div className="max-w-screen-xl mx-auto text-center">
      <h1 className=" text-5xl">Popular Classes</h1>
      <p className="mt-5">Explore our most popular classes!</p>
      <div className="grid md:grid-cols-3 mt-14 gap-6">
        {classes?.map((c) => {
          return (
            <div key={c._id} className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={c.imgURL} alt={c.className} className="h-[300px]" />
              </figure>
              <div className="card-body text-left bg-blue-200 bg-opacity-30">
                <h2 className="card-title text-slate-600 font-semibold">{c.className}</h2>
                <p><span className="font-bold text-fuchsia-600">Price</span>: {c.price}</p>
                <p><span className="font-bold text-fuchsia-600">Available Seats</span>: {c.availableSeats}</p>
                <p><span className="font-bold text-fuchsia-600">Instructor</span>: {c.instructorName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularClasses;
