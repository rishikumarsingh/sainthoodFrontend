import React, { useEffect } from 'react';
import { getBannerImages } from '../service/Authslice';
import { useDispatch, useSelector } from 'react-redux';

// import fallback images from assets
import banner1 from '../assets/img/carousel-1.jpg';
import banner2 from '../assets/img/carousel-2.jpg';
import banner3 from '../assets/img/carousel-3.jpg';


const Carousel = () => {
  const { bannerImages } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Fallback images (local assets)
  const fallbackImages = [
    { url: banner3 },
  ];

  useEffect(() => {
    dispatch(getBannerImages());
  }, [dispatch]);

  // Choose dynamic or fallback images
  const imagesToShow =
    bannerImages?.images?.length > 0 ? bannerImages.images : fallbackImages;

  return (
    // Carousel Start
    <div id="heroCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
      <div className="carousel-inner">
        {imagesToShow.map((ele, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <img
              src={ele.url}
              className="d-block w-100 carousel-img"
              alt={`Slide ${index + 1}`}
            />
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-start text-start">
              <h2 className="carousel-title">
                Transform Your Future—One Lesson at a Time
              </h2>
              <p className="carousel-subtext">
                Discover new learning opportunities with expert teachers.
              </p>
              {/* <a href="#" className="carousel-btn">
                Start Learning Now
              </a> */}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    // Carousel End
  );
};

export default Carousel;
