import React, { Component } from 'react'
import './Courses.css'
import Navbar from '../../Components/Navbar/Navbar';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import SchoolIcon from '@mui/icons-material/School';
import RandomTaglineComponent from '../../Components/RandomTaglineComponent/RandomTaglineComponent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Formd from '../../Components/Formd/Formd';
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
            },
            {
                id: 8,
                img: "/img/china.png",
                title: 'Chinese',
                price: 160000,
                oldPrice: 200000
            },
            {
                id: 8,
                img: "/img/japan.png",
                title: 'Japanese',
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
                id: 3,
                img: "/img/c7.jpg",
                title: 'Wildlife Management and Tourism',
               
            }, 
            {
                id: 4,
                img: "/img/c4.jpeg",
                title: 'Sale and Marketing',
               
            },
            {
                id: 5,
                img: "/img/c5.jpg",
                title: 'Computer Programs',
               
            },
            {
                id: 6,
                img: "/img/c6.jpg",
                title: 'Swahili and Culture',
               
            },
            {
                id: 7,
                img: "/img/c3.jpeg",
                title: 'Tour Operator',
               
            },
            {
                id: 8,
                img: "/img/c8.jpg",
                title: 'Customer Care Services',
               
            },
            {
                id: 9,
                img: "/img/c9.jpg",
                title: 'Communication skills',
               
            }
        ]
        return (

            <div className='cooo flex-c fill'>
                <Navbar />
                <div data-aos="fade-up" className="flex-c fill bg-w shadow-pri">
                    <div className="flex fill">
                        <div data-aos="zoom-in" className="flex-c flex-centered width-90 ">
                            <h1 className='pompiere-regular dadafe theme-text disText' >Our Courses</h1>
                            <h3 className="theme-text-c hhhj text-c"><RandomTaglineComponent /> </h3>
                        </div>
                        <div data-aos="fade-left" className="flex">
                            <img src={`/img/course2.png`} alt="" className="fill" />
                        </div>
                    </div>
                </div>
                <div className='courses flex-c fill bg-w pad-10 gap-10'>

                    <div className="flex fill pad-10 shadow-pri">
                        <h3 className="theme-text flex pompiere-regular"><SchoolIcon sx={{ fontSize: 40 }} /> Our Courses </h3>
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

                        <Link to={'/register/&'} data-aos="fade-up" className="flex-c rad-5 shadow-sec flex-centered pad-10 anchor courseDiv m-fill">
                            <span className="btn-pri-o pad-10 flex no-border">Enroll Now <ArrowForwardIcon /> </span>
                        </Link>
                    </div>
                </div>
                <div className='courses flex-c fill bg-w pad-10 gap-10'>

                    <div className="flex fill pad-10 shadow-pri">
                        <h3 className="theme-text flex pompiere-regular"><SchoolIcon sx={{ fontSize: 40 }} />International Languages</h3>
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

                        <Link to={'/register/&'} data-aos="fade-up" className="flex-c rad-5 shadow-sec flex-centered pad-10 anchor courseDiv m-fill">
                            <span className="btn-pri-o pad-10 flex no-border">Enroll Now <ArrowForwardIcon /> </span>
                        </Link>
                    </div>
                </div>
                <Formd/>
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Courses