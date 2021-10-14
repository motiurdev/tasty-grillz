import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../all-images/logo.png'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer mt-5 py-5">
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-3 mb-5">
                        <img src={footerImg} alt="" className="img-fluid" width="200" />
                    </div>
                    <div className="col-md-3">

                    </div>
                    <div className="col-md-3">
                        <ul className="footer-link">
                            <li><Link to="/home" className="text-decoration-none text-white pb-2 d-block">About Online Food</Link></li>
                            <li><Link to="/home" className="text-decoration-none text-white pb-2 d-block">Read our blog</Link></li>
                            <li><Link to="/home" className="text-decoration-none text-white pb-2 d-block">Sign up to deliver</Link></li>
                            <li><Link to="/home" className="text-decoration-none text-white pb-2 d-block">Add your restaurant</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="footer-link">
                            <li><Link to="/home" className="text-decoration-none text-white pb-2 d-block">Get help</Link></li>
                            <li><Link to="/home" className="text-decoration-none text-white pb-2 d-block">Read FAQs</Link></li>
                            <li><Link to="/home" className="text-decoration-none text-white pb-2 d-block">View all cities</Link></li>
                            <li> <Link to="/home" className="text-decoration-none text-white pb-2 d-block">Restaurants near me</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex justify-content-between pt-5 mt-4">
                    <p className="text-muted">Copyright &copy; 2021 Tasty Grillz</p>
                    <div>
                        <Link to="/home" className="text-decoration-none text-white pe-5">Privacy Policy</Link>
                        <Link to="/home" className="text-decoration-none text-white pe-5">Terms of Use</Link>
                        <Link to="/home" className="text-decoration-none text-white pe-5">Pricing</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;