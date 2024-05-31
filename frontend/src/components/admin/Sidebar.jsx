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
                <i className="fa fa-tachometer"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <Link to="/beranda-admin">
                <i className="fa fa-table purple_color2"></i>
                <span>Beranda</span>
              </Link>
            </li>
            <li>
              <Link to="/sejarah-admin">
                <i className="fa fa-object-group blue2_color"></i>
                <span>Sejarah</span>
              </Link>
            </li>

            <li>
              <Link to="/visi-misi-admin">
                <i className="fa fa-briefcase blue1_color"></i>
                <span>Visi/Misi</span>
              </Link>
            </li>
            <li>
              <Link to="/berita-admin">
                <i className="fa fa-paper-plane red_color"></i>
                <span>Berita</span>
              </Link>
            </li>

            <li>
              <Link to="/pendaftaran-admin">
                <i className="fa fa-map purple_color2"></i>{" "}
                <span>Pendaftaran</span>
              </Link>
            </li>
            <li>
              <Link to="/pelayanan-admin">
                <i className="fa fa-server"></i> <span>Pelayanan</span>
              </Link>
            </li>

            <li>
              <a href="#">
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
                      <Link className="dropdown-item" to="/">
                        <span>Log Out</span> <i className="fa fa-sign-out"></i>
                      </Link>
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
