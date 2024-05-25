import React from "react";

import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div>
      {/* Sidebar Start */}
      <nav id="sidebar">
        <div className="sidebar_blog_1">
          <div className="sidebar-header">
            <div className="logo_section">
              <a href="index.html">
                <img
                  className="logo_icon img-responsive"
                  src="./img/logo.png"
                  alt="#"
                />
              </a>
            </div>
          </div>
          <div className="sidebar_user_info">
            <div className="icon_setting"></div>
            <div className="user_profle_side">
              <div className="user_img">
                <img className="img-responsive" src="./img/logo.png" alt="#" />
              </div>
              <div className="user_info">
                <h6>Admin</h6>
                <p>
                  <span className="online_animation"></span> Online
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar_blog_2">
          <h4>General</h4>
          <ul className="list-unstyled components">
            <li>
              <Link to="/dashboard">
                <i className="fa fa-dashboard yellow_color"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <a
                href="#element"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-diamond purple_color"></i>
                <span>Halaman</span>
              </a>
              <ul className="collapse list-unstyled" id="element">
                <li>
                  <Link to="/beranda-admin">
                    <span>Beranda</span>
                  </Link>
                </li>
                <li>
                  <Link to={"/sejarah-admin"}>
                    <span>Sejarah</span>
                  </Link>
                </li>
                <li>
                  <Link to="/visi-misi-admin">
                    <span>Visi-Misi</span>
                  </Link>
                </li>
                <li>
                  <Link to="/berita-admin">
                    <span>Berita</span>
                  </Link>
                </li>
                <li>
                  <Link to="/pendaftaran-admin">
                    <span>Pendaftaran</span>
                  </Link>
                </li>
                <li>
                  <Link to="/pelayanan-admin">
                    <span>Pelayanan</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="tables.html">
                <i className="fa fa-table purple_color2"></i>
                <span>Tables</span>
              </a>
            </li>
            <li>
              <a
                href="#apps"
                data-toggle="collapse"
                aria-expanded="false"
                className="dropdown-toggle"
              >
                <i className="fa fa-object-group blue2_color"></i>
                <span>Apps</span>
              </a>
              <ul className="collapse list-unstyled" id="apps">
                <li>
                  <a href="email.html">
                    {" "}
                    <span>Email</span>
                  </a>
                </li>
                <li>
                  <a href="calendar.html">
                    {" "}
                    <span>Calendar</span>
                  </a>
                </li>
                <li>
                  <a href="media_gallery.html">
                    {" "}
                    <span>Media Gallery</span>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="price.html">
                <i className="fa fa-briefcase blue1_color"></i>
                <span>Pricing Tables</span>
              </a>
            </li>
            <li>
              <a href="contact.html">
                <i className="fa fa-paper-plane red_color"></i>
                <span>Contact</span>
              </a>
            </li>

            <li>
              <a href="map.html">
                <i className="fa fa-map purple_color2"></i> <span>Map</span>
              </a>
            </li>

            <li>
              <a href="settings.html">
                <i className="fa fa-cog yellow_color"></i>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!-- end sidebar --> */}
      {/* <!-- right content --> */}

      {/* topbar start */}
      <div className="topbar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="full">
            <button
              type="button"
              id="sidebarCollapse"
              className="sidebar_toggle"
            >
              <i className="fa fa-bars"></i>
            </button>
            <div className="right_topbar">
              <div className="icon_info">
                <ul className="user_profile_dd">
                  <li>
                    <a className="dropdown-toggle" data-toggle="dropdown">
                      <img
                        className="img-responsive rounded-circle"
                        src="./img/logo.png"
                        alt="#"
                      />
                      <span className="name_user">Admin</span>
                    </a>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="profile.html">
                        My Profile
                      </a>
                      <a className="dropdown-item" href="settings.html">
                        Settings
                      </a>
                      <a className="dropdown-item" href="help.html">
                        Help
                      </a>
                      <a className="dropdown-item" href="#">
                        <span>Log Out</span> <i className="fa fa-sign-out"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      {/* <!-- end topbar --> */}
    </div>
  );
}

export default Sidebar;
