import React from 'react';
import portpolio1 from "../../Asset/Projects/Screenshot (11) (1).png"
import portpolio2 from "../../Asset/Projects/Screenshot (12).png"
import portpolio3 from "../../Asset/Projects/Screenshot (13) (1).png"
import portpolio4 from "../../Asset/Projects/Screenshot (9) (1).png"
import portpolio5 from "../../Asset/Projects/Screenshot (10) (1).png"
import portpolio6 from "../../Asset/Projects/Screenshot (8).png"
import Project from './Project';

const projects = [
  { id: 1, des: "", features: ["React-Router || ", " Axios ||", " Boostrap ||", " Firebase ||", " ProtectedRoute"," JWT ||", " Node ||", " Express ||", " Mongodb ||",], "img": portpolio1 },
  { id: 2, features: ["React ||", " Tailwind ||", " Firebase ||"," JWT ||", " Node ||", " Express ||", " Mongodb ||", " Stripe ||"], des: "", img: portpolio2 },
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
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {
          projects.map(project => <Project
            key={project.id}
            project={project}
          ></Project>)
        }
      </div>
    </div>
  );
};

export default Projects;