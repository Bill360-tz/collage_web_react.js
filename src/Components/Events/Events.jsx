import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Events.css'
import CelebrationIcon from '@mui/icons-material/Celebration';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom'

export class Events extends Component {
  static propTypes = {}

  render() {
  const  data = [
        {
            id: 1,
            title: "Fourth Year Graduation",
            description: "Our Forth year Graduation Ceremony. Honorable DC Mpapa present",
            img: '/img/grad01.jpg'
        },
        {
            id: 2,
            title: "Fourth Year Graduation",
            description: "Our Forth year Graduation Ceremony. Honorable DC Mpapa present",
            img: '/img/grad01.jpg'
        },
        {
            id: 3,
            title: "Fourth Year Graduation",
            description: "Our Forth year Graduation Ceremony. Honorable DC Mpapa present",
            img: '/img/grad01.jpg'
        },
        {
            id: 4,
            title: "Fourth Year Graduation",
            description: "Our Forth year Graduation Ceremony. Honorable DC Mpapa present",
            img: '/img/grad01.jpg'
        }
    ];
    return (
      <div className='Events flex-c fill bg-w pad-10'>
        <div className="flex fill flex-s-btn pad-10 shadow-pri">
            <h3 className="theme-text  flex pompiere-regular"><CelebrationIcon sx={{ fontSize: 40 }} /> Events</h3>
            <Link to={`/events`} className='anchor btn-pri-o flex '>See All <ArrowCircleRightIcon/></Link>
        </div>
        <div className="flex-c fill pad-10">
            <div className="grid-4 gap-10 fill m-flex">
                {data.map(event=>(
                    <Link to={`/event/${event.id}`} className='flex-c anchor eventDiv'>
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
      </div>
    )
  }
}

export default Events