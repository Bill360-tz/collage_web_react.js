import React, { Component } from 'react'
import './Courses.css'

import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
  duration: 2000
});

export class Courses extends Component {

  render() {

    function numberFormat(n) {
      var parts = n.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }

    const data = [
      {
        id: 1,
        img: "/img/rassia.png",
        title: 'Russia',
        price: 160000,
        oldPrice: 200000
      },
      {
        id: 2,
        img: "/img/eng.png",
        title: 'English',
        price: 160000,
        oldPrice: 200000
      },
      {
        id: 3,
        img: "/img/french.png",
        title: 'French',
        price: 160000,
        oldPrice: 200000
      }
    ]
    const otherCourses = [

      {
        id: 1,
        img: "/img/c2.jpeg",
        title: 'Hotel Catering Management',

      },
      {
        id: 2,
        img: "/img/c3.jpeg",
        title: 'Wildlife Management and Tourism',

      },
      {
        id: 3,
        img: "/img/c4.jpeg",
        title: 'Sale and Marketing',

      }
    ]
    return (
      <>

        <div className='courses flex-c fill bg-w pad-10 gap-10'>

          <div className="flex fill pad-10 shadow-pri">
            <h3 className="theme-text flex pompiere-regular"><SchoolIcon sx={{ fontSize: 40 }} /> Our Courses</h3>
          </div>
          <div className="grid-4  fill m-flex course-wrapper">
            {otherCourses.map(course => (
              <Link to={`/register/${course.id}`} key={course.id} className="flex-c rad-5 shadow-sec pad-10 courseDiv anchor" data-aos="fade-up">
                <div className="flex-c flex-centered fill">
                  <img src={course.img} alt="" className="fill" />
                </div>
                <div className="flex-C flex-centered fill pad-10 ">
                  <div className="flex flex-centered fill pad-10 pad-l-0 ">
                    <h3 className="normal-text  disText w-500">{course.title}</h3>
                    {/* <small className="normal-text">Tsh. {numberFormat(course.price) }/-</small>
                  <small className="normal-text grey text-cross">{numberFormat(course.oldPrice)}/-</small> */}
                  </div>
                  <div className="flex flex-centered fill m-flex pad-10 pad-l-0 pad-r-0">
                    <small className="btn-pri flex width-60 flex-centered rad-10 w-500">ENROLL</small>
                    {/* <div className="grid-2">
                    <Link className='btn-pri-o pad-0'><WhatsAppIcon /></Link>
                    <Link className='btn-pri-o pad-0'><MailOutlineIcon /></Link>
                  </div> */}
                  </div>
                </div>
              </Link>
            ))}

            <Link to={'/courses'} data-aos="fade-up" className="flex-c rad-5 shadow-sec flex-centered pad-10 anchor courseDiv m-fill">
              <span className="btn-pri-o pad-10 flex no-border">View All <ArrowForwardIcon /> </span>
            </Link>
          </div>
        </div>
        <div className='courses flex-c fill bg-w pad-10 gap-10'>

          <div className="flex fill pad-10 shadow-pri">
            <h3 className="theme-text flex pompiere-regular"><SchoolIcon sx={{ fontSize: 40 }} /> International Languages</h3>
          </div>
          <div className="grid-4  fill m-flex course-wrapper">
            {data.map(course => (
              <Link to={`/register/${course.id}`} key={course.id} className="flex-c rad-5 shadow-sec pad-10 courseDiv anchor" data-aos="fade-up">
                <div className="flex-c flex-centered fill">
                  <img src={course.img} alt="" className="fill" />
                </div>
                <div className="flex-C flex-centered fill pad-10 ">
                  <div className="flex flex-centered fill pad-10 pad-l-0 ">
                    <h3 className="normal-text  disText w-500">{course.title}</h3>
                    {/* <small className="normal-text">Tsh. {numberFormat(course.price) }/-</small>
                  <small className="normal-text grey text-cross">{numberFormat(course.oldPrice)}/-</small> */}
                  </div>
                  <div className="flex flex-centered fill m-flex pad-10 pad-l-0 pad-r-0">
                    <small className="btn-pri flex width-60 flex-centered rad-10 w-500">ENROLL</small>
                    {/* <div className="grid-2">
                    <Link className='btn-pri-o pad-0'><WhatsAppIcon /></Link>
                    <Link className='btn-pri-o pad-0'><MailOutlineIcon /></Link>
                  </div> */}
                  </div>
                </div>
              </Link>
            ))}

            <Link to={'/courses'} data-aos="fade-up" className="flex-c rad-5 shadow-sec flex-centered pad-10 anchor courseDiv m-fill">
              <span className="btn-pri-o pad-10 flex no-border">View All <ArrowForwardIcon /> </span>
            </Link>
          </div>
        </div>
      </>

    )
  }
}

export default Courses