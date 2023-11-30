import React from 'react';
import logo from '../../assets/bird.png';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BiMoviePlay } from 'react-icons/bi';
import { FaUserNinja } from 'react-icons/fa';
import {FiLogOut} from 'react-icons/fi'
import { useDispatch } from 'react-redux';




const Navbar = () => {
  return (
    <nav className='w-48 min-h-screen bg-secondary border-r border-gray-300 '>
     <div className='pl-5 sticky top-0 p-5 flex flex-col justify-between h-screen  text-white '>
     <ul >
        <li>
          <Link to='/'>
            <img className='h-14 p-2' src={logo} alt='' />
          </Link>
        </li>

        <li>
          <NavItems  to='/'>
            <AiOutlineHome />
            <span>Home</span>
          </NavItems>
        </li>
        <li>
          <NavItems to='/actors'>
            <FaUserNinja />
            <span>Actor</span>
          </NavItems>
        </li>
        <li >
          <NavItems to='/movies'>
            <BiMoviePlay />
            <span>Movies</span>
          </NavItems>
        </li>
      </ul>

      <div className=''>
        <span>Admin</span>
     <LogoutButton/>
      </div>
     </div>
     

    </nav>
  );
};



const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.setItem('auth-token', null);
        dispatch({ type: 'LOGOUT_USER' });
    };

    return (
        <button onClick={handleLogout} className=' flex items-center space-x-2 font-bold'> <FiLogOut/>
        <span>Logout</span></button>
    );
};

export default Navbar;

const NavItems = ({ children, to }) => {
  const commonStyles = ' flex item-center text-lg space-x-2 p-3 hover:opacity-80';
  return (
    <NavLink
      className={({ isActive }) => {
        return isActive ? `text-white ${commonStyles}` : `text-gray-400 ${commonStyles}`;
      }}
      to={to}
    >
      {children}
    </NavLink>
  );
};
