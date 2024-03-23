import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './Events.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CelebrationIcon from '@mui/icons-material/Celebration';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom'
AOS.init({
    duration: 2000
});
export class Events extends Component {
    static propTypes = {}

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
            }
        ];
        return (
            <div className='Events flex-c fill bg-w pad-10'>
                <div className="flex fill flex-s-btn pad-10 shadow-pri">
                    <h3 className="theme-text  flex pompiere-regular"><CelebrationIcon sx={{ fontSize: 40 }} /> Events</h3>
                    <Link to={`/events`} className='anchor btn-pri-o flex '>See All <ArrowCircleRightIcon /></Link>
                </div>
                <div className="flex-c fill pad-10">
                    <div className="grid-4 gap-10 fill m-flex">
                        {data.map(event => (
                            <Link data-aos="fade-up" to={`/event/${event.id}`} className='flex-c anchor eventDiv'>
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