import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='navbar flex-c fill'>
        <nav className="flex fill pad-10 shadow-pri bg-w">
          <div className="flex fill flex-s-btn">
            <Link to='/' className="flex anchor logo">
              <img src={"/logo.png"} alt="" />
              <h1 className='theme-text disText w-600'>RASEEM COLLEGE</h1>
            </Link>
            <div className="flex ">
              <Link className='normal-text anchor navlink w-500 marg-r-10 pompiere-regular' >HOME</Link>
              <Link className='normal-text anchor navlink w-500 marg-r-5 pompiere-regular' >COURSES</Link>
              <Link className='normal-text anchor navlink w-500 marg-r-5 pompiere-regular' >EVENTS</Link>
              <Link className='normal-text anchor navlink w-500 marg-r-5 pompiere-regular' >ENROLL</Link>
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
      </div>
    )
  }
}

export default Navbar