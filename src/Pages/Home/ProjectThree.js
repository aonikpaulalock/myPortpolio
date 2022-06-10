import React from 'react';
import { Link } from 'react-router-dom';
import project1 from "../../Asset/Banner/Blogs.webp"
import project2 from "../../Asset/Banner/Blogs.webp"
import project3 from "../../Asset/Banner/Blogs.webp"
const ProjectThree = () => {
  return (
    <div >
      {/* // <!-- The button to open modal --> */}
      <label for="my-modal-7" class="btn-secondary rounded-full px-14 py-2 text-white cursor-pointer text-center ">Details</label>

      {/* // <!-- Put this part before </body> tag-- > */}
      <input type="checkbox" id="my-modal-7" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-12/12 max-w-7xl sm:w-full ">
          <h3 class="font-bold text-2xl my-6">Car Deal Warehouse Management Website</h3>
          <div className=''>
            <img src={project1} alt="" className='rounded w-full mb-2' />
            <img src={project2} alt="" className='rounded w-full mb-2' />
            <img src={project3} alt="" className='rounded w-full mb-2' />
          </div>
          <div className='md:flex justify-around items-center'>
            <div>
              <h1 className='font-bold text-xl text-secondary text-left '>Projects-Description : </h1>
              <ul className="text-left list-disc mt-3 ml-5">
                <li>It is warehouse management website</li>
                <li>Users can quickly log in there by Email-password and log in with a google account</li>
                <li>Users can quickly log in there by Email-password and log in with a google account</li>
                <li>if user login then update button clicked data shows details products</li>
                <li>create manage-inventory,and my items pages ,mange-inventory page shows<br></br> all data tabel and my items page show per user email items.</li>
                <li>use login jwt token if user not token then my items page clicked and <br></br>user logout and navigate login page</li>
              </ul>
            </div>
            <div>
              <h1 className='font-bold text-xl text-secondary mb-3 mt-2'>Used-Technology : </h1>
              <ul className="text-left list-disc mt-3 ml-5">
                <li>React</li>
                <li>React-Router</li>
                <li>Boostarp</li>
                <li>React-Toastify</li>
                <li>Node</li>
                <li>Mongodb</li>
                <li>JWT</li>
                <li>Firebase</li>
                <li>Protected-Route</li>
              </ul>
            </div>
          </div>
          <div class="mb-4 sm:flex justify-end mt-6 ">
            <div>
              <a href="hhttps://backend-assiment-11.firebaseapp.com/" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-10 py-2 text-white sm:mr-4 mr-0 sm:mb-0 mb-4">Live</button>
              </a>
            </div>
            <div>
              <a href="https://github.com/aonikpaulalock/Assiment-11" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-10 py-2 text-white sm:mr-4 mr-0 sm:mb-0 mb-4" >Client-Code</button>
              </a>
            </div>
            <div>
              <a href="https://github.com/aonikpaulalock/Assiment-11-server" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-10 py-2 text-white sm:mr-4 mr-0 sm:mb-0 mb-4" >Server-Code</button>
              </a>
            </div>
            <label for="my-modal-7" class="btn-error rounded-full px-10 py-2 text-white sm:mr-4 mr-0">Cancel</label>
          </div>
        </div>
      </div>
    </div >
  );
};

export default ProjectThree;