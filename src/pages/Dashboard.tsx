import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

type User = {
  id: number;
  name: string;
  role: string;
  status: string;
};

function Dashboard() {
  const rowData: User[] = [
    { id: 1, name: "Yahya", role: "Admin", status: "Active" },
    { id: 2, name: "Ali", role: "User", status: "Offline" },
    { id: 3, name: "Sara", role: "Manager", status: "Active" },
  ];

  const columnDefs: ColDef<User>[] = [
    { field: "id", headerName: "ID" },
    { field: "name", headerName: "Name" },
    { field: "role", headerName: "Role" },
    { field: "status", headerName: "Status" },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="flex gap-4 mb-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Add User
        </button>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Edit User
        </button>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          Delete User
        </button>
      </div>

      <div className="ag-theme-quartz" style={{ height: 300, width: "100%" }}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </div>
  );
}

export default Dashboard;