import React from 'react'
import { Link } from 'react-router-dom';
import course1 from '../assets/img/LAB1.jpg'
import course2 from '../assets/img/LAB2.jpg'
import course3 from '../assets/img/LAB3.jpg'


function Footer() {
    return (
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-4 col-md-6">
                        <h4 className="text-white mb-3">Quick Links</h4>
                        <Link className="btn btn-link" to="/about">About Us</Link>
                        <Link className="btn btn-link" to="/vision-mission">Vision And Mission</Link>
                        <Link className="btn btn-link" to="/contact">Contact Us</Link>
                        <Link className="btn btn-link" to="/School-Policies">School Policies / Certificates</Link>
                        <Link className="btn btn-link" to="/admission-Process">Admission Process</Link>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4 className="text-white mb-3">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>NEAR MADHAV FARM HOUSE ROAD,
                            DADRI, UTTAR PRADESH – 203207</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91- 7838481244 , 8130830392</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>st.hoodconventschool@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a
                                className="btn btn-outline-light btn-social"
                                href="https://www.instagram.com/sainthoodconventschool/?igsh=MXkyMXJraWhuZHg1MQ%3D%3D#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>

                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <h4 className="text-white mb-3">Gallery</h4>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={course1} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={course2} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={course3} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={course3} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={course2} alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid bg-light p-1" src={course1} alt="" />
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-6">
                        <h4 className="text-white mb-3">Newsletter</h4>
                        <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; Copyright 2020, Saint-Hood Convent School - Dadri, All Right Reserved.
                            {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/}
                            Designed By   <a
                                className="border-bottom"
                                href="https://www.linkedin.com/in/rishikumarsingh-9199/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Rishi
                            </a>
                        </div>
                        {/* <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer