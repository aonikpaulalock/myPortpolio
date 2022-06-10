import React from 'react';

const Service = ({ service }) => {
  const { name, img, des } = service ;
  return (
    <div class="max-w-sm shadow-lg rounded cursor-pointer hover:bg-orange-50 hover:skew-y-3 transition duration-700 ease-in-out hover:scale-100" id="services">
      <div class="flex flex-col items-center p-6">
        <img class="mb-3" src={img} alt="" />
        <h5 class="text-xl font-medium text-gray-900 dark:text-white tracking-widest">{name}</h5>
        <p className='py-4 font-medium text-gray-500 text-justify'>{des}</p>
      </div>
    </div>
  );
};

export default Service;