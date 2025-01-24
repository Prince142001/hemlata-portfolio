import { useEffect } from "react";
import heroSectionImgSmall from "../../assets/hemlata-vishwakarma-123321.jpg";
import heroSectionImgLarge from "../../assets/hemlata-vishwakarma-hema-model-2.jpg";
import anime from "animejs";
import AsideComponents from "../AsideComponents";

function HeroSection() {
  useEffect(() => {
    const textWrapper = document.querySelector(".ml1 .letters");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({ loop: true })
        .add({
          targets: ".ml1 .letter",
          scale: [0.3, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 600,
          delay: (el, i) => 70 * (i + 1),
        })
        .add({
          targets: ".ml1 .line",
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 700,
          offset: "-=875",
          delay: (el, i, l) => 80 * (l - i),
        })
        .add({
          targets: ".ml1",
          opacity: 0,
          duration: 1000,
          easing: "easeOutExpo",
          delay: 1000,
        });
    }
  }, []);

  return (
    <>
      <section className="w-full h-[30rem] xl:h-screen relative overflow-hidden">
        <figure className="h-full overflow-hidden">
          <img
            src={heroSectionImgLarge}
            srcSet={`${heroSectionImgSmall} 640w, ${heroSectionImgLarge} 1024w`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
            alt="Hemlata Vishwakarma"
            className="max-w-full w-full h-full object-cover"
          />
        </figure>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-80 xl:w-[56rem]">
          <h1
            className="text-4xl xl:text-7xl font-extrabold capitalize text-center text-white tracking-wide"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Hemlata Vishwakarma
          </h1>
          <h2 className="ml1 hs-moving-text text-2xl xl:text-5xl font-medium text-center tracking-wide mt-5 xl:mt-8">
            <span className="text-wrapper relative">
              <span className="line line1 opacity-0 absolute left-0 h-[2px] w-full bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 top-0"></span>
              <span className="letters uppercase bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text">
                Texturing Artist
              </span>
              <span className="line line2 opacity-0 absolute left-0 h-[2px] w-full bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bottom-0"></span>
            </span>
          </h2>
        </div>
      </section>
      <AsideComponents />
    </>
  );
}

export default HeroSection;
