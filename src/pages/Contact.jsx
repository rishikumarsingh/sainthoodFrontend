import React, { useState } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { useDispatch, useSelector } from "react-redux";
import { contactCreate } from "../service/Authslice";

function Contact() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  // ✅ STATE (added)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = formData;

  // ✅ HANDLE CHANGE (added)
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // ✅ SUBMIT (added)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all required fields");
      return;
    }

    // 🔁 MAP frontend → backend fields
    const payload = {
      firstname: name.split(" ")[0],
      lastname: name.split(" ").slice(1).join(" ") || "NA",
      email,
      contact: message, // backend expects contact
    };

    dispatch(contactCreate(payload)).then((res) => {
      if (res?.payload?.status) {
        alert("✅ Message sent successfully");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert(res?.payload?.message || "❌ Something went wrong");
      }
    });
  };

  return (
    <div>
      <Header />

      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-primary py-5 mb-5 page-header">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h6 className="section-title bg-white text-primary px-3">
              Contact Us
            </h6>
            <h1>Contact For Any Query</h1>
          </div>

          <div className="row g-4">

            {/* LEFT INFO — unchanged */}
            <div className="col-lg-4 col-md-6">
              <h5>Get In Touch</h5>
              <p>Feel free to contact us anytime — we’re always happy to help!</p>
              <p><strong>📍 Office:</strong> Dadri, UP – 203207</p>
              <p><strong>📞 Phone:</strong> +91-8130830392</p>
              <p><strong>📧 Email:</strong> st.hoodconventschool@gmail.com</p>
            </div>

            {/* MAP — unchanged */}
            
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

            {/* FORM — LOGIC ADDED */}
            <div className="col-lg-4 col-md-12">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        value={subject}
                        onChange={handleChange}
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Leave a message here"
                        style={{ height: "150px" }}
                        value={message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
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
