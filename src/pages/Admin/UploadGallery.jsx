import React, { useEffect, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useDispatch,useSelector } from "react-redux";
import { galleryUpload, getGalleryImages } from "../../service/Authslice";

function UploadGallery() {
  const { GalleryImages } = useSelector((state) => state.auth); // from Redux
    console.log(GalleryImages)

  const dispatch = useDispatch();
  const [banners, setBanners] = useState([]); // selected files before upload
  useEffect(() => {
    dispatch(getGalleryImages());
  }, [dispatch]);


  // Handle multiple file selection
  const handleFileChange = (e) => {
    setBanners(Array.from(e.target.files));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (banners.length === 0) {
      alert("Please select at least one file.");
      return;
    }

    // ✅ create FormData payload
    const formData = new FormData();
    banners.forEach((file) => {
      formData.append("files", file); // check backend key name
    });

    // Dispatch Redux thunk
    dispatch(galleryUpload(formData)).then(() => {
      setBanners([]); // clear after upload
      dispatch(getGalleryImages()); // refresh table
    });
  };

  // Helper to get file icon
  const getFileIcon = (file) => {
    if (file.type.startsWith("image/")) return "🖼";
    return "📄";
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
            🖼 Upload Gallery
          </h2>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                border: "2px dashed #ff6600",
                borderRadius: "10px",
                padding: "25px",
                textAlign: "center",
                marginBottom: "20px",
                cursor: "pointer",
              }}
              onClick={() => document.getElementById("galleryInput").click()}
            >
              <input
                type="file"
                id="galleryInput"
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
                🖼 Upload Gallery Images
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
        {GalleryImages?.images?.length > 0 && (
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
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
            🖼 Upload Gallery
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
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#555",
                      borderRadius: "10px 0 0 10px",
                    }}
                  >
                    #
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#555",
                    }}
                  >
                    Preview
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#555",
                    }}
                  >
                    File
                  </th>
                  <th
                    style={{
                      padding: "12px",
                      textAlign: "left",
                      fontWeight: "600",
                      color: "#555",
                      borderRadius: "0 10px 10px 0",
                    }}
                  >
                    URL
                  </th>
                </tr>
              </thead>
              <tbody>
                {GalleryImages?.images?.map((banner, idx) => (
                  <tr
                    key={idx}
                    style={{
                      background: idx % 2 === 0 ? "#fff" : "#fafafa",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                      borderRadius: "10px",
                      transition: "0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "#f0f8ff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        idx % 2 === 0 ? "#fff" : "#fafafa")
                    }
                  >
                    <td
                      style={{
                        padding: "12px",
                        fontWeight: "500",
                        color: "#333",
                      }}
                    >
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
                    <td style={{ padding: "12px", color: "#444" }}>
                      {banner.fileName}
                    </td>
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

export default UploadGallery;
