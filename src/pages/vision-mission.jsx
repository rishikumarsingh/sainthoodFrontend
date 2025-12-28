
import Header from '../shared/Header';
import Footer from '../shared/Footer';
function Testimonial() {
    return (
        <div>
            <Header />
            {/* <!-- Header Start --> */}
            <div class="container-fluid bg-primary py-5 mb-5 page-header">
                <div class="container py-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-10 text-center">
                            <h1 class="display-3 text-white animated slideInDown">Vision & Mission</h1>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                    <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                    <li class="breadcrumb-item text-white active" aria-current="page">Vision & Mission</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Header End --> */}

            <div className='text-center mt-5'>Coming Soon</div>
            <Footer />
        </div>
    );
}

export default Testimonial;
