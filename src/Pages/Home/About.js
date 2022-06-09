import React from 'react';
import about from "../../Asset/About/about.png"
const About = () => {
  return (
    <div className="sm:px-10 sm:my-8 my-6 px-4">
      <div class="hero lg:p-8">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img src={about} class="lg:p-4 sm:max-w-sm md:max-w-md" alt="" />
          <div className="md:text-left text-center">
            <h1 class="md:text-4xl font-bold text-secondary text-3xl ">ABOUT ME</h1>
            <h3 class="md:text-2xl text-xl font-medium racking-wider pt-2 text-neutral">Junior Frontend Developer</h3>
            <p class="py-6 font-medium text-gray-600">I am Jhone Deo Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever It has survived not only five centuries, but also the leap into electronic but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing</p>
            <button class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold tracking-widest">HIRE ME</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;