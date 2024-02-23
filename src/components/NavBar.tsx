import React from 'react';

const NavBar = () => {

  const navItems = ["Features" , "Team", "Sign In"]
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        <img className="nav-logo" src="./images/logo.svg" alt="" />
      </a>

      <ul className="navbar navbar-nav">
        {navItems.map((item) => (
          <li className="nav-item">
            <a className="nav-link" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
