import React from "react";
import Navbar from "../../components/public/Navbar";

import Footer from "../../components/public/Footer";

function Contact() {
  return (
    <div>
      <Navbar activeComponent="Contact" />
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Persyaratan Semua Pendaftaran
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 class="section-title bg-white text-center text-primary px-3">
              Kontak Kami
            </h6>
            <h1 class="mb-5">Hubungi Kami</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="d-flex align-items-center mb-4">
                <div
                  class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i class="fa fa-map-marker-alt text-white"></i>
                </div>
                <div class="ms-3">
                  <h5 class="text-primary">Kantor</h5>
                  <p class="mb-0">
                    43P5+2PR, Jln. Karya Abri, Sanggeng, Kec. Manokwari Bar.,
                    Kabupaten Manokwari, Papua Bar. 98312
                  </p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div
                  class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i class="fa fa-phone-alt text-white"></i>
                </div>
                <div class="ms-3">
                  <h5 class="text-primary">Hubungi</h5>
                  <p class="mb-0">081343349747</p>
                </div>
              </div>
              <div class="d-flex align-items-center">
                <div
                  class="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary"
                  style={{ width: "50px", height: "50px" }}
                >
                  <i class="fa fa-envelope-open text-white"></i>
                </div>
                <div class="ms-3">
                  <h5 class="text-primary">Email</h5>
                  <p class="mb-0">samsat@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <iframe
                class="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.5880911683579!2d134.05844579070467!3d-0.864689915204511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d53f5ce3ae2a739%3A0x477e506110470054!2sKANTOR%20SAMSAT%20MANOKWARI!5e1!3m2!1sid!2sid!4v1716401124017!5m2!1sid!2sid"
                frameborder="0"
                style={{ minHeight: "300px", border: "0" }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
            </div>

            <div class="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="subject"
                        placeholder="Subject"
                      />
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea
                        class="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "100px" }}
                      ></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
      <Footer />
    </div>
  );
}

export default Contact;
