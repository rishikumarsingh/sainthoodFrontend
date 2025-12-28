import React, { useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useDispatch } from "react-redux";
import { notificationCreate } from "../../service/Authslice";
export default function CreateNotification() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const notificationData = { title, message};

    dispatch(notificationCreate(notificationData)).then((result) => {
      if (result?.payload?.message) {
        alert(result.payload.message);
      } else {
        alert("Something went wrong. Try again.");
      }
    });
    setTitle("");
    setMessage("");
  };

  return (
    <div>
      <DashboardNavbar/>

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
            min={5}
              type="text"
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
    </div>

  );
}
