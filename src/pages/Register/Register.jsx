
import React, { Component } from 'react'
import { useParams } from 'react-router-dom';
import './Register.css'
import Navbar from '../../Components/Navbar/Navbar';
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import RandomTaglineComponent from '../../Components/RandomTaglineComponent/RandomTaglineComponent';
import Reviews from '../../Components/reviews/Reviews';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
export class Register extends Component {

  render() {

    // const {id}  = useParams();
    return (
      <div className='register flex-c gap-10'>
        <Navbar />
        <div className="flex-c fill bg-w shadow-pri">
          <div className="flex fill">
            <div className="flex-c flex-centered width-90 ">
              <h1 className=' pompiere-regular jkjk theme-text' >Register and Join Us</h1>
              <h3 className="theme-text-c"><RandomTaglineComponent /> </h3>
            </div>
            <div className="flex">
              <img src={`/img/reg01.png`} alt="" className="fill" />
            </div>
          </div>
        </div>

        <RegisterForm />
        <Reviews />
        <Contact />
        <Footer />

      </div>
    )
  }
}

export default Register