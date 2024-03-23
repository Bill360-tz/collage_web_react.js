import React, { Component } from 'react'
import './Home.css'
import Landing from '../../Components/Landing/Landing';
import Navbar from '../../Components/Navbar/Navbar';
import Motto from '../../Components/Motto/Motto';
import Courses from '../../Components/Courses/Courses';
// import Events from '../../Components/Events/Events';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import Formd from '../../Components/Formd/Formd';

export class Home extends Component {


  render() {
    return (
      <div className='home flex-c fill gap-10'>
      <Navbar/>
      <Landing/>
      <Motto/>
      <Courses/>
      <Formd/>
      <Contact/>
      <Footer/>
      </div>
    )
  }
}

export default Home