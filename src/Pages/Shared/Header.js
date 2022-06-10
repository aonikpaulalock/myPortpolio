import React from 'react';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
const Header = () => {
  const navMenu =
    <>
      <li><Link smooth to="#">HOME</Link></li>
      <li><Link smooth to="#about">ABOUT</Link></li>
      <li><Link smooth to="#skills">SKILLS</Link></li>
      <li><Link smooth to="#project">PROJECT</Link></li>
      <li><Link smooth to="#service">SERVICE</Link></li>
      <li><Link smooth to="#blogs">BLOGS</Link></li>
      <li><Link smooth to="#contact">CONTACT</Link></li>
    </>

  return (
    <div className="sticky top-0 bg-white z-30">
      <div class="navbar lg:px-16 sm:px-6 shadow-lg py-4">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-5 p-2 shadow-md rounded-box w-60 text-md font-medium bg-white">
              {navMenu}
            </ul>
          </div>
          <Link smooth to="#" class="text-secondary font-bold text-3xl tracking-wider xs:ml-14 ml-3">
            Ap<span className='text-neutral'>Aonik</span>
          </Link>
        </div>
        <div class="navbar-end hidden lg:flex z-0 text-gray-500">
          <ul class="menu menu-horizontal p-0 text-md font-medium text-secondary">
            {navMenu}
          </ul>
        </div>
      </div>
    </div>






  );
};

export default Header;