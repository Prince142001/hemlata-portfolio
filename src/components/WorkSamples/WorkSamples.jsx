import { Link } from "react-router-dom";
import WorkSamplesGallery from "./WorkSamplesGallery";

function WorkSamples() {
  return (
    <section className="w-full h-auto relative overflow-hidden pt-14 pb-14 xl:pb-0 xl:pt-28 px-4 md:px-12">
      <header className="mb-8">
        <h2 className="text-3xl font-medium leading-8 tracking-wide uppercase text-center">
          Work Samples
        </h2>
        <p className="mt-3 text-lg text-gray-800 tracking-wider text-justify">
          Hello everyone! My name is Hemlata Vishwakarma, and I am a passionate
          3D Generalist. I am excited to share some of my projects with you,
          showcasing the creativity and dedication I bring to my work.
        </p>
      </header>
      <WorkSamplesGallery />
      <div className="my-10 xl:mt-12 w-full block">
        <Link to="/gallery" className="view-gallery bg-[#d8a7f9]">
          <span className="text-base xl:text-lg font-medium uppercase">
            See all images
          </span>
          <div className="vg-border rounded-[2em]"></div>
        </Link>
      </div>
    </section>
  );
}

export default WorkSamples;
