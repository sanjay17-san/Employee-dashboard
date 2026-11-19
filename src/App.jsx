 
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/StatCard";
import EmployeeTable from "./components/EmployeeTable";
import employeesData from "./data/employees";

function App() {

  const [employees, setEmployees] = useState(employeesData);

  // Delete employee
  const handleDelete = (id) => {
    setEmployees((previousEmployees) =>
      previousEmployees.filter((employee) => employee.id !== id)
    );
  };

  // Dashboard statistics
  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.status === "Active"
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => employee.status === "Inactive"
  ).length;

  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 min-w-0">

        <Header />

        <div className="p-6 lg:p-8">

          {/* Dashboard heading */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Dashboard Overview
              </h1>

              <p className="text-slate-500 mt-2">
                Welcome to your employee management system
              </p>
            </div>
          </div>

          {/* Statistics cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">

            <StatCard
              title="Total Employees"
              value={totalEmployees}
              color="text-blue-600"
            />

            <StatCard
              title="Active Employees"
              value={activeEmployees}
              color="text-green-600"
            />

            <StatCard
              title="Inactive Employees"
              value={inactiveEmployees}
              color="text-red-600"
            />

          </div>

          {/* Employee table */}
          <EmployeeTable
            employees={employees}
            onDelete={handleDelete}
          />

        </div>
      </main>
    </div>
  );
}

export default App;
