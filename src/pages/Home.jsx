import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import Crausel from '../shared/Crausel';
import prinImg from '../assets/img/prinImg.jpeg'
import cat1 from '../assets/img/cat-1.jpg'
import cat2 from '../assets/img/carousel-2.jpg'
import cat3 from '../assets/img/carousel-1.jpg'
import cat4 from '../assets/img/AMR_3320.jpg'
import course1 from '../assets/img/course-1.jpg'
import course2 from '../assets/img/course-2.jpg'
import course3 from '../assets/img/course-3.jpg'
import team1 from '../assets/img/team-1.jpg'
import team2 from '../assets/img/team-2.jpg'
import team3 from '../assets/img/team-3.jpg'
import team4 from '../assets/img/team-4.jpg'
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <Header />
      <Crausel />

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
            {[
              { icon: 'graduation-cap', title: 'Accolades', description: 'Accolades are awards and recognition for students’ achievements, celebrating their talent, hard work, and excellence.' },
              { icon: 'globe', title: 'Online Classes', description: 'Online Classes let students learn from anywhere, connecting with teachers and lessons through the internet.' },
              { icon: 'home', title: 'Facilities', description: 'Facilities provide students with the resources, spaces, and support they need for learning and growth.' },
              { icon: 'book-open', title: 'Scholastic', description: 'Scholastic refers to students’ academic learning, achievements, and progress in school subjects.' }
            ].map((service, i) => (
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={`${0.1 + i * 0.2}s`}
                key={service.title}
              >
                <div className="service-item text-center pt-3">
                  <div className="p-4">
                    <i className={`fa fa-3x fa-${service.icon} text-primary mb-4`}></i>
                    <h5 className="mb-3">{service.title}</h5>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ minHeight: '400px' }}
            >
              <div className="position-relative h-100">
                <img
                  className="img-fluid position-absolute w-100 h-100"
                  src={prinImg}
                  alt="About"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
              <h1 className="mb-4">MS. ASHA SHARMA Principal</h1>
              <p className="mb-4">
                Every child holds infinite talents and capabilities very similar to the pattern of education that has potential to transform a learner from a member of the Society to the responsible citizen of the global word. The people at SAINT-HOOD are true reflection of the vision nurtured by great minds and mentor to establish system of educational excellence The school with its strong infrastructure and mighty manpower works for making the future leaders committed to core values of human existence.
              </p>
              <p className="mb-4">
                I wish that SAINT HOOD CONVENT SCHOOL, DADRI, with its effective planning and successfully strengthen a community's sense of identity and coherence and achieve all its coveted goals in the near future.
              </p>

              {/* <div className="row gy-2 gx-4 mb-4">
                {[
                  'Skilled Instructors',
                  'Online Classes',
                  'International Certificate',
                  'Skilled Instructors',
                  'Online Classes',
                  'International Certificate'
                ].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <p className="mb-0">
                      <i className="fa fa-arrow-right text-primary me-2"></i>
                      {item}
                    </p>
                  </div>
                ))}
              </div> */}

              <Link className="btn btn-primary py-3 px-5 mt-2" to="/about">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* <!-- Categories Start --> */}
      <div className="container-xxl py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Gallery</h6>
            <h1 className="mb-5">Gallery Categories</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                  <a className="position-relative d-block overflow-hidden" href="#">
                    <img className="img-fluid" src={cat1} alt="Web Design" />
                  </a>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.3s">
                  <a className="position-relative d-block overflow-hidden" href="#">
                    <img className="img-fluid" src={cat2} alt="Graphic Design" />

                  </a>
                </div>
                <div className="col-lg-6 col-md-12 wow zoomIn" data-wow-delay="0.5s">
                  <a className="position-relative d-block overflow-hidden" href="#">
                    <img className="img-fluid" src={cat3} alt="Video Editing" />

                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: '350px' }}>
              <a className="position-relative d-block h-100 overflow-hidden" href="#">
                <img className="img-fluid position-absolute w-100 h-100" src={cat4} alt="Online Marketing" style={{ objectFit: 'cover' }} />
                <div className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3" style={{ margin: '1px' }}>
                  <h5 className="m-0"> <Link className="btn btn-link" to="/Gallery">Go To Gallery</Link></h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Categories Start --> */}

      {/* <!-- Courses Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Courses</h6>
            <h1 className="mb-5">Popular Courses</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src={course1} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src={course2} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="course-item bg-light">
                <div className="position-relative overflow-hidden">
                  <img className="img-fluid" src={course3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Courses End --> */}
      {/* <!-- Team Start --> */}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Teachers</h6>
            <h1 className="mb-5">Expert Teachers</h1>
          </div>
          <div className="row g-4">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team1} alt="Instructor 1" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team2} alt="Instructor 2" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team3} alt="Instructor 3" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div className="team-item bg-light">
                <div className="overflow-hidden">
                  <img className="img-fluid" src={team4} alt="Instructor 4" />
                </div>
                <div
                  className="position-relative d-flex justify-content-center"
                  style={{ marginTop: "-23px" }}
                >
                  <div className="bg-light d-flex justify-content-center pt-2 px-1">
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-sm-square btn-primary mx-1" href="">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center p-4">
                  <h5 className="mb-0">Instructor Name</h5>
                  <small>Designation</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}



      <Footer />
    </div>
  );
}

export default Home;
