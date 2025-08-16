import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'

const menuItems = [
  { name: "home", path: "/" },
  { name: "menu", path: "/menu" },
  { name: "mobile-app", path: "/mobile-app" },
  { name: "contact us", path: "/contact-us" }
];

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("home");

  return (
    <div className='navbar'>
      <ul className="navbar-menu">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className={activeItem === item.name ? "active" : ""}
            onClick={() => setActiveItem(item.name)}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt='' />
        <div className='navbar-search-icon'>
          <img src={assets.basket_icon} alt='' />
          <div className='dot'></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  )
}

export default Navbar
