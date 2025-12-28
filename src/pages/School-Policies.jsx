import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import cbseCert from "../assets/certificate/Central Board of Secondary Education Certificate.pdf";
import healthCert from "../assets/certificate/Health and Sanitisation Certificate.pdf";
import healthCmoCert from "../assets/certificate/Health and Sanitisation Certificate by CMO.pdf";
import fireCert from "../assets/certificate/Fire Safety Certificate.pdf";
import societyCert from "../assets/certificate/Society Renovation Certificate.jpg";
import chairmanList from "../assets/certificate/List of chairman(s).pdf";
import nocCert from "../assets/certificate/No Objection Certificate.pdf";
import disclosureCert from "../assets/certificate/Disclosure.pdf";
import resultStatus from "../assets/certificate/Result Status.pdf";
import tcForm from "../assets/certificate/TC Form.pdf";
import feesStructure from "../assets/certificate/Fees Structure.pdf";
import last3Years from "../assets/certificate/LAST 3 YEARS RESULT.pdf";
import saras from "../assets/certificate/SARAS.pdf";


function Join() {
  return (
    <div>
      <Header />

      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">School-Policies</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                  <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">School-Policies</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">School-Policies</h6>
            <h1 className="mb-5">School-Policies</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-12 col-md-6">
              <div className="row g-3">
                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                  <ul className='mt=5'>
                    <li>Self–Discipline is the motto of the school.</li>
                    <li>Students should maintain cleanliness and hygiene within the school campus. Littering is prohibited.</li>
                    <li>Students should observe polite civil behavior. Ragging, screaming, or use of unparliamentary language is forbidden.</li>
                    <li>
                      SHCS constitutes a family of students from various communities, religious and linguistic groups.
                      The medium of instruction and communication is English within the school campus.
                    </li>
                    <li>The school is not responsible for any loss of students’ belongings on the premises.</li>
                    <li>Under no pretext should a student miss any teaching, games, or activity period.</li>
                    <li>
                      Changing classrooms between periods should be done in silence and in an orderly manner.
                      Students are expected to move quietly in a single file without causing any disturbance to other classes.
                    </li>
                    <li>Students should not leave the premises during school working hours.</li>
                  </ul>


                  <h3 className='mt-5'>Certificates</h3>
                  <ul className="certificate-list">
                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        Central Board of Secondary Education Certificate
                      </div>
                      <a href={cbseCert} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        Health and Sanitisation Certificate
                      </div>
                      <a href={healthCert} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        Health and Sanitisation Certificate by CMO
                      </div>
                      <a href={healthCmoCert} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        Fire Safety Certificate
                      </div>
                      <a href={fireCert} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        Society Renovation Certificate
                      </div>
                      <a href={societyCert} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        List of Chairman(s)
                      </div>
                      <a href={chairmanList} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        No Objection Certificate
                      </div>
                      <a href={nocCert} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        Disclosure
                      </div>
                      <a href={disclosureCert} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        Result Status
                      </div>
                      <a href={resultStatus} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        TC Form
                      </div>
                      <a href={tcForm} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        Fees Structure
                      </div>
                      <a href={feesStructure} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        Last 3 Years Result
                      </div>
                      <a href={last3Years} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>

                    <li>
                      <div className="left-content">
                        <i className="fa fa-book me-3"></i>
                        SARAS
                      </div>
                      <a href={saras} download className="download-icon">
                        <i className="fa fa-download"></i>
                      </a>
                    </li>
                  </ul>





                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
}

export default Join;
