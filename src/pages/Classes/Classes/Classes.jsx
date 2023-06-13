import { useEffect, useState } from "react";
import Class from "../Class/Class";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/classes")
      .then((res) => res.json())
      .then((data) => setClasses(data));
  }, []);
  return (
    <div className="pt-52 text-center max-w-screen-xl mx-auto mb-20">
      <h1 className="text-4xl">Explore Our All Classes</h1>
      <p className="mb-10">Choose what you want to learn</p>
      <div className="grid md:grid-cols-3 gap-10">
        {classes.map((c) => (
          <Class
            key={c._id}
            id={c._id}
            image={c.imgURL}
            name={c.className}
            instructor={c.instructorName}
            availableSeats={c.availableSeats}
            price={c.price}
          ></Class>
        ))}
      </div>
    </div>
  );
};

export default Classes;
