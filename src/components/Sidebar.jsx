
function Sidebar() {
  const buttonStyle =
    "w-full text-left px-4 py-4 mb-3 rounded-xl " +
    "bg-blue-600 text-white font-semibold shadow-md " +
    "transition-all duration-300 ease-in-out " +
    "hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl " +
    "active:scale-95";

  return (
    <aside className="w-64 min-h-screen bg-slate-900 p-5">
      <h1 className="text-white text-2xl font-bold mb-10">
        EmployeeHub
      </h1>

      <button className={buttonStyle}>
        Dashboard
      </button>

      <button className={buttonStyle}>
        Employees
      </button>

      <button className={buttonStyle}>
        Departments
      </button>

      <button className={buttonStyle}>
        Settings
      </button>
    </aside>
  );
}

export default Sidebar;
