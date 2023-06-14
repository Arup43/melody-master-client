import Swal from "sweetalert2";
import useUsers from "../../../hooks/useUsers";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageUsers = () => {
  const [users, refetch] = useUsers();
  const [axiosSecure] = useAxiosSecure();

  const handleChangeRole = async (user, updatedRole) => {
    const res = await axiosSecure.patch(`/users/${user._id}`, {
      role: updatedRole,
    });
    if (res.data.modifiedCount) {
      refetch();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${user.name} is an ${updatedRole} Now!`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-10">
        All Registered Users
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user) => {
              return (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.photoUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <p>{user.role}</p>
                  </td>
                  <td>
                    <button
                      disabled={user.role === "instructor"}
                      onClick={() => handleChangeRole(user, "instructor")}
                      className="btn btn-outline btn-primary"
                    >
                      Make Instructor
                    </button>
                  </td>
                  <td>
                    <button
                      disabled={user.role === "admin"}
                      onClick={() => handleChangeRole(user, "admin")}
                      className="btn btn-outline btn-primary"
                    >
                      Make Admin
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

export default ManageUsers;
