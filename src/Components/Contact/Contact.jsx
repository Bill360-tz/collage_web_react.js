import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Contact.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import PinDropIcon from '@mui/icons-material/PinDrop';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
export class Contact extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='contact flex-c bg-w fill pad-10'>
        <div className="flex pad-10">
          <h3 className="theme-text  flex pompiere-regular"><LocationOnIcon sx={{ fontSize: 40 }} /> Our Location and Contacts</h3>
        </div>
        <div className="grid-2 fill gap-10 pad-10 shadow-pri">
          <div className="flex-c rad-5 shadow-pri">
            <div dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.9357517284097!2d36.68697707497219!3d-3.365881296608793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18371de2b66ce351%3A0x28707241f85f9dfe!2sRaseem%20college%20and%20international%20languages!5e0!3m2!1sen!2stz!4v1707454445951!5m2!1sen!2stz" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      `}} />
          </div>
          <div className="flex-c fill flex-centered pad-10">
            <div className="grid-2 pad-20 fill">
              <div className="flex-c flex-centered pad-20">
                    <PinDropOutlinedIcon sx={{ fontSize: 50 }} />
                    <h3 className="normal-text">Our Location</h3>
                    <p className="normal-text">Kalolen, </p> <p> Arusha Tanzania</p>
              </div>
              <div className="flex-c flex-centered pad-20">
                    <PermPhoneMsgOutlinedIcon sx={{ fontSize: 50 }} />
                    <h3 className="normal-text">Phone Us </h3>
                    <p className="normal-text">+255 739 396 585 </p> <p> +255 713 396 585</p>
              </div>
              <div className="flex-c flex-centered pad-20">
                    <EmailOutlinedIcon sx={{ fontSize: 50 }} />
                    <h3 className="normal-text">Email Us</h3>
                    <p className="normal-text">joumamagogo@gmail.com </p> <p>info@raseemcollege.com</p>
              </div>
              <div className="flex-c flex-centered pad-20">
                    <AccessTimeOutlinedIcon sx={{ fontSize: 50 }} />
                    <h3 className="normal-text">Opening Hours</h3>
                    <p className="normal-text">Monday - Friday </p> <p> 8:00 Am - 6:00 Pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact