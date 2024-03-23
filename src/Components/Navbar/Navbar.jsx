import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
window.scrollBy(0, +100);
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileNavs, setMobileNavs] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
      setShow(true);
    } else { // if scroll up show the navbar
      setShow(false);
    }

    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    // cleanup function
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className={`navbar flex-c fill active ${show && 'hidden'}`} >
      <nav className="flex fill pad-10 shadow-pri bg-w m-hide">
        <div className="flex fill flex-s-btn">
          <Link to='/' className="flex anchor logo">
            <img src={"/logo.png"} alt="" />
            <h1 className='theme-text disText w-600'>RASEEM COLLEGE</h1>
          </Link>
          <div className="flex pad-3">
            <Link to={'/'} className='normal-text anchor navlink w-500 marg-r-10 pompiere-regular' >Home</Link>
            <Link to={'/Courses'} className='normal-text anchor navlink w-500 marg-r-5 pompiere-regular' >Courses</Link>
            <Link to={'/contact'} className='normal-text anchor navlink w-500 marg-r-5 pompiere-regular' >Contacts</Link>
            {/* <Link to={'/Events'} className='normal-text anchor navlink w-500 marg-r-5 pompiere-regular' >Events</Link> */}
            <Link to={'/register/:id'} className='normal-text anchor navlink w-500 marg-r-5 btn-pri' >REGISTER</Link>
          </div>

          <div className="flex">
            <Link className="flex anchor w-600 phone disText">
              +255 739 396 585
            </Link>
            <span className="WhatsAppIcon">
              <WhatsAppIcon />
            </span>
            <span className="facebook">
              <FacebookIcon />
            </span>

            <span className="YouTubeIcon">
              <YouTubeIcon sx={{ fontSize: 30 }} />
            </span>
            <span className="XIcon">
              <XIcon sx={{ fontSize: 20 }} />
            </span>

          </div>
        </div>
      </nav>
      <nav className="flex fill pad-10 shadow-pri bg-w d-hide">
        <div className="flex fill flex-s-btn">
          <Link to='/' className="flex anchor logo">
            <img src={"/logo.png"} alt="" />
            <h1 className='theme-text disText w-600'>RASEEM COLLEGE</h1>
          </Link>

          <div 
          onClick={()=> setMobileNavs(!mobileNavs)}
          className="btn btn-pri-o flex">
            {!mobileNavs?
            <MenuIcon />:
            <CloseIcon />
          }
            
            
            </div>
        </div>
      </nav>

      {mobileNavs &&
        <div className="flex-c bg-w fill  pad-20 d-hide shadow-pri h-nav">
          {/* <Link to='/' className="flex anchor logo">
       <img src={"/logo.png"} alt="" />
       <h1 className='theme-text disText w-600'>RASEEM COLLEGE</h1>
     </Link> */}


          <div className="flex-c fill ">
            <Link to={'/'} className='normal-text anchor navlink w-500 marg-r-10 pompiere-regular' >Home</Link>
            <Link to={'/Courses'} className='normal-text anchor navlink w-500 marg-r-5 pompiere-regular' >Courses</Link>
            <Link to={'/contact'} className='normal-text anchor navlink w-500 marg-r-5 pompiere-regular' >Contacts</Link>
            {/* <Link to={'/Events'} className='normal-text anchor navlink w-500 marg-r-5 pompiere-regular' >Events</Link> */}
            <Link to={'/register/:id'} className='normal-text anchor navlink w-500 marg-r-5 btn-pri m-fill' >REGISTER</Link>
          </div>

          <Link className="flex anchor w-600 phone disText">
            +255 739 396 585
          </Link>
          
          <div className="flex">

            <span className="WhatsAppIcon">
              <WhatsAppIcon />
            </span>
            <span className="facebook">
              <FacebookIcon />
            </span>

            <span className="YouTubeIcon">
              <YouTubeIcon sx={{ fontSize: 30 }} />
            </span>
            <span className="XIcon">
              <XIcon sx={{ fontSize: 20 }} />
            </span>
           
          </div>
          
          
        </div>
      }


    </div>
  );
}

export default Navbar;
