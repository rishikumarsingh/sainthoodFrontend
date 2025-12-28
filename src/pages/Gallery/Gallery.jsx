// import React, { useEffect } from "react";
// import "./Gallery.css";
// import Header from "../../shared/Header";
// import { getGalleryImages } from "../../service/Authslice";
// import { useDispatch, useSelector } from "react-redux";

// const Gallery = () => {
//   const { GalleryImages } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getGalleryImages());
//   }, [dispatch]);

//   return (
//     <>
//       <Header />

//       <div className="gallery-light-wrapper">
//         <header className="gallery-light-header">
//           <h1>Inspiration Gallery</h1>
//           <p>
//             Explore moments captured from around the world — curated to inspire
//             and relax.
//           </p>
//         </header>

//         <section className="gallery-light-grid">
//           {GalleryImages?.images && GalleryImages.images.length > 0 ? (
//             GalleryImages.images.map((img, index) => (
//               <div className="gallery-light-card" key={index}>
//                 <img
//                   src={img.url}
//                   alt={`Gallery ${index + 1}`}
//                   className="gallery-img"
//                 />
//                 <div className="gallery-light-info">
//                   <h4>Image {index + 1}</h4>
//                   <p>Beautiful scenery from our curated collection.</p>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p style={{ textAlign: "center", width: "100%" }}>
//               No images found.
//             </p>
//           )}
//         </section>
//       </div>
//     </>
//   );
// };

// export default Gallery;


import React, { useEffect } from "react";
import "./Gallery.css";
import Header from "../../shared/Header";
import { getGalleryImages } from "../../service/Authslice";
import { useDispatch, useSelector } from "react-redux";


import banner1 from '../../assets/img/carousel-1.jpg';
import banner2 from '../../assets/img/carousel-2.jpg';
import banner3 from '../../assets/img/carousel-3.jpg';
import IMG_1 from '../../assets/img/IMG_1.jpg';
import IMG_2 from '../../assets/img/IMG_2.jpg';
import IMG_3 from '../../assets/img/IMG_3.jpg';
import IMG_4 from '../../assets/img/IMG_4.jpg';
import IMG_5 from '../../assets/img/IMG_5.jpg';
import IMG_7 from '../../assets/img/IMG_7.jpg';
import IMG_8 from '../../assets/img/IMG_8.jpg';
import IMG_9 from '../../assets/img/IMG_9.jpg';
import IMG_10 from '../../assets/img/IMG_10.jpg';
import IMG_11 from '../../assets/img/IMG_11.jpg';
import IMG_12 from '../../assets/img/IMG_12.jpg';
import IMG_13 from '../../assets/img/IMG_13.jpg';
import IMG_14 from '../../assets/img/IMG_14.jpg';
import IMG_15 from '../../assets/img/IMG_15.jpg';
import IMG_16 from '../../assets/img/IMG_16.jpg';
import IMG_17 from '../../assets/img/IMG_17.jpg';
import IMG_18 from '../../assets/img/IMG_18.jpg';
import IMG_19 from '../../assets/img/IMG_19.jpg';
import IMG_20 from '../../assets/img/IMG_20.jpg';
import IMG_21 from '../../assets/img/IMG_21.jpg';
import IMG_22 from '../../assets/img/IMG_22.jpg';
import IMG_24 from '../../assets/img/IMG_24.jpg';
import IMG_25 from '../../assets/img/IMG_25.jpg';
import IMG_26 from '../../assets/img/IMG_26.jpg';
import IMG_27 from '../../assets/img/IMG_27.jpg';
import IMG_28 from '../../assets/img/IMG_28.jpg';
import IMG_29 from '../../assets/img/IMG_29.jpg';
import IMG_30 from '../../assets/img/IMG_30.jpg';
import IMG_31 from '../../assets/img/IMG_31.jpg';
import IMG_32 from '../../assets/img/IMG_32.jpg';
import IMG_33 from '../../assets/img/IMG_33.jpg';
import IMG_34 from '../../assets/img/IMG_34.jpg';
import IMG_36 from '../../assets/img/IMG_36.jpg';
import IMG_37 from '../../assets/img/IMG_37.jpg';
import IMG_38 from '../../assets/img/IMG_38.jpg';
import IMG_39 from '../../assets/img/IMG_39.jpg';
import IMG_40 from '../../assets/img/IMG_40.jpg';
import IMG_41 from '../../assets/img/IMG_41.jpg';
import IMG_42 from '../../assets/img/IMG_42.jpg';
import IMG_43 from '../../assets/img/IMG_43.jpg';
import IMG_44 from '../../assets/img/IMG_44.jpg';
import IMG_45 from '../../assets/img/IMG_45.jpg';
import IMG_46 from '../../assets/img/IMG_46.jpg';
import IMG_47 from '../../assets/img/IMG_47.jpg';
import IMG_48 from '../../assets/img/IMG_48.jpg';


const Gallery = () => {
  const { GalleryImages } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // Fallback images
  const fallbackImages = [
    { url: banner1 },
    { url: banner2 },
    { url: banner3 },
    { url: IMG_1 },
    { url: IMG_2 },
    { url: IMG_3 },
    { url: IMG_4 },
    { url: IMG_5 },
    { url: IMG_7 },
    { url: IMG_8 },
    { url: IMG_9 },
    { url: IMG_10 },
    { url: IMG_11 },
    { url: IMG_12 },
    { url: IMG_13 },
    { url: IMG_14 },
    { url: IMG_15 },
    { url: IMG_16 },
    { url: IMG_17 },
    { url: IMG_18 },
    { url: IMG_19 },
    { url: IMG_20 },
    { url: IMG_21 },
    { url: IMG_22 },
    { url: IMG_24 },
    { url: IMG_25 },
    { url: IMG_26 },
    { url: IMG_27 },
    { url: IMG_28 },
    { url: IMG_29 },
    { url: IMG_30 },
    { url: IMG_31 },
    { url: IMG_32 },
    { url: IMG_33 },
    { url: IMG_34 },
    { url: IMG_36 },
    { url: IMG_37 },
    { url: IMG_38 },
    { url: IMG_39 },
    { url: IMG_40 },
    { url: IMG_41 },
    { url: IMG_42 },
    { url: IMG_43 },
    { url: IMG_44 },
    { url: IMG_45 },
    { url: IMG_46 },
    { url: IMG_47 },
    { url: IMG_48 },
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
