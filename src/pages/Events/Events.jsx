import React, { Component } from 'react'
import './Events.css';
import Navbar from '../../Components/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import RandomTaglineComponent from '../../Components/RandomTaglineComponent/RandomTaglineComponent';
import { Link } from 'react-router-dom';

export class Events extends Component {

  render() {
    const data = [
      {
        id: 1,
        title: "Fourth Year Graduation",
        description: "Our Forth year Graduation Ceremony. Honorable DC Mpapa present",
        img: '/img/grad01.jpg'
      },
      {
        id: 2,
        title: "College Nature Walk",
        description: "2023 Raseem College Nature walk. Kilimanjaro Game Reserve.",
        img: '/img/nature.jpg'
      },
      {
        id: 3,
        title: "Charity Run",
        description: "2023 Raseem College Charity Run. WeCare CHild Care Arusha",
        img: '/img/run.jpg'
      },
      {
        id: 4,
        title: "College Trivia Night",
        description: "2023 Raseem College Trivia Night. Get Together Night",
        img: '/img/trivia.jpg'
      },
      {
        id: 5,
        title: "Fourth Year Graduation",
        description: "Our Forth year Graduation Ceremony. Honorable DC Mpapa present",
        img: '/img/grad01.jpg'
      },
      {
        id: 6,
        title: "Fourth Year Graduation",
        description: "Our Forth year Graduation Ceremony. Honorable DC Mpapa present",
        img: '/img/grad01.jpg'
      },
      {
        id: 7,
        title: "Fourth Year Graduation",
        description: "Our Forth year Graduation Ceremony. Honorable DC Mpapa present",
        img: '/img/grad01.jpg'
      },
      {
        id: 8,
        title: "Fourth Year Graduation",
        description: "Our Forth year Graduation Ceremony. Honorable DC Mpapa present",
        img: '/img/grad01.jpg'
      },
    ];
    return (
      <div className='events-s flex-c fill'>
        <Navbar />
        <div data-aos="fade-up" className="flex-c fill bg-w shadow-pri">
                    <div className="flex fill">
                        <div data-aos="zoom-in" className="flex-c flex-centered width-90 ">
                            <h1 className='pompiere-regular dadafe theme-text' >College Events </h1>
                            <h3 className="theme-text-c"><RandomTaglineComponent /> </h3>
                        </div>
                        <div data-aos="fade-left" className="flex pad-10">
                            <img src={`/img/event.png`} alt="" className="fill" />
                        </div>
                    </div>
                </div>
        <div className="flex-c fill pad-10 bg-w">
          <div className="grid-4 gap-10 fill m-flex">
            {data.map(event => (
              <Link data-aos="fade-up" className='flex-c anchor eventDiv'>
                <div className="flex-c">
                  <img src={event.img} alt={event.title} className="fill" />
                </div>
                <div className="flex fill pad-10 flex-centered">
                  <h3 className="theme-text">{event.title}</h3>
                </div>
                <div className="flex pad-5 flex-centered fill">
                  <p className="normal-text text-c">{event.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Contact />
        <Footer />
      </div>
    )
  }
}

export default Events