import React from "react";
import Navbar from "../../components/public/Navbar";

function Beranda() {
  return (
    <div>
      <Navbar />
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Selamat Datang di Website Samsat Manokwari
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Beranda;
