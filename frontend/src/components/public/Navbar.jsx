import React from "react";
import { Link } from "react-router-dom";

function Navbar({ activeComponent }) {
  return (
    <div className="container-fluid position-relative p-0">
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <img
              src="/img/logo-2.png"
              alt="logo"
              style={{ marginRight: "15px" }}
            />
            Samsat Manokwari
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link
              to="/"
              className={`nav-item nav-link text-black ${
                activeComponent === "Beranda" ? "active" : ""
              }`}
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className={`nav-item nav-link text-black ${
                activeComponent === "Tentang" ? "active" : ""
              }`}
            >
              Tentang
            </Link>
            <div className="nav-item dropdown">
              <a
                href="#"
                className={`nav-link dropdown-toggle ${
                  activeComponent === "Informasi" ? "active" : ""
                }`}
                data-bs-toggle="dropdown"
              >
                Informasi
              </a>
              <div className="dropdown-menu m-0">
                <Link to="/berita" className="dropdown-item">
                  Beritan/Pengumuman
                </Link>

                <Link to="/pendaftaran" className="dropdown-item">
                  Pendaftaran
                </Link>
                <Link to="/pelayanan" className="dropdown-item">
                  Pelayanan
                </Link>
              </div>
            </div>

            {/* <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div className="dropdown-menu m-0">
                <a href="destination.html" className="dropdown-item">
                  Sarana dan Prasarana
                </a>
                <a href="booking.html" className="dropdown-item">
                  Booking
                </a>
                <a href="team.html" className="dropdown-item">
                  Travel Guides
                </a>
                <a href="testimonial.html" className="dropdown-item">
                  Testimonial
                </a>
                <a href="404.html" className="dropdown-item">
                  404 Page
                </a>
              </div>
            </div> */}
            <Link
              to="/contact"
              className={`nav-item nav-link text-black ${
                activeComponent === "Contact" ? "active" : ""
              }`}
            >
              Contact
            </Link>
          </div>
          <a href="" className="btn btn-primary  rounded-pill py-2 px-4">
            Login
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
