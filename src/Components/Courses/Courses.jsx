import React, { Component } from 'react'
import './Courses.css'
import SchoolIcon from '@mui/icons-material/School';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom'
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
        title: 'Rassia',
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
      },
      {
        id: 4,
        img: "/img/german.png",
        title: 'German',
        price: 160000,
        oldPrice: 200000
      },
      {
        id: 5,
        img: "/img/ital.png",
        title: 'Italian',
        price: 160000,
        oldPrice: 200000
      },
      {
        id: 6,
        img: "/img/arab.png",
        title: 'Arabic',
        price: 160000,
        oldPrice: 200000
      },
      {
        id: 7,
        img: "/img/spanish.png",
        title: 'Spanish',
        price: 160000,
        oldPrice: 200000
      }
    ]
    return (
      <div className='courses flex-c fill bg-w pad-10 gap-10'>
        
        <div className="flex fill pad-10 shadow-pri">
          <h3 className="theme-text flex pompiere-regular"><SchoolIcon sx={{ fontSize: 40 }} /> Our Courses (International Languages)</h3>
        </div>
        <div className="grid-4  fill m-flex course-wrapper">
          {data.map(course => (
            <Link to={`/register/${course.id}`} key={course.id} className="flex-c rad-5 shadow-sec pad-10 courseDiv anchor">
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

          <Link className="flex-c rad-5 shadow-sec flex-centered pad-10 anchor courseDiv">
            <span className="btn-pri-o pad-10 flex no-border">Enroll Now <ArrowForwardIcon /> </span>
          </Link>
        </div>
      </div>
    )
  }
}

export default Courses