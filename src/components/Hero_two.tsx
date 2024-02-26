import { FaArrowCircleRight } from 'react-icons/fa';
import IllustrationTwo from '../assets/illustration-2.svg';
import bgCurve from '../assets/bg-curve-desktop.svg';
import Person from '../assets/avatar-testimonial.jpg'

const Hero_two = () => {
  return (
    <>
      <img src={bgCurve} className="bgCurve" />
      <div className="row hero-two">
        <div className="container hero-two">
          <div className="col">
            <h1 className="header-one raleway raleway-700">
              Stay productive, wherever you are
            </h1>
            <p className="sub-header-one  raleway raleway-400">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="sub-header-one  raleway raleway-400">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
            <a href="#" className="sub-header-three">
              See how Fylo works
              <FaArrowCircleRight />
            </a>
            <div className="card">
              <div className="col">
                <span className="quote">&#8220;</span>
                <p className="testimonial-text">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="row">
                  <img src={Person} />
                  <div className="col">
                    <h5>Kyle Burton</h5>
                    <p>Founder & CEO, Huddle</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={IllustrationTwo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_two;
