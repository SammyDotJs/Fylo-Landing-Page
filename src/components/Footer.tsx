import React from 'react'
import Logo from '../assets/logo-footer.svg';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="row footer">
      <div className="container footer">
        <div className="col">
          <a href="#" className="">
            <img className="nav-logo" src={Logo} alt="" />
          </a>
          <p>Phone: +1-543-123-4567</p>
          <p>example@fylo.com</p>
        </div>
        <ul className="col link">
          <li>About Us</li>
          <li>Jobs</li>
          <li>Press</li>
          <li>Blog</li>
        </ul>
        <ul className="col link">
          <li>Contact Us</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>
        <ul className="row link">
          <FaFacebookF  className='social-icon'/>
          <FaTwitter  className='social-icon'/>
          <FaInstagram className='social-icon'/>
        </ul>
      </div>
    </footer>
  );
}

export default Footer