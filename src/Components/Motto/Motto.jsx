import PropTypes from 'prop-types'
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { Component } from 'react'
import './Motto.css'

AOS.init({
  duration: 2000
});

export class Motto extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='motto flex-c fill'  >
        <div className="grid-2 fill m-flex">
          <div data-aos="fade-up" className="flex-c">
            <div className="flex-c fil">
              <img src="logo3.png" alt="" className="fill rad-5" />
            </div>
          </div>
          <div data-aos="fade-up" className="flex-c flex-centered bg-w shadow-pri rad-5">
            <div className="flex-c fill pad-10">
              <div className="flex fill pad-5 flex-centered">
                <h3 className="theme-text  pompiere-regular">Our Vision</h3>
              </div>
              <div className="flex-c fill pad-5">
                <p className="normal-text text-j ">At Raseem College, we envision fostering a vibrant global community by providing exceptional language education. We aspire to empower individuals with linguistic proficiency, cultural understanding, and limitless opportunities for success.</p>
              </div>
            </div>
            <div className="flex-c fill pad-10">
              <div className="flex fill pad-5 flex-centered">
                <h3 className="theme-text  pompiere-regular">Our Mission</h3>
              </div>
              <div className="flex-c fill pad-5">
                <p className="normal-text text-j ">Our mission at Raseem college is to cultivate linguistic fluency, cultural appreciation, and cross-cultural communication skills. Through innovative teaching methods and a supportive environment, we empower learners to thrive globally.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Motto