import React from 'react';
import Header from '../shared/Header';
import carousel1 from '../assets/img/carousel-1.jpg'; // renamed for consistency
import Footer from '../shared/Footer';

function Contact() {
  return (
    <div>
      <Header />
      {/* <!-- Header Start --> */}
      <div class="container-fluid bg-primary py-5 mb-5 page-header">
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="display-3 text-white animated slideInDown">Contact</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                  <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
            <h1 className="mb-5">Contact For Any Query</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <h5>Get In Touch</h5>
              <p className="mb-4">
                Feel free to contact us anytime — we’re always happy to help!
              </p>
              <div className="d-flex align-items-center mb-3">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                  <i className="fa fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Office</h5>
                  <p className="mb-0">Near Madhav Farm House Road, Dadri, Uttar Pradesh – 203207</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Mobile</h5>
                  <p className="mb-0">+91-8130830392 +91-7838481244</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" style={{ width: "50px", height: "50px" }}>
                  <i className="fa fa-envelope-open text-white"></i>
                </div>
                <div className="ms-3">
                  <h5 className="text-primary">Email</h5>
                  <p className="mb-0">st.hoodconventschool@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.4471881466667!2d77.54003497549574!3d28.55357378244233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceb5c58bef79d%3A0x3b97289295469e7f!2sSaint%20Hood%20Convent%20School!5e0!3m2!1sen!2sin!4v1728883200000!5m2!1sen!2sin" frameBorder="0"
                style={{ minHeight: "300px", border: "0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="Map"
              ></iframe>
            </div>

            <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="name" placeholder="Your Name" />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="email" placeholder="Your Email" />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="text" className="form-control" id="subject" placeholder="Subject" />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "150px" }}
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
      <Footer />

    </div>
  );
}

export default Contact;
