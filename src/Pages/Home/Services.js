import React from 'react';
import service1 from "../../Asset/Service/service-1.png"
import service2 from "../../Asset/Service/service-2.png"
import service3 from "../../Asset/Service/service-3.png"
import Service from './Service';

const services = [
  { id: 1, name: "Development", des: "In the case of developing your site,I always maintain cool & professional mindset.Apart from that, I`m eager to do creative things which make any site reletively better", img: service1 },
  { id: 2, name: "Web Design", des: "design is really crucial to make any wesite looking attractive.So, I hereby, try to make unique and minimalist design", img: service3 },
  { id: 3, name: "Support", des: "Don`t worry about your project. Because, I`m always sincere about my client`s satisfaction.So,feel free to ask me any question if you have.I will be really happy to provide you the best quality of service ", img: service2 },
]
const Services = () => {
  return (
    <div className='sm:px-16 sm:my-16 px-6 my-10' id="service">
      <h1 class="md:text-4xl font-bold text-secondary text-3xl tracking-widest mb-6">What <span className="text-neutral">I'm D</span>oing</h1>
      
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
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