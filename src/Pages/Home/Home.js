import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';
const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
    </div>
  );
};

export default Home;