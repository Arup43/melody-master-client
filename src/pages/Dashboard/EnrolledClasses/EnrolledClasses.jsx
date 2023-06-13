import useEnrolledClasses from "../../../hooks/useEnrolledClasses";

const EnrolledClasses = () => {
  const [enrolledClasses] = useEnrolledClasses();
  return (
    <div>
      <h1 className="text-center text-4xl font-bold mb-10">
        My Enrolled Classes
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {enrolledClasses?.map((c) => {
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
                  <td>{c.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClasses;
