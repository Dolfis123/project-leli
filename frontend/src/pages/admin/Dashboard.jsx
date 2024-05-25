import React from "react";
import Sidebar from "../../components/admin/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard dashboard_1">
      <div className="full_container">
        <div className="inner_container">
          <Sidebar />
          <div id="content">
            <div className="midde_cont">
              <div className="container-fluid">
                <div className="row column_title">
                  <div className="col-md-12">
                    <div className="page_title">
                      <h2>Daboard</h2>
                    </div>
                  </div>
                </div>
                <div className="row column1">
                  <div className="col-md-6 col-lg-3">
                    <div className="full counter_section margin_bottom_30">
                      <div className="couter_icon">
                        <div>
                          <i className="fa fa-user yellow_color"></i>
                        </div>
                      </div>
                      <div className="counter_no">
                        <div>
                          <p className="total_no">2500</p>
                          <p className="head_couter">Welcome</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="full counter_section margin_bottom_30">
                      <div className="couter_icon">
                        <div>
                          <i className="fa fa-clock-o blue1_color"></i>
                        </div>
                      </div>
                      <div className="counter_no">
                        <div>
                          <p className="total_no">123.50</p>
                          <p className="head_couter">Average Time</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="full counter_section margin_bottom_30">
                      <div className="couter_icon">
                        <div>
                          <i className="fa fa-cloud-download green_color"></i>
                        </div>
                      </div>
                      <div className="counter_no">
                        <div>
                          <p className="total_no">1,805</p>
                          <p className="head_couter">Collections</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="full counter_section margin_bottom_30">
                      <div className="couter_icon">
                        <div>
                          <i className="fa fa-comments-o red_color"></i>
                        </div>
                      </div>
                      <div className="counter_no">
                        <div>
                          <p className="total_no">54</p>
                          <p className="head_couter">Comments</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
