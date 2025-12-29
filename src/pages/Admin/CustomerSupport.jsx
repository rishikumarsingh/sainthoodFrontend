import React, { useEffect } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useDispatch, useSelector } from "react-redux";
import { getContacts, deleteContact } from "../../service/Authslice";

export default function CustomerSupport() {
  const dispatch = useDispatch();
  const { contacts, loading } = useSelector((state) => state.auth);

  // 📥 Fetch contacts on page load
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  // ❌ Delete contact
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deleteContact(id)); // ✅ Redux will auto-update table
    }
  };

  return (
    <div>
      <DashboardNavbar />

      {/* ================= TABLE ================= */}
      {contacts?.length > 0 ? (
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            margin: "40px auto",
            background: "#fff",
            borderRadius: "16px",
            padding: "20px",
            boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
            overflowX: "auto",
          }}
        >
          <h3
            style={{
              marginBottom: "20px",
              color: "#333",
              fontSize: "22px",
              fontWeight: "600",
            }}
          >
            📩 Customer Support Requests
          </h3>

          <table
            style={{
              width: "100%",
              borderCollapse: "separate",
              borderSpacing: "0 10px",
            }}
          >
            <thead>
              <tr style={{ background: "#f4f4f6" }}>
                <th style={{ padding: "12px" }}>#</th>
                <th style={{ padding: "12px" }}>Name</th>
                <th style={{ padding: "12px" }}>Email</th>
                <th style={{ padding: "12px" }}>Message</th>
                <th style={{ padding: "12px" }}>Date</th>
                <th style={{ padding: "12px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((item, idx) => (
                <tr
                  key={item._id}
                  style={{
                    background: idx % 2 === 0 ? "#fff" : "#fafafa",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    borderRadius: "10px",
                  }}
                >
                  <td style={{ padding: "12px", fontWeight: "500" }}>
                    {idx + 1}
                  </td>

                  <td style={{ padding: "12px", fontWeight: "600" }}>
                    {item.name}
                  </td>

                  <td style={{ padding: "12px" }}>{item.email}</td>

                  <td style={{ padding: "12px", color: "#555" }}>
                    {item.message}
                  </td>

                  <td style={{ padding: "12px", fontSize: "14px" }}>
                    {new Date(item.createdAt).toLocaleString()}
                  </td>

                  <td style={{ padding: "12px" }}>
                    <button
                      onClick={() => handleDelete(item._id)}
                      style={{
                        background: "#ff4d4f",
                        color: "#fff",
                        border: "none",
                        padding: "8px 14px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: "500",
                      }}
                    >
                      ❌ Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {loading && (
            <p style={{ textAlign: "center", marginTop: "15px" }}>
              Loading contacts...
            </p>
          )}
        </div>
      ) : (
        !loading && (
          <p style={{ textAlign: "center", marginTop: "40px" }}>
            No contact requests found.
          </p>
        )
      )}
    </div>
  );
}
