function Header() {
  return (
    <header className="bg-white shadow-sm p-5 flex justify-between items-center">

      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Employee Dashboard
        </h2>

        <p className="text-gray-500 text-sm">
          Manage your employees in one place
        </p>
      </div>

      <div className="flex items-center gap-3">

        <div className="text-right">
          <p className="font-semibold text-slate-800">
            Admin User
          </p>

          <p className="text-sm text-gray-500">
            Administrator
          </p>
        </div>

        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
          A
        </div>

      </div>

    </header>
  )
}

export default Header;