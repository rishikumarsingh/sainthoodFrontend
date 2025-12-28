import React, { useState } from "react";
import Header from "../shared/Header";
import Footer from "../shared/Footer";
import { login } from "../service/Authslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    const data = { email, password };

    // Dispatch login
    dispatch(login(data)).then((result) => {
      if (result.payload && result.payload.status === true) {
        navigate("/Dashboard"); // ✅ success
      } else {
        // ❌ Show backend message in alert + setError state
        const msg = result.payload?.message || "Login failed. Please try again.";
        alert(msg);
        setError(msg);
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3 mt-5">
              Login
            </h6>
            <h1 className="mb-5">Login to Your Account</h1>
          </div>
          <div className="row g-4 d-flex justify-content-center">
            <div
              className="col-lg-4 col-md-12 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Email */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Your Password</label>
                    </div>
                  </div>

                  {/* Error Message */}
                  {error && (
                    <div className="col-12">
                      <span className="text-danger">{error}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-3"
                      type="submit"
                    >
                      Login
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

export default Login;
