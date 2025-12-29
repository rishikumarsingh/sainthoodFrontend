import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/Saint_Logo.png';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">

      {/* LOGO / BRAND */}
      <Link
        to="/"
        className="navbar-brand d-flex align-items-center px-lg-5 gap-1"
      >
        <img
          src={logo}
          alt="Sainthood Convent Logo"
          style={{ height: "75px", padding: "2px" }}
        />
        <div className="divBox"></div>
        <h2 className="m-0 text-primary logotextheading">
          Saint-hood <br /> Convent School
          <span className="logotextsubheading">
            <br /> DADRI, GREATER NOIDA <br /> (CBSE)
          </span>
        </h2>
      </Link>

      {/* MOBILE TOGGLER */}
      <button
        type="button"
        className="navbar-toggler me-4"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* NAV LINKS */}
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">

          <Link to="/" className="nav-item nav-link">
            Home
          </Link>

          {/* ABOUT US */}
          <div className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              About Us
            </span>
            <div className="dropdown-menu fade-down m-0">
              <Link to="/about" className="dropdown-item">
                About
              </Link>
              <Link to="/vision-mission" className="dropdown-item">
                Vision And Mission
              </Link>
            </div>
          </div>

          {/* ADMISSIONS */}
          <div className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              Admissions
            </span>
            <div className="dropdown-menu fade-down m-0">
              <Link to="/admission-Process" className="dropdown-item">
                Admission Process
              </Link>
              <Link to="/School-Policies" className="dropdown-item">
                School Policies / Certificates
              </Link>
            </div>
          </div>

          {/* PAGES */}
          <div className="nav-item dropdown">
            <span
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
            >
              Pages
            </span>
            <div className="dropdown-menu fade-down m-0">
              <Link to="/Gallery" className="dropdown-item">
                Gallery
              </Link>
              <Link to="/video-gallery" className="dropdown-item">
                Video Gallery
              </Link>
            </div>
          </div>

          <Link to="/contact" className="nav-item nav-link">
            Contact
          </Link>
        </div>

        {/* LOGIN BUTTON */}
        <div className="logins">
          <Link
            to="/login"
            className="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >
            Login
            <i className="fa fa-arrow-right ms-3"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
