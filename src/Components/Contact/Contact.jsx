import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
AOS.init({
  duration: 2000
});

export class Contact extends Component {
  static propTypes = {}

  render() {
    return (
      <div id='contact' className='contact flex-c bg-w fill pad-10'>
        <div className="flex pad-10">
          <h3 className="theme-text  flex pompiere-regular"><LocationOnIcon sx={{ fontSize: 40 }} /> Our Location and Contacts</h3>
        </div>
        <div className="flex fill gap-10 pad-10 shadow-pri m-flex m-pad-0">
          <div  data-aos="zoom-in" className="flex-c rad-5 shadow-pri width-50 m-fill">
            <div  className='fill' dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7965.871023442939!2d36.689539499999995!3d-3.3659399999999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371de2b66ce351%3A0x28707241f85f9dfe!2sRaseem%20college%20and%20international%20languages!5e0!3m2!1sen!2stz!4v1711170211840!5m2!1sen!2stz" width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      `}} />
          </div>
          <div  data-aos="zoom-in" className="flex-c fill flex-centered pad-10">
            <div className="grid-2 fill m-flex">
              <div className="flex-c flex-centered pad-20">
                    <PinDropOutlinedIcon sx={{ fontSize: 50 }} />
                    <h3 className="">Our Location</h3>
                    <p className="normal-text">Kalolen, </p> <p className='normal-text'> Arusha Tanzania</p>
              </div>
              <div className="flex-c flex-centered pad-20">
                    <PermPhoneMsgOutlinedIcon sx={{ fontSize: 50 }} />
                    <h3 className="">Phone Us </h3>
                    <p className="normal-text">+255 739 396 585 </p> <p className='normal-text' > +255 713 396 585</p>
              </div>
              <div className="flex-c flex-centered pad-20">
                    <EmailOutlinedIcon sx={{ fontSize: 50 }} />
                    <h3 className="">Email Us</h3>
                    <p className="normal-text">joumamagogo@gmail.com </p> <p className='normal-text' >info@raseemcollege.com</p>
              </div>
              <div className="flex-c flex-centered pad-20">
                    <AccessTimeOutlinedIcon sx={{ fontSize: 50 }} />
                    <h3 className="">Opening Hours</h3>
                    <p className="normal-text">Monday - Friday </p> <p className='normal-text' > 8:00 Am - 6:00 Pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact