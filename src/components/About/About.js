import React from 'react';
import image1 from '../../all-images/Image/image1.png'
import image2 from '../../all-images/Image/image2.png'
import image3 from '../../all-images/Image/image3.png'
import icon1 from '../../all-images/ICON/icon1.png'
import icon2 from '../../all-images/ICON/icon2.png'
import icon3 from '../../all-images/ICON/icon3.png'
import './About.css'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="container pb-5">
            <div className="about-title w-50">
                <h2 className="py-2">Why you choose us</h2>
                <p className="mb-5">We may have a different name today, but there’s one thing that will never change, and that’s what you can expect from us:</p>
            </div>
            <div>
                <div className="row mb-3">
                    <div className="col-md-4 pb-3">
                        <div>
                            <img src={image1} alt="" className="img-fluid" />
                            <div className="row mt-3">
                                <div className="icon col-md-2">
                                    <img src={icon1} alt="" />
                                </div>
                                <div className="content col-md-10">
                                    <h5>Fast Delivery</h5>
                                    <p className="text-muted">It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
                                    <Link to="/home" className="text-decoration-none">See More <span><i class="fas fa-arrow-right arrow"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pb-3">
                        <div>
                            <img src={image2} alt="" className="img-fluid" />
                            <div className="row mt-3">
                                <div className="icon col-md-2">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="content col-md-10">
                                    <h5>A Good Auto Responder</h5>
                                    <p className="text-muted">It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
                                    <Link to="/home" className="text-decoration-none">See More <span><i class="fas fa-arrow-right arrow"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 pb-3">
                        <div>
                            <img src={image3} alt="" className="img-fluid" />
                            <div className="row mt-3">
                                <div className="icon col-md-2">
                                    <img src={icon3} alt="" />
                                </div>
                                <div className="content col-md-10">
                                    <h5>Home Delivery</h5>
                                    <p className="text-muted">It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!</p>
                                    <Link to="/home" className="text-decoration-none">See More <span><i class="fas fa-arrow-right arrow"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;