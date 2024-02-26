import React from 'react';

const GetStarted = () => {
  return (
    <div className="row getStarted">
      <div className="container getStarted">
        <div className="col">
          <h1 className="header-one raleway raleway-700">
            Get early access today
          </h1>
          <p className="sub-header-one  raleway raleway-400">
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className="col">
          <input
            className="inputNoBorder"
            type="text"
            placeholder="Enter your email..."
          />
          <button className="btn">Get Started For Free</button>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
