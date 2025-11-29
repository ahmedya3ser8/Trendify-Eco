import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { FaCartShopping, FaChevronDown, FaRegHeart, FaUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";

const Header = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const [menuItems] = useState([
    { route: '/', text: 'Home' },
    { route: '/products', text: 'Products' },
    { route: '/about-us', text: 'About Us' },
    { route: '/blog', text: 'Blog' },
    { route: '/contact-us', text: 'Contact Us' },
  ])
  const logout = () => {
    setOpenMenu(false);
    localStorage.removeItem('access_token');
    navigate('/auth/login');
  }
  return (
    <header className="fixed w-full left-0 top-0 z-999 bg-white py-4 shadow">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to='/' className="logo text-2xl text-main font-bold"> Trendify </Link>
          <ul className="flex items-center space-x-4">
            {menuItems.map((item, index) => (
              <li key={index}> 
                <NavLink to={item.route} className="text-gray-500 font-semibold transition duration-300"> {item.text} </NavLink>
              </li>
            ))}
          </ul>
          <ul className="flex items-center space-x-4">
            <div className="relative">
              <li onClick={() => setOpenMenu(prev => !prev)} className="flex items-center gap-2 bg-gray-100 text-main p-2 rounded-lg cursor-pointer">
                <FaUser />
                <span> ahmed yasser </span>
                <FaChevronDown />
              </li>
              {openMenu && (
                <ul className="absolute left-0 top-12 bg-white w-32 text-center rounded-lg overflow-hidden">
                  <li onClick={() => setOpenMenu(false)} className="w-full p-2 font-medium text-secondary transition duration-300 hover:bg-gray-200 cursor-pointer"> All Orders </li>
                  <li onClick={() => logout()} className="w-full p-2 font-medium text-secondary transition duration-300 hover:bg-gray-200 cursor-pointer flex items-center justify-center gap-1"> <FiLogOut /> Logout </li>
                </ul>
              )}
            </div>
            <li>
              <Link to='/wishlist'>
                <FaRegHeart className="text-xl text-main" />
              </Link>
            </li>
            <li>
              <Link to='/cart'>
                <FaCartShopping className="text-xl text-main" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
