import { useEffect, useState } from "react";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    const fetchClasses = async () => {
      const res = await fetch("http://localhost:5000/instructors?limit=6");
      const data = await res.json();
      setInstructors(data);
    };
    fetchClasses();
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto text-center my-28">
      <h1 className=" text-5xl">Popular Instructors</h1>
      <p className="mt-5">Explore our industry expert Instructors!</p>
      <div className="grid md:grid-cols-3 mt-14 gap-6">
        {instructors?.map((instructor) => {
          return (
            <div key={instructor._id} className="card card-compact w-96 bg-base-100 shadow-xl sm:w-11/12 mx-auto mb-10">
              <figure>
                <img src={instructor.photoUrl} alt={instructor.name} className="h-[300px]" />
              </figure>
              <div className="card-body text-left bg-purple-200 bg-opacity-30 rounded-lg">
                <h2 className="card-title font-semibold">{instructor.name}</h2>
                <p><span className="font-bold text-fuchsia-600">Email</span>: {instructor.email}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularInstructors;
