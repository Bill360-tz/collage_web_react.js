import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './RandomTaglineComponent.css'

function RandomTaglineComponent() {
    const [tagline, setTagline] = useState('');
    const taglines = ['Bridging Cultures, One Language at a Time', 'Your Passport to Global Communication', 'Speak the World, Experience the World','Language Learning for Global Leaders', 'Empowering Voices in Every Language', 'Unlocking Opportunities through Language','World-Class Education for World-Wide Communication', 'Diverse Languages, Unified World','Speak Globally, Connect Personally','Language Mastery for Global Impact'];
    const location = useLocation();

    useEffect(() => {
        const randomTagline = taglines[Math.floor(Math.random() * taglines.length)];
        setTagline(randomTagline);
    }, [location]);

    return (
        <div className='tagline'>
            {tagline}
        </div>
    );
}

export default RandomTaglineComponent;
