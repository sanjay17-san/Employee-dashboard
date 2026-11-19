 function EmployeeTable({ employees, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">

      <div className="p-5 border-b">
        <h2 className="text-xl font-bold text-slate-800">
          Employee List
        </h2>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-left">

          <thead className="bg-slate-50 text-gray-600">

            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Department</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4">Action</th>
            </tr>

          </thead>

          <tbody>

            {employees.map((employee) => (

              <tr key={employee.id} className="border-t hover:bg-gray-50">

                <td className="p-4 font-semibold">
                  {employee.name}
                </td>

                <td className="p-4 text-gray-500">
                  {employee.email}
                </td>

                <td className="p-4">
                  {employee.department}
                </td>

                <td className="p-4">
                  {employee.role}
                </td>

                <td className="p-4">

                  <span className={`px-3 py-1 rounded-full text-sm ${
                    employee.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {employee.status}
                  </span>

                </td>

                <td className="p-4">

                  <button
                    onClick={() => onDelete(employee.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

            {employees.length === 0 && (
              <tr>
                <td colSpan="6" className="p-8 text-center text-gray-500">
                  No employees found.
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  )
}

export default EmployeeTable