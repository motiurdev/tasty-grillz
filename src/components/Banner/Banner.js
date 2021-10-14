import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container d-flex justify-content-center align-items-center text-center">
            <div>
                <h1 className="py-3">Best food waiting for your belly</h1>
                <input className="banner-input" type="text" placeholder="Search foods items" />
                <button className="banner-btn">Search</button>
            </div>
        </div>
    );
};

export default Banner;