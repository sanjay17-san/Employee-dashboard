import { useState } from "react"

function EmployeeForm({ onAdd, onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    status: "Active",
  })

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    onAdd({
      ...formData,
      id: Date.now(),
    })

    setFormData({
      name: "",
      email: "",
      department: "",
      role: "",
      status: "Active",
    })

    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">

      <div className="bg-white p-8 rounded-xl w-full max-w-lg">

        <h2 className="text-2xl font-bold mb-6">
          Add New Employee
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <input
            type="text"
            name="role"
            placeholder="Job Role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onClose}
              className="bg-gray-200 px-5 py-2 rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
            >
              Add Employee
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default EmployeeForm