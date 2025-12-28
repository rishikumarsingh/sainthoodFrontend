import React from "react";
import { Link } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";

function Dashboard() {
  return (
    <div>
      <DashboardNavbar/>

      {/* Page Content */}
      <main style={{ padding: "20px" }}>
        <h2>Dashboard</h2>
        <p>Welcome to your dashboard!</p>
      </main>
    </div>
  );
}

export default Dashboard;
