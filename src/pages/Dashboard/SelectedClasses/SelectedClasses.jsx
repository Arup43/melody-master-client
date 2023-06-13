import { FaTrashAlt } from "react-icons/fa";
import useSelectedClasses from "../../../hooks/useSelectedClasses";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const SelectedClasses = () => {
  const [selectedClasses, refetch] = useSelectedClasses();
  const [axiosSecure] = useAxiosSecure();
  console.log("selectedClasses", selectedClasses);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/selected-classes/${id}`);
        if (res.data.deletedCount === 1) {
          refetch();
          Swal.fire("Deleted!", "Your Class has been deleted.", "success");
        }
      }
    });
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-10">
        My Selected Classes
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Enroll</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {selectedClasses.map((c) => {
              return (
                <tr key={c._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={c.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{c.name}</td>
                  <td>{c.instructor}</td>
                  <td>
                    <p>{c.availableSeats}</p>
                  </td>
                  <td>{c.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="btn btn-circle btn-sm btn-outline text-red-600"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm btn-outline">
                      Pay
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
