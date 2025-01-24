import React, { useState } from "react";
import { Link } from "react-router-dom";
import img6246921506038858419 from "./assets/6246921506038858419.jpg";
import img6246921506038858410 from "./assets/6246921506038858410.jpg";
import img6246921506038858421 from "./assets/6246921506038858421.jpg";
import img6246921506038858411 from "./assets/6246921506038858411.jpg";
import img6246921506038858412 from "./assets/6246921506038858412.jpg";
import img6246921506038858424 from "./assets/6246921506038858424.jpg";
import img6246921506038858434 from "./assets/6246921506038858434.jpg";
import img6246921506038858423 from "./assets/6246921506038858423.jpg";
import img6246921506038858430 from "./assets/6246921506038858430.jpg";
import img6246921506038858429 from "./assets/6246921506038858429.jpg";
import imgtire_02 from "./assets/tire_02.jpg";
import img6246921506038858413 from "./assets/6246921506038858413.jpg";
import img6246921506038858422 from "./assets/6246921506038858422.jpg";
import img6246921506038858428 from "./assets/6246921506038858428.jpg";
import img6246921506038858431 from "./assets/6246921506038858431.jpg";
import daf_truck6 from "./assets/daf_truck6.jpg";
import img6246921506038858436 from "./assets/6246921506038858436.jpg";
import img987608507 from "./assets/987608507.jpg";
import img9871365535 from "./assets/9871365535.jpg";
import img6246921506038858437 from "./assets/6246921506038858437.jpg";
import img6246921506038858417 from "./assets/6246921506038858417.jpg";
import img6246921506038858416 from "./assets/6246921506038858416.jpg";
import img6246921506038858415 from "./assets/6246921506038858415.jpg";
import img6246921506038858438 from "./assets/6246921506038858438.jpg";
import img6246921506038858442 from "./assets/6246921506038858442.jpg";
import img6246921506038858440 from "./assets/6246921506038858440.jpg";
import img87658822887 from "./assets/87658822887.jpg";
import img169873668375 from "./assets/169873668375.jpg";
import img817208428 from "./assets/817208428.jpg";
import img897939136 from "./assets/897939136.jpg";
import img6246921506038858441 from "./assets/6246921506038858441.jpg";
import img6246921506038858439 from "./assets/6246921506038858439.jpg";
// import img from "./assets/.jpg";
import imgset_workshop1 from "./assets/set_workshop1.jpg";
import img3872367873 from "./assets/3872367873.png";
import imgset_workshop2 from "./assets/set_workshop2.jpg";
import imgset_workshop3 from "./assets/set_workshop3.jpg";
import img398786808 from "./assets/398786808.jpg";
import imgship_unloader13 from "./assets/ship_unloader13.jpg";
import imgship_unloader20 from "./assets/ship_unloader20.jpg";
import imgship_unloader27 from "./assets/ship_unloader27.jpg";
import imgship_unloader36 from "./assets/ship_unloader36.jpg";
import imgship_unloader40 from "./assets/ship_unloader40.jpg";
import img392736177817 from "./assets/392736177817.jpg";
import img4897654354 from "./assets/4897654354.jpg";
import imgship_unloader42 from "./assets/ship_unloader42.jpg";
import img2398726797 from "./assets/2398726797.jpg";
import img987136168 from "./assets/987136168.jpg";
import imgship_unloader41 from "./assets/ship_unloader41.jpg";
import img187139987138 from "./assets/187139987138.jpg";
import img13983657817 from "./assets/13983657817.jpg";
import imgshore_lab_001 from "./assets/shore_lab_001.jpg";
import imgshore_lab_003 from "./assets/shore_lab_003.jpg";
import imgshore_lab_004 from "./assets/shore_lab_004.jpg";
import imgshore_lab_005 from "./assets/shore_lab_005.jpg";
// import img9871365535 from "./assets/9871365535.jpg";

