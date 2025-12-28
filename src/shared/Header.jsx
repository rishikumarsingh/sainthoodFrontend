import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Saint_Logo.png'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">

      <Link to="/" className="nav-item nav-link ">
        <a className="navbar-brand d-flex align-items-center px-lg-5 gap-1">
          <img src={logo} alt="Sainthood Convent Logo" style={{ height: "80px" }} />
         <div className="divBox"></div>
          <h2 className="m-0 text-primary logotextheading" >Saint-hood  <br /> Convent School
            <span className="logotextsubheading"> <br />DADRI, GREATER NOIDA <br /> (CBSE)</span></h2>
        </a>
      </Link>
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <Link to="/" className="nav-item nav-link ">Home</Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              About Us
            </a>
            <div className="dropdown-menu fade-down m-0">
              <Link to="/about" className="nav-item nav-link dropdown-item">About</Link>
              <Link to="/vision-mission" className="nav-item nav-link dropdown-item">Vision And Mission</Link>

            </div>

          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Admissions
            </a>
            <div className="dropdown-menu fade-down m-0">
              <Link to="/admission-Process" className="nav-item nav-link dropdown-item"> Admission Process </Link>
              <Link to="/School-Policies" className="nav-item nav-link dropdown-item">School Policies / Certificates </Link>

            </div>

          </div>
          {/* <Link to="/course" className="nav-item nav-link">Courses</Link> */}
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
              Pages
            </a>
            <div className="dropdown-menu fade-down m-0">
              {/* <Link to="/page404" className="nav-item nav-link dropdown-item">Circulars</Link> */}
              <Link to="/Gallery" className="nav-item nav-link dropdown-item">Gallery</Link>
              <Link to="/video-gallery" className="nav-item nav-link dropdown-item">Video Gallery</Link>

            </div>
          </div>
          <Link to="/contact" className="nav-item nav-link ">Contact</Link>

        </div>

        <div className='logins'>
          <Link to="/login" className="nav-item nav-link btn btn-primary py-4 px-lg-5 d-none d-lg-block">Login
            <i className="fa fa-arrow-right ms-3"></i>
          </Link>
        </div>


      </div>
    </nav>
  );
}

export default Header;
