import React from 'react';
import service1 from "../../Asset/Service/service-1.png"
import service2 from "../../Asset/Service/service-2.png"
import service3 from "../../Asset/Service/service-3.png"
import Service from './Service';

const services = [
  { id: 1, name: "Development", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa qui placeat enim mollitia magnam culpa. Odit accusamus voluptatum libero", img: service1 },
  { id: 2, name: "Web Design", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa qui placeat enim mollitia magnam culpa. Odit accusamus voluptatum libero", img: service3 },
  { id: 3, name: "Support", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa qui placeat enim mollitia magnam culpa. Odit accusamus voluptatum libero", img: service2 },
]
const Services = () => {
  return (
    <div className='sm:px-16 sm:my-16 px-6 my-10'>
      <h1 class="md:text-4xl font-bold text-secondary text-3xl tracking-wider">What I'm Doing</h1>
      <h3 class="md:text-1xl text-xl font-medium racking-wider pt-2 pb-8 text-neutral">I love what I do. I take great pride in what I do.</h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {
          services.map(service => <Service
            key={service.id}
            service={service}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;