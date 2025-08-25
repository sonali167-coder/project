import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { storeContext } from '../../context/StoreContext';

const menuItems = [
  { name: "home", path: "/" },
  { name: "menu", path: "/menu", href: "explore-menu" },
  { name: "mobile-app", path: "/mobile-app", href: "app-download" },
  { name: "contact us", path: "/contact-us", href: "contact-us" }
];

const Navbar = ({setshowLogin}) => {
  const [activeItem, setActiveItem] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleClick = (item) => {
    setActiveItem(item.name);
    setMenuOpen(false);
    if (item.href && location.pathname === item.path) {
      const section = document.getElementById(item.href);
      if (section) section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const {cartTotal, cartItem} = useContext(storeContext)
  const totalItems = Object.values(cartItem).reduce((sum, qty) => sum + qty, 0);

  return (
    <div className='navbar'>
      <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
        {menuItems.map((item, i) => (
          <li key={i}>
            {item.name === "home" ? (
              <Link
                to={item.path}
                className={activeItem === item.name ? "active" : ""}
                onClick={() => handleClick(item)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                href={item.href ? `#${item.href}` : item.path}
                className={activeItem === item.name ? "active" : ""}
                onClick={() => handleClick(item)}
              >
                {item.name}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt='search' />
        <div className='navbar-search-icon'>
          <Link to='/cart'><img src={assets.basket_icon} alt='basket' /></Link>
          <div className={cartTotal() === 0 ? "" : "dot"}>{totalItems}</div>
        </div>
        <button onClick={() => setshowLogin(true)}>sign in</button>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
