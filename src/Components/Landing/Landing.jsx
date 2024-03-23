import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Landing.css'
import CreateIcon from '@mui/icons-material/Create';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

AOS.init({
  duration: 2000
});
export class Landing extends Component {
  
  static propTypes = {}

  render() {
    return (
      <div  data-aos="fade-up" className='landing flex-c fill'>
        <div className="grid-2 fill  m-flex">
          <div  className="flex-c fill flex-centered textBox1 pad-20 ">
            <h1 data-aos="zoom-in" className="theme-text collageName w-600">RASEEM COLLEGE</h1>
            <h3 data-aos="zoom-in" className='collageName2 w-600'>AND INTERNATIONAL LANGUAGES</h3>
            <h3 data-aos="zoom-in" className="pompiere-regular">“Your Passport to Global Communication”</h3>
            <div data-aos="zoom-in" className="flex width-50  flex-centered m-fill">
            <Link to={'/register/&'} className='btn-pri-o bg-w w-600 pad-10 fill flex flex-centered rad-5 shadow-sec'> <CreateIcon/>REGISTER</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing