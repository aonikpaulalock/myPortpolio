import React from 'react';

const Project = ({ project }) => {
  const { img, features } = project;
  return (
    <div class="card lg:w-max-lg bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h1 className="font-bold">TECHNOLOGY : </h1>
        <h1 className="pb-2">
          {

            features.map(feature => <span>{feature}</span>)

          }
        </h1>

        <div class="">
          <button class="btn-secondary rounded-full px-10 mr-2 py-1 text-white">Details</button>
          <button class="btn-secondary rounded-full px-10 py-1 text-white ">Live-Demo</button>
        </div>
      </div>
    </div>
  );
};

export default Project;