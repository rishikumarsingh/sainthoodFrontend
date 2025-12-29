import React, { useEffect } from "react";
import "./Gallery.css";
import Header from "../../shared/Header";
import { getGalleryImages } from "../../service/Authslice";
import { useDispatch, useSelector } from "react-redux";
import banner1 from '../../assets/img/carousel-1.jpg';


const Gallery = () => {
  const { GalleryImages } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Fallback images
  const fallbackImages = [
    { url: banner1 },
  ];

  // Fetch once only if not present
  useEffect(() => {
    if (!GalleryImages?.images) {
      dispatch(getGalleryImages());
    }
  }, [dispatch, GalleryImages]);

  // Choose between API images or fallback
  const imagesToShow =
    GalleryImages?.images?.length > 0
      ? GalleryImages.images
      : fallbackImages;

  return (
    <>
      <Header />

      <div className="gallery-light-wrapper mt-5">
        <header className="gallery-light-header">
          <h1>Inspiration Gallery</h1>
          <p>
            Explore moments captured from around the world — curated to inspire
            and relax.
          </p>
        </header>

        <section className="gallery-light-grid">
          {imagesToShow.map((img, index) => (
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
          ))}
        </section>
      </div>
    </>
  );
};

export default Gallery;
