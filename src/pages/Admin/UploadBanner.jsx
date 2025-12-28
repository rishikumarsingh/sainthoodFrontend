import React, { useState, useEffect } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useDispatch, useSelector } from "react-redux";
import { bannerUpload, getBannerImages, deleteBanner } from "../../service/Authslice"; // <-- add deleteBanner

function UploadBanner() {
  const { bannerImages } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    dispatch(getBannerImages());
  }, [dispatch]);

  // Select files
  const handleFileChange = (e) => {
    setBanners(Array.from(e.target.files));
  };

  // Submit upload
  const handleSubmit = (e) => {
    e.preventDefault();

    if (banners.length === 0) {
      alert("Please select at least one file.");
      return;
    }

    const formData = new FormData();
    banners.forEach((file) => {
      formData.append("files", file);
    });

    dispatch(bannerUpload(formData)).then(() => {
      setBanners([]); // clear after upload
      dispatch(getBannerImages()); // refresh table
    });
  };

  // Remove banner
  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to delete this banner?")) {
      dispatch(deleteBanner(id)).then(() => {
        dispatch(getBannerImages()); // refresh table after delete
      });
    }
  };

  return (
    <div>
      <DashboardNavbar />
      <div
        style={{
          minHeight: "100vh",
          background: "#f9f9fb",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Upload Card */}
        <div
          style={{
            width: "100%",
            maxWidth: "450px",
            background: "#fff",
            borderRadius: "16px",
            padding: "30px",
            boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
            marginTop: "15px",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              marginBottom: "25px",
              color: "#333",
            }}
          >
            📤 Upload Banner
          </h2>

          <form onSubmit={handleSubmit}>
            {/* File Upload */}
            <div
              style={{
                border: "2px dashed #ff6600",
                borderRadius: "10px",
                padding: "25px",
                textAlign: "center",
                marginBottom: "20px",
                cursor: "pointer",
              }}
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                type="file"
                id="fileInput"
                multiple
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <p
                style={{
                  color: "#ff6600",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                📤 Upload Banners
              </p>
              <small style={{ color: "#666" }}>
                You can upload multiple images (Max 10MB each)
              </small>

              {banners.length > 0 && (
                <div
                  style={{
                    marginTop: "10px",
                    color: "#333",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  <strong>Selected Files:</strong>
                  <ul>
                    {banners.map((file, idx) => (
                      <li key={idx}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "8px",
                background: "#ff6600",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Uploaded Banners Table */}
        {bannerImages?.images?.length > 0 && (
          <div
            style={{
              width: "100%",
              maxWidth: "1000px",
              marginTop: "30px",
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
              🖼 Uploaded Banners
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
                  <th style={{ padding: "12px", fontWeight: "600" }}>#</th>
                  <th style={{ padding: "12px", fontWeight: "600" }}>Preview</th>
                  <th style={{ padding: "12px", fontWeight: "600" }}>File</th>
                  <th style={{ padding: "12px", fontWeight: "600" }}>URL</th>
                  <th style={{ padding: "12px", fontWeight: "600" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {bannerImages?.images?.map((banner, idx) => (
                  <tr
                    key={idx}
                    style={{
                      background: idx % 2 === 0 ? "#fff" : "#fafafa",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                      borderRadius: "10px",
                      transition: "0.2s ease",
                    }}
                  >
                    <td style={{ padding: "12px", fontWeight: "500" }}>
                      {idx + 1}
                    </td>
                    <td style={{ padding: "12px" }}>
                      <img
                        src={banner.url}
                        alt={banner.fileName}
                        style={{
                          width: "100px",
                          borderRadius: "8px",
                          border: "1px solid #eee",
                        }}
                      />
                    </td>
                    <td style={{ padding: "12px" }}>{banner.fileName}</td>
                    <td style={{ padding: "12px" }}>
                      <a
                        href={banner.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#ff6600",
                          textDecoration: "none",
                          fontWeight: "500",
                        }}
                      >
                        {banner.url.length > 40
                          ? banner.url.substring(0, 40) + "..."
                          : banner.url}
                      </a>
                    </td>
                    <td style={{ padding: "12px" }}>
                      <button
                        onClick={() => handleRemove(banner._id)} // <-- using banner._id (replace if different field)
                        style={{
                          background: "#ff4d4f",
                          color: "#fff",
                          border: "none",
                          padding: "8px 12px",
                          borderRadius: "6px",
                          cursor: "pointer",
                          fontWeight: "500",
                        }}
                      >
                        ❌ Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadBanner;
