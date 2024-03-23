import PropTypes from 'prop-types'
import React, { Component } from 'react'
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import './Reviews.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    duration: 2000
});


export class Reviews extends Component {
    static propTypes = {}

    render() {
        return (
            <div data-aos="fade-up" className='reviews flex-c fill pad-10 bg-w shadow-sec'>
                <div className="flex bg-w rad-5 fill pad-7">
                    <h3 className="theme-text  flex pompiere-regular"><SchoolOutlinedIcon sx={{ fontSize: 33 }} /> Happy Graduates</h3>
                </div>

                <div className="flex-c fill flex-centered dsad">
                    <div className="grid-5 pad-5 fill jjjjh m-flex">
                        <div className="flex-c rad-10 shadow-sec gap-0 dfd">
                            <div className="flex fill pad-20 flex-s-btn top-r">
                                <div className="flex-c">
                                    <h2 className="normal-text">Arabic</h2>
                                    <small className="text-w">2023</small>
                                </div>
                                <div className="flex flex-end">
                                    <img src="/img/p1.jpg" alt="" className="width-60 circle" />
                                </div>
                            </div>
                            <div className="inner">
                                <div className="flex-c flex-s-btn bg-w fill pad-20 btn-r ">
                                    <p className="normal-text text-c">
                                    Raseem College exceeded my expectations with its diverse language programs. The immersive environment, and modern facilities truly prepared me for a successful career in international communication. Highly recommended!
                                    </p>
                                    <div className="pad-10">
                                        <h3 className="flex">- Rashid Mohamed</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="flex-c rad-10 shadow-sec gap-0 dfd">
                            <div className="flex fill pad-20 flex-s-btn top-r">
                                <div className="flex-c">
                                    <h2 className="normal-text">Itaian</h2>
                                    <small className="text-w">2023</small>
                                </div>
                                <div className="flex flex-end">
                                    <img src="/img/p3.jpg" alt="" className="width-60 circle" />
                                </div>
                            </div>
                            <div className="inner">
                                <div className="flex-c flex-centered bg-w fill pad-20 btn-r">
                                    <p className="normal-text text-c">
                                    Raseem College stands out for its exceptional language education. The engaging curriculum, interactive classes, and proficient instructors make it a top choice. Proud to be a graduate, well-equipped for international language challenges.
                                    </p>
                                    <div className="pad-10">
                                        <h3 className="flex">- Catherine Molel </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-c rad-10 shadow-sec gap-0 dfd">
                            <div className="flex fill pad-20 flex-s-btn top-r">
                                <div className="flex-c">
                                    <h2 className="normal-text">Spanish</h2>
                                    <small className="text-w">2023</small>
                                </div>
                                <div className="flex flex-end">
                                    <img src="/img/p2.jpg" alt="" className="width-60 circle" />
                                </div>
                            </div>
                            <div className="inner">
                                <div className="flex-c flex-centered bg-w fill pad-20 btn-r">
                                    <p className="normal-text text-c">
                                    Choosing Raseem College was a game-changer for my language studies. The personalized approach, resources, and supportive community fostered an enriching learning experience. Grateful for the skills and global perspective gained!
                                    </p>
                                    <div className="pad-10">
                                        <h3 className="flex">- Herry Materu </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-c rad-10 shadow-sec gap-0 dfd">
                            <div className="flex fill pad-20 flex-s-btn top-r">
                                <div className="flex-c">
                                    <h2 className="normal-text">English</h2>
                                    <small className="text-w">2022</small>
                                </div>
                                <div className="flex flex-end">
                                    <img src="/img/p4.jpg" alt="" className="width-60 circle" />
                                </div>
                            </div>
                            <div className="inner">
                                <div className="flex-c flex-centered bg-w fill pad-20 btn-r">
                                    <p className="normal-text text-c">
                                    My time at Raseem College was transformative. The cultural immersion opportunities, and dedicated faculty fueled my passion for linguistics. Leaving with valuable skills and unforgettable experiences. Thank you, Raseem!
                                    </p>
                                    <div className="pad-10">
                                        <h3 className="flex">- Sophia Kimaro</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-c flex-s-btn rad-10 shadow-sec gap-0 dfd">
                            <div className="flex fill pad-20 flex-s-btn top-r">
                                <div className="flex-c">
                                    <h2 className="normal-text">French</h2>
                                    <small className="text-w">2022</small>
                                </div>
                                <div className="flex flex-end">
                                    <img src="/img/p5.jpg" alt="" className="width-60 circle" />
                                </div>
                            </div>
                            <div className="inner">
                                <div className="flex-c flex-s-btn bg-w fill pad-20 btn-r">
                                    <p className="normal-text text-c">
                                    Raseem College provided an unparalleled language education. The forward-thinking curriculum, language labs, and international exposure were instrumental in honing my linguistic abilities. Grateful for the comprehensive preparation for a globalized world.
                                    </p>
                                    <div className="pad-10">
                                        <h3 className="">- Casmir Juma</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Reviews