import React from 'react';
import About from './About';
import Banner from './Banner';
import Blogs from './Blogs';
import Contact from './Contact';
import PrejectOne from './PrejectOne';
import Projects from './Projects';
import Services from './Services';
import Skills from './Skills';
const Home = () => {
  return (
    <div id="#home">
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Blogs/>
      <Contact/>
    </div>
  );
};

export default Home;