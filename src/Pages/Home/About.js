import React from 'react';
import { Link } from 'react-router-dom';
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
            <p class="py-6 font-medium text-gray-600">I am Aonik Paul Alock . Always I am ready to prove myself through my work and hard-working individual proficiency in web technologies. To improve myself as a performer, discovering something new every single day is part of being a High-Level Programmer as well as ability to communicate effectively in a team setting.</p>
            <a href="https://www.linkedin.com/in/aonik-paul-alock-353b78229/" download target="_blank" as={Link} rel="noreferrer">
              <button class="btn btn-secondary rounded-full px-14 py-0 text-white font-bold tracking-widest">HIRE ME</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;