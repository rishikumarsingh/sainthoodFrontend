import React, { useEffect, useState } from "react";
import DashboardNavbar from "./DashboardNavbar";
import { useDispatch, useSelector } from "react-redux";
import {
  galleryUpload,
  getGalleryImages,
  deleteGallery,
} from "../../service/Authslice";

function UploadGallery() {
  const dispatch = useDispatch();
  const { GalleryImages } = useSelector((state) => state.auth);

  const [banners, setBanners] = useState([]);

  // 🔹 Loader states
  const [pageLoading, setPageLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [deleteLoadingId, setDeleteLoadingId] = useState(null);

  // 🔹 Load gallery on mount
  useEffect(() => {
    setPageLoading(true);
    dispatch(getGalleryImages()).finally(() => setPageLoading(false));
  }, [dispatch]);

  // 🔹 Handle file selection
  const handleFileChange = (e) => {
    setBanners(Array.from(e.target.files));
  };

  // 🔹 Submit upload
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (banners.length === 0) {
      alert("Please select at least one file.");
      return;
    }

    const formData = new FormData();
    banners.forEach((file) => formData.append("files", file));

    setSubmitLoading(true);

    try {
      // ✅ unwrap makes rejected thunk throw error message
      await dispatch(galleryUpload(formData)).unwrap();

      alert("Images uploaded successfully ✅");
      setBanners([]);
      dispatch(getGalleryImages());

    } catch (errorMessage) {
      // ✅ BACKEND MESSAGE HERE
      alert(errorMessage);
      setBanners([]);

    } finally {
      setSubmitLoading(false);
    }
  };


  // 🔹 Delete image
  const handleRemove = async (id) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;

    setDeleteLoadingId(id);

    try {
      await dispatch(deleteGallery(id));
      await dispatch(getGalleryImages());
    } finally {
      setDeleteLoadingId(null);
    }
  };

  return (
    <div>
      <DashboardNavbar />

      <div
        style={{
          minHeight: "100vh",
          background: "#f9f9fb",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* UPLOAD CARD */}
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
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            🖼 Upload Gallery
          </h2>

          <form onSubmit={handleSubmit}>
            <div
              onClick={() => document.getElementById("galleryInput").click()}
              style={{
                border: "2px dashed #ff6600",
                borderRadius: "10px",
                padding: "25px",
                textAlign: "center",
                marginBottom: "20px",
                cursor: "pointer",
              }}
            >
              <input
                type="file"
                id="galleryInput"
                multiple
                accept="image/*"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />

              <p style={{ color: "#ff6600", fontWeight: "bold" }}>
                Select Gallery Images
              </p>

              {banners.length > 0 && (
                <ul style={{ textAlign: "left", fontSize: "14px" }}>
                  {banners.map((file, i) => (
                    <li key={i}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>

            <button
              type="submit"
              disabled={submitLoading}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                border: "none",
                background: submitLoading ? "#ccc" : "#ff6600",
                color: "#fff",
                fontWeight: "bold",
                cursor: submitLoading ? "not-allowed" : "pointer",
              }}
            >
              {submitLoading ? "Uploading..." : "Submit"}
            </button>
          </form>
        </div>

        {/* LOADER ON PAGE LOAD */}
        {pageLoading && (
          <p style={{ marginTop: "30px", fontWeight: "bold" }}>
            ⏳ Loading gallery...
          </p>
        )}

        {/* GALLERY TABLE */}
        {!pageLoading && GalleryImages?.images?.length > 0 && (
          <div
            style={{
              width: "100%",
              maxWidth: "900px",
              marginTop: "30px",
              background: "#fff",
              borderRadius: "16px",
              padding: "20px",
              boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>🖼 Uploaded Gallery</h3>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Preview</th>
                  <th>File</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {GalleryImages.images.map((img, i) => (
                  <tr key={img._id}>
                    <td>{i + 1}</td>
                    <td>
                      <img
                        src={img.url}
                        alt=""
                        style={{ width: "70px", height: "70px", borderRadius: "6px", marginBottom: "15px" }}
                      />
                    </td>
                    <td>{img.fileName}</td>
                    <td>
                      <button
                        onClick={() => handleRemove(img._id)}
                        disabled={deleteLoadingId === img._id}
                        style={{
                          background:
                            deleteLoadingId === img._id
                              ? "#ccc"
                              : "#ff4d4f",
                          color: "#fff",
                          border: "none",
                          padding: "6px 12px",
                          borderRadius: "6px",
                          cursor:
                            deleteLoadingId === img._id
                              ? "not-allowed"
                              : "pointer",
                        }}
                      >
                        {deleteLoadingId === img._id
                          ? "Deleting..."
                          : "Delete"}
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

export default UploadGallery;
