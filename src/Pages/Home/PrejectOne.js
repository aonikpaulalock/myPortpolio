import React from 'react';
import { Link } from 'react-router-dom';
import project1 from "../../Asset/ProjectTwo/Capture (1).png"
import project2 from "../../Asset/ProjectTwo/Capture1 (1).png"
import project3 from "../../Asset/ProjectTwo/Capture3 (1).png"
const PrejectOne = () => {
  return (
    <div>
      {/* // <!-- The button to open modal --> */}
      <label for="my-modal-5" class="btn-secondary rounded-full px-14 py-2 text-white cursor-pointer text-center">Details</label>

      {/* // <!-- Put this part before </body> tag-- > */}
      <input type="checkbox" id="my-modal-5" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box w-12/12 max-w-7xl sm:w-full ">
          <h3 class="font-bold text-2xl my-6">Wedding Photograpy Independence Website

            <label for="my-modal-5" class="btn-xl absolute right-16 top-12  cursor-pointer bg-secondary text-white w-10 h-8 rounded-full text-center">✕</label>
          </h3>
          <div className=''>
            <img src={project1} alt="" className='rounded w-full mb-2' />
            <img src={project2} alt="" className='rounded w-full mb-2' />
            <img src={project3} alt="" className='rounded w-full mb-2' />
          </div>
          <div className='md:flex justify-around items-center'>
            <div>
              <h1 className='font-bold text-xl text-secondary text-left mt-2'>Projects-Description : </h1>
              <ul className="text-left list-disc mt-3 ml-5">
                <li>It’s an Independent service provider website</li>
                <li>Users can quickly log in threre by Email-password and login with Github or Google account also.</li>
                <li>If user has been login there account they can easily see their checkout page.</li>
                <li>Implements signin, signout and signup authentication and try to unique design</li>
              </ul>
            </div>
            <div>
              <h1 className='font-bold text-xl text-secondary mb-3 mt-2'>Used-Technology : </h1>
              <ul className="text-left list-disc mt-3 ml-5">
                <li>React-Boostrap</li>
                <li>React-Toastify</li>
                <li>React-Router</li>
                <li>Firebase</li>
              </ul>
            </div>
          </div>
          <div class="mb-4 sm:flex justify-end mt-6">
            <div>
              <a href="https://wedding-photographer-d90bb.firebaseapp.com/" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-10 py-2 text-white sm:mr-4 mr-0 sm:mb-0 mb-4">Live</button>
              </a>
            </div>
            <div>
              <a href="https://github.com/aonikpaulalock/Tenth-Assiment" as={Link} target="_blank" rel="noreferrer">
                <button class="btn-secondary rounded-full px-10 py-2 text-white sm:mr-4 mr-0 sm:mb-0 mb-4" >Code</button>
              </a>
            </div>
            <label for="my-modal-5" class="btn-error rounded-full px-10 py-2 text-white sm:mr-4 mr-0">Cancel</label>
          </div>
        </div>
      </div>
    </div >
  );
};

export default PrejectOne;