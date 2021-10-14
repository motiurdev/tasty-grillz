import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner-container d-flex justify-content-center align-items-center text-center">
            <div>
                <h1 className="py-3">Best food waiting for your belly</h1>
                <div>
                    <input className="banner-input mb-3" type="text" placeholder="Search foods items" />
                    <button className="banner-btn">Search</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;