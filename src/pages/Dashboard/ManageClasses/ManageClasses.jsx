import Swal from "sweetalert2";
import useAllClasses from "../../../hooks/useAllClasses";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageClasses = () => {
  const [allClasses, refetch] = useAllClasses();
  const [axiosSecure] = useAxiosSecure();

  const handleApproveOrDeny = async (id, updatedStatus) => {
    const res = await axiosSecure.patch(`/all-classes/${id}`, {
        status: updatedStatus,
    });
    console.log('res from axios', res);
    if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `Class Status updated successfully!`,
            showConfirmButton: false,
            timer: 1500
          })
    }
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
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Approve</th>
              <th>Deny</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allClasses.map((c) => {
              return (
                <tr key={c._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={c.imgURL}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{c.className}</td>
                  <td>{c.instructorName}</td>
                  <td>{c.instructorEmail}</td>
                  <td>
                    <p>{c.availableSeats}</p>
                  </td>
                  <td>{c.price}</td>
                  <td>{c.status}</td>
                  <td>
                    <button onClick={() => handleApproveOrDeny(c._id, 'approved')} disabled={c.status !== 'pending'} className="btn btn-outline btn-success btn-sm">
                      Approve
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleApproveOrDeny(c._id, 'denied')} disabled={c.status !== 'pending'} className="btn btn-outline btn-error btn-sm">
                      Deny
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-outline btn-primary btn-sm">
                      Feedback
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

export default ManageClasses;
