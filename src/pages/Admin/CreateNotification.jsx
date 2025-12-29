import React, { useEffect, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useDispatch, useSelector } from "react-redux";
import {
  notificationCreate,
  getNotifications,
  deleteNotification,
} from "../../service/Authslice";

export default function CreateNotification() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { notifications, loading } = useSelector((state) => state.auth);

  // 🔔 Fetch notifications on page load
  useEffect(() => {
    dispatch(getNotifications());
  }, [dispatch]);

  // ❌ Delete notification
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this notification?")) {
      dispatch(deleteNotification(id));
      dispatch(getNotifications()); // 🔄 refresh list
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const notificationData = { title, message };

    dispatch(notificationCreate(notificationData)).then((result) => {
      if (result?.payload?.message) {
        alert(result.payload.message);
        dispatch(getNotifications()); // 🔄 refresh list
      } else {
        alert("Something went wrong. Try again.");
      }
    });

    setTitle("");
    setMessage("");
  };

  return (
    <div>
      <DashboardNavbar />

      {/* ================= FORM ================= */}
      <div
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          background: "#f9f9f9",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          🔔 Create Notification
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Title */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Notification Title
            </label>
            <input
              type="text"
              minLength={5}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          {/* Message */}
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Notification Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows="4"
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                resize: "none",
              }}
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#1e1e2f",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Create Notification
          </button>
        </form>
      </div>

      {/* ================= TABLE ================= */}
      {notifications?.length > 0 && (
        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: "30px auto",
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
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            🔔 Notifications
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
                <th style={{ padding: "12px" }}>Title</th>
                <th style={{ padding: "12px" }}>Message</th>
                <th style={{ padding: "12px" }}>Date</th>
                <th style={{ padding: "12px" }}>Action</th>
              </tr>
            </thead>

            <tbody>
              {notifications.map((item, idx) => (
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
                    {item.title}
                  </td>

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
              Loading notifications...
            </p>
          )}
        </div>
      )}
    </div>
  );
}
