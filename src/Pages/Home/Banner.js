import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../Asset/Banner/heroBanner.png"
const Banner = () => {
  return (
    <div class="hero min-h-[90vh]" style={{
      background: `url(${banner})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>
      <div class="hero-content text-center">
        <div class="max-w-lg text-gray-200">
          <h3 class="md:text-2xl text-xl font-medium tracking-wider mb-5">HELLO I Am </h3>
          <h1 class="md:text-5xl text-4xl font-bold">Aonik Paul Alock</h1>
          <h3 class="md:text-2xl text-xl font-medium racking-wider pt-3 pb-7 text-neutral">Junior Frontend Developer</h3>
          <a href="https://drive.google.com/file/d/1b0zAMeCqfmaAesCnrQJJ3PCao-E67nyZ/view?usp=sharing" download target="_blank">
            <button class="btn btn-outline btn-neutral rounded-full sm:px-16 px-14 py-2 text-white font-bold">DownLoad-Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;