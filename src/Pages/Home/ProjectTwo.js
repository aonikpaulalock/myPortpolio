import React from 'react';
import { Link } from 'react-router-dom';
import project1 from "../../Asset/Banner/Blogs.webp"
import project2 from "../../Asset/Banner/Blogs.webp"
import project3 from "../../Asset/Banner/Blogs.webp"
const ProjectTwo = () => {
  return (
    <div >
      {/* // <!-- The button to open modal --> */}
      <label for="my-modal-6" class="btn-secondary rounded-full px-14 py-2 text-white cursor-pointer text-center ">Details</label>

      {/* // <!-- Put this part before </body> tag-- > */}
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-12/12 max-w-7xl sm:w-full ">
          <h3 class="font-bold text-2xl my-6">TM_manufacturing Website</h3>
          <div className=''>
            <img src={project1} alt="" className='rounded w-full mb-2' />
            <img src={project2} alt="" className='rounded w-full mb-2' />
            <img src={project3} alt="" className='rounded w-full mb-2' />
          </div>
          <div className='md:flex justify-around items-center'>
            <div>
              <h1 className='font-bold text-xl text-secondary text-left '>Projects-Description : </h1>
              <ul className="text-left list-disc mt-3 ml-5">
                <li>This is a full-stack manufacturing wbsite. Users need to log in via Email and Password<br/> or Google (also can create a new account).</li>
                <li>Have an admin and user dashboard. Admin can delete, add, and <br/>manage all servics and normal users see all products & can order.</li>
                <li>Click order button and naviagete user order pharches page .</li>
                <li>Users can pay with their Crdit cards for their products.</li>
                <li>use payment method if user not payment then delete order .</li>
                <li>use firebase authentication if user log in logout do .</li>
              </ul>
            </div>
            <div>
              <h1 className='font-bold text-xl text-secondary mb-3 mt-2'>Used-Technology : </h1>
              <ul className="text-left list-disc mt-3 ml-5">
                <li>React</li>
                <li>React-Router</li>
                <li>Tailwind</li>
                <li>Daisyui</li>
                <li>React-Toastify</li>
                <li>Node</li>
                <li>Mongodb</li>
                <li>JWT</li>
                <li>Stripe.js</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
          <div class="mb-4 sm:flex justify-end mt-6 ">
            <div>
              <a href="https://final-assiment.web.app/" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-10 py-2 text-white sm:mr-4 mr-0 sm:mb-0 mb-4">Live</button>
              </a>
            </div>
            <div>
              <a href="https://github.com/aonikpaulalock/Final-Assiment-Client" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-10 py-2 text-white sm:mr-4 mr-0 sm:mb-0 mb-4" >Client-Code</button>
              </a>
            </div>
            <div>
              <a href="https://github.com/aonikpaulalock/Final-Assiment-Server" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-10 py-2 text-white sm:mr-4 mr-0 sm:mb-0 mb-4" >Server-Code</button>
              </a>
            </div>
            <label for="my-modal-6" class="btn-error rounded-full px-10 py-2 text-white sm:mr-4 mr-0">Cancel</label>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProjectTwo;