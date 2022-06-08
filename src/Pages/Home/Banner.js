import React from 'react';
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
          <h3 class="md:text-2xl text-xl font-medium tracking-wider mb-5">HELLO</h3>
          <h1 class="md:text-5xl text-4xl font-bold">I Am Aonik Paul Alock</h1>
          <h3 class="md:text-2xl text-xl font-medium racking-wider pt-3 pb-7 text-neutral">Junior Frontend Developer</h3>
          <button class="bg-primary rounded-full sm:px-16 px-14 py-2 text-white font-bold">DownLoad-Resume</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;