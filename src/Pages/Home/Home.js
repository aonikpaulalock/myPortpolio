import React from 'react';
import About from './About';
import Banner from './Banner';
import Services from './Services';
import Skills from './Skills';
const Home = () => {
  return (
    <div>
      <Banner/>
      <About/>
      <Skills/>
      <Services/>
    </div>
  );
};

export default Home;