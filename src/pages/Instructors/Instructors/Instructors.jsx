import { useEffect, useState } from "react";
import Instructor from "../Instructor/Instructor";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("https://melody-master-server-drab.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div className="pt-52 text-center max-w-screen-xl mx-auto mb-20">
      <h1 className="text-4xl">Visit Our All Teachers</h1>
      <p className="mb-10">
        Choose with whom you want to learn your dream instrument.
      </p>
      <div className="grid md:grid-cols-3 gap-10">
        {instructors.map((instructor) => (
          <Instructor
            key={instructor._id}
            image={instructor.photoUrl}
            name={instructor.name}
            email={instructor.email}
          ></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
