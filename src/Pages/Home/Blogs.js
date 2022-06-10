import React from 'react';
import blogs from "../../Asset/Banner/Blogs.webp"
import blogs1 from "../../Asset/Banner/Blogs1.webp"
const Blogs = () => {
  return (
    <div>
      <h1 class="md:text-4xl font-bold text-secondary text-3xl tracking-wider">BL<span className="text-neutral">OGS</span></h1>
      <div className='flex justify-center items-center'>
        <img src={blogs1} alt="" className='lg:max-w-md'/>
      </div>
    </div>


  );
};

export default Blogs;