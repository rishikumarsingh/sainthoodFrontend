import React, { useEffect } from "react";
import "./Gallery.css";
import Header from "../../shared/Header";
import { getGalleryImages } from "../../service/Authslice";
import { useDispatch, useSelector } from "react-redux";

const Gallery = () => {
  const { GalleryImages } = useSelector((state) => state.auth); // from Redux
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGalleryImages());
  }, [dispatch]);

  return (
    <>
      <Header />

      <div className="gallery-light-wrapper">
        <header className="gallery-light-header">
          <h1>Inspiration Gallery</h1>
          <p>
            Explore moments captured from around the world — curated to inspire
            and relax.
          </p>
        </header>

        <section className="gallery-light-grid">
          {GalleryImages?.images && GalleryImages.images.length > 0 ? (
            GalleryImages.images.map((img, index) => (
              <div className="gallery-light-card" key={index}>
                <img
                  src={img.url}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-img"
                />
                <div className="gallery-light-info">
                  <h4>Image {index + 1}</h4>
                  <p>Beautiful scenery from our curated collection.</p>
                </div>
              </div>
            ))
          ) : (
            <p style={{ textAlign: "center", width: "100%" }}>
              No images found.
            </p>
          )}
        </section>
      </div>
    </>
  );
};

export default Gallery;
