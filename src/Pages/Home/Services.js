import React from 'react';
import service1 from "../../Asset/Service/service-1.png"
import service2 from "../../Asset/Service/service-2.png"
import service3 from "../../Asset/Service/service-3.png"

const services = [
  { id: 1, name: "WEB DEVELOPMENT", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa qui placeat enim mollitia magnam culpa. Odit accusamus voluptatum libero", img: service1 },
  { id: 2, name: "WEB DESIGN", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa qui placeat enim mollitia magnam culpa. Odit accusamus voluptatum libero", img: service2 },
  { id: 3, name: "SUPPURT", des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ipsa qui placeat enim mollitia magnam culpa. Odit accusamus voluptatum libero", img: service3 },
]
const Services = () => {
  return (
    <div>
     <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
         {
           
         }
     </div>
    </div>
  );
};

export default Services;