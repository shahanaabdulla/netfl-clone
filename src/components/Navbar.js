import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); 
    };
  }, []);

  return (
    <div className={`navbar ${show && 'nav_dark'}`}>
      <img
        className="nav_logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="NETFLIX"
      />
      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="AVATAR"
      />
    </div>
  );
}

export default Navbar;
