import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut, FiUser } from "react-icons/fi";

function DashboardNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav
      style={{
        background: "#1e1e2f",
        color: "#fff",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Left - Logo */}
      <div style={{ fontWeight: 700, fontSize: "20px" }}>Admin Panel</div>

      {/* Center - Menu */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "30px",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/upload-banner"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            📤 Upload Banner
          </Link>
        </li>
        <li>
          <Link
            to="/upload-gallery"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            🖼 Upload Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/notifications"
            style={{
              color: "#fff",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            🔔 Create Notification
          </Link>
        </li>
      </ul>

      {/* Right - Admin Profile + Logout */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Admin profile */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "#2c2c40",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9aa0b5",
            }}
          >
            <FiUser size={18} />
          </div>
          <span style={{ fontSize: "15px", fontWeight: 500 }}>Admin</span>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          style={{
            background: "transparent",
            border: "1px solid #ff4d4d",
            color: "#ff4d4d",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "14px",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = "#ff4d4d";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#ff4d4d";
          }}
        >
          <FiLogOut size={16} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
}

export default DashboardNavbar;
