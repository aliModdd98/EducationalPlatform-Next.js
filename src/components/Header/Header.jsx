import { useState } from 'react';
import Link from 'next/link';
import bg from '@/assets/bg.jpg';
import { BsQuestionCircle, BsTelephone } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import Dropdown from './DropDown';
import './HeaderStyle.css'
export default function Header({ pageName, desc }) {
  const [open, setOpen] = useState(false);

  const containerStyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
   <div className="home">

     <div data-aos="flip-left">
      <div className='header' style={containerStyle}>
        
        <div className="overlay">

          {/* navBar */}
          <nav className="navbar">
            <div className="left-section">
              <span className="icon-text">
                <BsQuestionCircle className="custom-icon" /> Have a question?
              </span>
              <span className="icon-text">
                <BsTelephone className="custom-icon" /> 10 20 123 456
              </span>
              <span className="icon-text">
                <FiMail className="custom-icon" /> info@mydomain.com
              </span>
            </div>
            <div className="right-section">
              <button className='btn'>Log in</button>
              <button className='btn'>Register</button>
            </div>
          </nav>

          <hr className="horizontal-line" />

          <div className="top-header">
            <div className='logo'> Learner</div>
            <div className="details">
              <div className="item">
                <Link href="/" exact legacyBehavior>
                  <a className="item">Home</a>
                </Link>
              </div>
              <div className="item">
                <Dropdown open={open} setOpen={setOpen} />
              </div>
              <div className="item">
                <Link href="/teachers" legacyBehavior>
                  <a className="item boxteachers">Our Staff</a>
                </Link>
              </div>
              <div className="item">
                <Link href="/about" legacyBehavior>
                  <a className="item">About</a>
                </Link>
              </div>
              <div className="item">
                <Link href="/gallery" legacyBehavior>
                  <a className="item">Gallery</a>
                </Link>
              </div>
              <div className="item">
                <Link href="/news" legacyBehavior>
                  <a className="item">News</a>
                </Link>
              </div>
              <div className="item">
                <Link href="/contact" legacyBehavior>
                  <a className="item">Contact</a>
                </Link>
              </div>
            </div>
            <div className="btn">
              <button>ENROLL NOW</button>
            </div>
          </div>

          <div className="content-header">
            <p>{pageName}</p>
            <h3>{desc}</h3>
            <button className='btn'>EXPLORE COURSES</button>
          </div>
        </div>
      </div>
    </div> </div>
  );
}