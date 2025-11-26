import { Link, NavLink } from "react-router-dom";

import { FaCartShopping, FaChevronDown, FaRegHeart, FaUser } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [menuItems] = useState([
    { route: '/', text: 'Home' },
    { route: '/products', text: 'Products' },
    { route: '/about-us', text: 'About Us' },
    { route: '/contact-us', text: 'Contact Us' },
    { route: '/blog', text: 'Blog' }
  ])
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
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
              <FaUser />
              <span> ahmed yasser </span>
              <FaChevronDown />
            </div>
            <li>
              <Link to='/wishlist'>
                <FaRegHeart className="text-xl" />
              </Link>
            </li>
            <li>
              <Link to='/cart'>
                <FaCartShopping className="text-xl" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header;
