import React from 'react';
import Logo from '../assets/logo.svg';

const NavBar = () => {
  const navItems = ['Features', 'Team', 'Sign In'];
  return (
    <div className='row'>
      <nav className="raleway container">
        <a href="#" className="">
          <img className="nav-logo" src={Logo} alt="" />
        </a>

        <ul className="navbar-nav">
          {navItems.map((item) => (
            <li className="nav-item">
              <a className="nav-link" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
