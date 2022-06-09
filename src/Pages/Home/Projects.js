import React from 'react';
import portpolio1 from "../../Asset/Projects/Screenshot (11) (1).png"
import portpolio2 from "../../Asset/Projects/Screenshot (12).png"
import portpolio3 from "../../Asset/Projects/Screenshot (13) (1).png"
import portpolio4 from "../../Asset/Projects/Screenshot (9) (1).png"
import portpolio5 from "../../Asset/Projects/Screenshot (10) (1).png"
import portpolio6 from "../../Asset/Projects/Screenshot (8).png"
import Project from './Project';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, des: "", features: ["React-Router || ", " Axios ||", " Boostrap ||", " Firebase ||", " ProtectedRoute", " JWT ||", " Node ||", " Express ||", " Mongodb ||",], "img": portpolio1 },
  { id: 2, features: ["React ||", " Tailwind ||", " Firebase ||", " JWT ||", " Node ||", " Express ||", " Mongodb ||", " Stripe ||"], des: "", img: portpolio2 },
  { id: 3, features: ["React ||", " React-Router ||", " Bosstrap ||", " Firebase ||", " Toastify"], des: "", img: portpolio3 },
  { id: 4, features: ["React ||", " React-Router ||", " Boostrap",], des: "", img: portpolio4 },
  { id: 5, features: ["HTML ||", " CSS ||", " Boostrap"], des: "", img: portpolio5 },
  { id: 6, features: ["HTML ||", " CSS"], des: "", img: portpolio6 },
]
const Projects = () => {
  return (
    <div className='sm:px-16 sm:my-16 px-6 my-10'>
      <h1 class="md:text-4xl font-bold text-secondary text-3xl tracking-wider">My Portfolio</h1>
      <h3 class="md:text-1xl text-xl font-medium racking-wider pt-2 pb-8 text-neutral">I love what I do. I take great pride in what I do.</h3>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {/* {
          projects.map(project => <Project
            key={project.id}
            project={project}
            md:grid-cols-3 sm:grid-cols-2
          ></Project>)
        } */}
        <div class="card bg-base-100 shadow-md">
          <figure>
            <img src={portpolio1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Car Deal Management Website
            </h2>
            <p className='text-justify font-medium text-gray-600'>It is warehouse management full stack website.Users can quickly log in there by Email-password and log in with a google account.If user has been login there account they can easily manage there order.</p>
            <div class="">
              <a href="https://backend-assiment-11.firebaseapp.com/" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-14 mt-3 py-2 text-white ">Live-Demo</button>
              </a>
            </div>
          </div>
        </div>

        <div class="card lg:max-w-lg bg-base-100 shadow-md">
          <figure>
            <img src={portpolio2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
            TM_Manufacturer Website
            </h2>
            <p className='text-justify font-medium text-gray-600'>This is a full-stack manufacturing website. Users need to log in via Email and Password or Google.Have an admin and user dashboard. Admin can delete, add, and manage all servics and normal users see all products & can order.</p>
            <div class="">
              <a href="https://final-assiment.web.app/" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-14 mt-3 py-2 text-white ">Live-Demo</button>
              </a>
            </div>
          </div>
        </div>

        <div class="card bg-base-100 shadow-md">
          <figure>
            <img src={portpolio3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              Wedding Photography Management Website
            </h2>
            <p className='text-justify font-medium text-gray-600'>It’s an Independent service provider website.Users can quickly log in threre by Email-password and login with Github or Google account also. If user has been login there account they can easily see their checkout page.</p>
            <div class="">
              <a href="https://wedding-photographer-d90bb.firebaseapp.com/" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-14 mt-3 py-2 text-white ">Live-Demo</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;