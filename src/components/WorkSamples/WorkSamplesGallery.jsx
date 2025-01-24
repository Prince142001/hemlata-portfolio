import React, { useState } from "react";
import basin10 from "../../assets/basin10.jpg";
import bulldozer09 from "../../assets/bulldozer09.jpg";
import daf_truck8 from "../../assets/daf_truck8.jpg";
import dn14 from "../../assets/dn14.jpg";
import set_workshop3 from "../../assets/set_workshop3.jpg";
import mrctHull04 from "../../assets/mrct_hull04.jpg";
import shore_lab_001 from "../../assets/shore_lab_001.jpg";
import ship_unloader3 from "../../assets/ship_unloader3.jpg";

const WorkSamplesGallery = () => {
  const [images] = useState([
    bulldozer09,
    daf_truck8,
    basin10,
    dn14,
    set_workshop3,
    mrctHull04,
    shore_lab_001,
    ship_unloader3,
  ]);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const changeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return images.length - 1;
      if (newIndex >= images.length) return 0;
      return newIndex;
    });
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* Gallery Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Sample ${index}`}
            className="cursor-pointer rounded shadow object-cover"
            onClick={() => openLightbox(index)}
          />
        ))}
      </div>

      {/* Lightbox Section */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={closeLightbox}
          >
            &times;
          </button>

          {/* Main Image */}
          <div className="flex flex-col items-center">
            <img
              src={images[currentIndex]}
              alt={`Lightbox ${currentIndex}`}
              className="w-3/4 h-auto max-h-[80%] rounded-lg"
            />

            {/* Thumbnail Navigation */}
            <div className="flex mt-4 space-x-2 overflow-x-scroll">
              {images.map((thumb, thumbIndex) => (
                <img
                  key={thumbIndex}
                  src={thumb}
                  alt={`Thumbnail ${thumbIndex}`}
                  className={`w-20 h-20 object-cover rounded cursor-pointer ${
                    thumbIndex === currentIndex
                      ? "border-4 border-white"
                      : "border border-gray-600"
                  }`}
                  onClick={() => goToImage(thumbIndex)}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 text-white text-3xl"
            onClick={() => changeImage(-1)}
          >
            &lt; Prev
          </button>
          <button
            className="absolute right-4 text-white text-3xl"
            onClick={() => changeImage(1)}
          >
            Next &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkSamplesGallery;
