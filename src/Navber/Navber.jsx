import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/addcoffee'>Add Coffee</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/register'>register</Link></li>
            <li><Link to='/user'>User</Link></li>
            <li><Link to='/signup'>Signup</Link></li>
          </ul>
        </div>
   
      </div>
    );
};

export default Navber;