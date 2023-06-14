/* eslint-disable react/prop-types */
const Instructor = ({ image, name, email }) => {
  return (
    <div className="shadow-lg border-0 rounded-lg">
      <div>
        <img src={image} className="mx-auto rounded-md h-[300px]" alt="" />
        <div className="p-6 bg-purple-200 bg-opacity-30">
          <h1 className="text-2xl mb-5 text-fuchsia-600">{name}</h1>
          <p>
            <span className="font-semibold">Email: </span>:{" "}
            {email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
