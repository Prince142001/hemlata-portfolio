import React, { useEffect } from "react";
import portfolioImglarge from "../../assets/hv-img-2.jpg";
import particleVideo from "../../assets/particle-video.mp4";
import maya from "../../assets/maya.jpg";
import uvrizom from "../../assets/uv-rizom.jpg";
import mari from "../../assets/mari.jpg";
import marmosettoolbag from "../../assets/marmoset-toolbag.jpg";
import substancepainter from "../../assets/substance-painter.jpg";

function AboutSection() {
  const softwareUse = [
    { softwareIcon: maya, softwareName: "Maya" },
    { softwareIcon: uvrizom, softwareName: "UV RIZOM" },
    { softwareIcon: mari, softwareName: "Mari" },
    { softwareIcon: marmosettoolbag, softwareName: "Marmoset Toolbag" },
    { softwareIcon: substancepainter, softwareName: "Substance Painter" },
  ];
  return (
    <section className="relative text-white min-h-screen">
      {/* Video Background */}
      {/* #1f2937f0 */}
      {/* 1f2937c2 */}
      {/* #14171bf7 */}
      {/* #14171be6 */}
      <div className="after:w-full after:h-full after:bg-[#14171be6] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full absolute top-0 bottom-0 left-0 right-0 -z-10 object-cover"
          aria-hidden="true"
        >
          <source src={particleVideo} type="video/mp4" />
          <source src={particleVideo} type="video/ogg" />
          {/* Fallback text */}
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Content Section */}
      <div className="pt-14 pb-14 xl:pb-0 xl:pt-28 px-4 md:px-12 flex flex-col xl:flex-row gap-16 relative z-20">
        {/* Profile Image Section */}
        <div className="w-full xl:w-96 h-full xl:h-96 relative">
          <figure>
            <img
              src={portfolioImglarge}
              alt="Hemlata Vishwakarma, Texturing Artist"
              loading="lazy"
              className="w-full h-full md:h-[32rem] xl:w-96 xl:h-96 object-cover object-top rounded-lg"
            />
          </figure>
          <div className="absolute -right-5 -bottom-5 px-3 py-2 bg-[#d8a7f9] rounded-lg shadow-lg animate-bounce">
            <p className="text-black text-sm font-semibold bg-white p-2 rounded-lg">
              3+ Years Experience
            </p>
          </div>
        </div>

        {/* About Text Section */}
        <div className="w-full xl:w-3/5">
          <header>
            <h2 className="text-3xl font-medium leading-8 tracking-wide uppercase">
              About Me
            </h2>
          </header>
          <p className="mt-3 text-lg text-gray-300 tracking-wider text-justify">
            Hello everyone! My name is Hemlata Vishwakarma, Creative and
            versatile 3D Generalist with 3 years of experience in 3D modeling,
            texturing, lighting. Proven ability to contribute across all stages
            of 3D production and collaborate with teams to achieve high-quality
            visual results. Seeking to leverage my skills and experience to
            create exceptional digital content and bring innovative ideas to
            life.
          </p>
          <div className="mt-10 xl:mt-12 w-fit block">
            <a href="" className="about-me-btn">
              <span className="text-base xl:text-lg font-medium">About Me</span>
              <div class="amb-border rounded-[2em]"></div>
            </a>
          </div>
          <ul className="flex flex-wrap gap-5 mt-12 xl:mt-12 w-full">
            {softwareUse.map((item, index) => (
              <li key={index}>
                <figure className="w-14 h-14 overflow-hidden rounded-lg">
                  <img
                    src={item.softwareIcon}
                    alt={item.softwareName}
                    className="w-full h-full object-contain"
                    style={{ backgroundColor: "currentcolor" }}
                  />
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
