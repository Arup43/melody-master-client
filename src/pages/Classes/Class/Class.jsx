/* eslint-disable react/prop-types */

const Class = ({ image, name, instructor, availableSeats, price }) => {
  return (
    <div className="shadow-lg border-0 rounded-lg">
      <div>
        <img src={image} className="w-full rounded-md" alt="" />
        <div className="p-6">
          <h1 className="text-2xl mb-5 text-fuchsia-600">{name}</h1>
          <p><span className="font-semibold">Instructor</span>: {instructor}</p>
          <p><span className="font-semibold">Available seats</span>: {availableSeats}</p>
          <p><span className="font-semibold">Price</span>: {price}</p>
        </div>
      </div>
    </div>
  );
};

export default Class;
