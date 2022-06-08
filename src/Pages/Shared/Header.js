import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../Asset/Ap-Logo/Ap.png"
const Header = () => {
  const navMenu =
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/myPortpolio">My Portfolio</Link></li>
    </>

  return (
    <div class="navbar md:px-14 sm:px-6 shadow-lg py-3">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow-md  rounded-box w-52 text-md font-medium text-primary">
            {navMenu}
          </ul>
        </div>
        <Link to="" class="text-primary font-bold text-2xl">
                 Ap | | Vai
        </Link>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0 text-md font-medium text-primary">
          {navMenu}
        </ul>
      </div>
    </div>
  );
};

export default Header;