const Gallery = () => {
  const categories = {
    basin: [
      { img: img6246921506038858419, title: "" },
      { img: img6246921506038858410, title: "" },
      { img: img6246921506038858421, title: "" },
      { img: img6246921506038858411, title: "" },
      { img: img6246921506038858412, title: "" },
    ],
    jcb: [
      { img: img6246921506038858424, title: "" },
      { img: img6246921506038858434, title: "" },
      { img: img6246921506038858423, title: "" },
      { img: img6246921506038858430, title: "" },
      { img: img6246921506038858429, title: "" },
      { img: imgtire_02, title: "" },
    ],
    DAF_truck: [
      { img: img6246921506038858413, title: "" },
      { img: img6246921506038858422, title: "" },
      { img: img6246921506038858428, title: "" },
      { img: img6246921506038858431, title: "" },
      { img: daf_truck6, title: "" },
    ],
    DIGI_Filter: [
      { img: img6246921506038858417, title: "" },
      { img: img6246921506038858416, title: "" },
      { img: img6246921506038858415, title: "" },
      { img: img6246921506038858438, title: "" },
      { img: img6246921506038858436, title: "" },
      { img: img987608507, title: "" },
      { img: img9871365535, title: "" },
      { img: img6246921506038858437, title: "" },
    ],
    Hull: [
      { img: img6246921506038858442, title: "" },
      { img: img6246921506038858440, title: "" },
      { img: img87658822887, title: "" },
      { img: img169873668375, title: "" },
      { img: img6246921506038858441, title: "" },
      { img: img817208428, title: "" },
      { img: img897939136, title: "" },
      { img: img6246921506038858439, title: "" },
    ],
    // demo: [{ img: img, title: "" }],
    Lathe_machine: [
      { img: imgset_workshop1, title: "" },
      { img: imgset_workshop2, title: "" },
      { img: imgset_workshop3, title: "" },
      { img: img398786808, title: "" },
      { img: img3872367873, title: "" },
    ],
    Ship_unloader: [
      { img: imgship_unloader13, title: "" },
      { img: imgship_unloader20, title: "" },
      { img: imgship_unloader27, title: "" },
      { img: imgship_unloader36, title: "" },
      { img: imgship_unloader40, title: "" },
      { img: img392736177817, title: "" },
      { img: img4897654354, title: "" },
      { img: imgship_unloader42, title: "" },
      { img: img2398726797, title: "" },
      { img: img987136168, title: "" },
      { img: imgship_unloader41, title: "" },
      { img: img187139987138, title: "" },
      { img: img13983657817, title: "" },
    ],
    lab: [
      { img: imgshore_lab_001, title: "" },
      { img: imgshore_lab_003, title: "" },
      { img: imgshore_lab_004, title: "" },
      { img: imgshore_lab_005, title: "" },
    ],
  };

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (category, index) => {
    setCurrentCategory(category);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const changeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      if (newIndex < 0) return currentCategory.length - 1;
      if (newIndex >= currentCategory.length) return 0;
      return newIndex;
    });
  };

  return (
    <main>
      <header className="bg-[#27233e]">
        <nav className="flex items-center justify-between flex-col md:flex-row px-4 sm:px-10 py-4 space-y-4 sm:space-y-0">
          <div className="w-full">
            <Link
              to="/"
              className="text-xs leading-[3.5rem] text-center block w-full md:text-left md:text-[0.8rem] xl:text-xs font-extrabold uppercase text-[#d8a7f9] rockybilly-text"
            >
              hemlata &nbsp; vishwakarma
            </Link>
          </div>
          <div className="flex items-center md:flex max-w-fit w-full">
            <Link to="/" className="">
              <span className="text-base xl:text-sm font-medium capitalize text-white">
                home <span className="px-2">/</span>
              </span>
              <div className="vg-border rounded-[2em]"></div>
            </Link>
            <div className="">
              <span className="text-base xl:text-sm font-medium capitalize text-white">
                work samples
              </span>
              <div className="vg-border rounded-[2em]"></div>
            </div>
          </div>
        </nav>
      </header>
      <section className="px-4 py-8 sm:p-8">
        {Object.entries(categories).map(([category, images]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold mb-4 capitalize">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="cursor-pointer flex-grow-1"
                  onClick={() => openLightbox(images, index)}
                >
                  <img
                    src={image.img}
                    alt={image.title}
                    className="w-full rounded"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

        {lightboxOpen && currentCategory.length > 0 && (
          <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <div className="relative">
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                onClick={() => changeImage(-1)}
              >
                &#8249;
              </button>
              <img
                src={currentCategory[currentIndex].img}
                alt={currentCategory[currentIndex].title}
                className="max-w-full max-h-[80vh] rounded"
              />
              <p className="text-white text-center mt-4">
                {currentCategory[currentIndex].title}
              </p>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                onClick={() => changeImage(1)}
              >
                &#8250;
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Gallery;
