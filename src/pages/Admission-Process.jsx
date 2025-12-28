
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import cat4 from '../assets/img/cat-4.jpg'
function Course() {
  return (
    <div>
      <Header />
    
      <div class="container-fluid bg-primary py-5 mb-5 page-header">
        <div class="container py-5">
          <div class="row justify-content-center">
            <div class="col-lg-10 text-center">
              <h1 class="display-3 text-white animated slideInDown">Admission</h1>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center">
                  <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                  <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                  <li class="breadcrumb-item text-white active" aria-current="page">Admission</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5 category">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">Admission</h6>
            <h1 className="mb-5">Admission Process</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-7 col-md-6">
              <div className="row g-3">
                <div className="col-lg-12 col-md-12 wow zoomIn" data-wow-delay="0.1s">
                  <p className="m-0">A student seeking admission to any class in this school will be eligible for the admission on the following criteria:- www.shcs.com</p>
                  <ul className='mt=5'>
                    <li>Has been studying in any recognized school affiliated to any recognized Board of Secondary Education.</li>
                    <li>Has passed the qualifying or equivalent qualifying exam , making him/her eligible for admission.</li>
                    <li>Satisfy the requirement of age limit as determined. The age of the child should be 5 years or more at the time of admission to class I and subsequent for higher classes.</li>
                  </ul>

                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 wow zoomIn" data-wow-delay="0.7s" style={{ minHeight: '350px' }}>
              <a className="position-relative d-block h-100 overflow-hidden" href="#">
                <img className="img-fluid position-absolute w-100 h-100" src={cat4} alt="Online Marketing" style={{ objectFit: 'cover' }} />

              </a>
            </div>
          </div>
        </div>
      </div>
  
      <Footer />
    </div>
  );
}

export default Course;
