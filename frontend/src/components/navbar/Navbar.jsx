import React from "react";
import img from "../../assets/bird.png";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-secondary">
      <div className=" max-w-screen-xl mx-auto p-2">
        <div className="flex justify-between items-center">
        <Link to='/' >  <img src={img} alt="logo" className="h-10" /></Link>
          <ul className="flex items-center space-x-4">
            <li>
              <button className="bg-dark-subtle p-1 rounded ">
                <BsFillSunFill className="text-secondary" size={24} />
              </button>
            </li>
            <li>
              <input type="text" className="border-2 border-dark-subtle text-xl rounded p-1 bg-transparent outline-none focus:border" placeholder="search.." />
            </li>
            <li className="text-white text-lg font-semibold"><Link to='auth/signin'>Login</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
