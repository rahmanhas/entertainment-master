import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner-css text-white d-flex flex-column justify-content-center align-items-end p-5'>
            <h1>Welcome</h1>
            <p>Explore genres, languages, and cultures. Personalized recommendations.</p>
            <button type="button" className="btn btn-primary">Get Started</button>
        </div>
    );
};

export default Banner;