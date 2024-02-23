import React from 'react';
import IllustrationOne from '../assets/illustration-1.svg';

const Hero_one = () => {
  return (
    <div className="row">
      <div className="container hero-one">
        <div className="col">
          <h1 className="header-one raleway raleway-700">
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="sub-header-one  raleway raleway-400">
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <div className="row">
            <input className="inputBorder" type="text" placeholder='Enter your email...'/>
            <button className="btn">Get Started</button>
          </div>
        </div>
        <div className="col">
          <img src={IllustrationOne} />
        </div>
      </div>
    </div>
  );
};

export default Hero_one;
