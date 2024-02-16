import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Home.css'
import Landing from '../../Components/Landing/Landing';
import Navbar from '../../Components/Navbar/Navbar';
import Motto from '../../Components/Motto/Motto';
import Courses from '../../Components/Courses/Courses';
import Events from '../../Components/Events/Events';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

export class Home extends Component {
  static propTypes = {}

  render() {
    return (
      <div className='home flex-c fill gap-10'>
      <Navbar/>
      <Landing/>
      <Motto/>
      <Courses/>
      <Events/>
      <Contact/>
      <Footer/>
      </div>
    )
  }
}

export default Home