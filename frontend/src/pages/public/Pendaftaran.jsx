import React, { useState, useEffect } from "react";
import Navbar from "../../components/public/Navbar";
import axios from "axios";
import Footer from "../../components/public/Footer";

function Pendaftaran() {
  const [pendaftaranList, setPendaftaranList] = useState([]);
  const fetchPendaftaran = async () => {
    try {
      const response = await axios.get("http://localhost:8000/pendaftaran");
      setPendaftaranList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPendaftaran();
  }, []);

  return (
    <div>
      <Navbar activeComponent="Informasi" />
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
      {/* <!-- About Start --> */}
      <h1
        className="mb-4"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          marginBottom: "300px",
        }}
      >
        Aturan Pendaftaran di
        <span className="text-primary" style={{ marginLeft: "10px" }}>
          Samsat
        </span>
      </h1>
      <div className="container-fluid py-5">
        {" "}
        {/* Mengubah menjadi container-fluid */}
        <div className="container-fluid">
          {pendaftaranList.map((pendaftaran) => (
            <div key={pendaftaran.id} className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div className="position-relative h-100">
                  <h4>Navigasi</h4>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <p
                  className="mb-4"
                  style={{ fontSize: "17px", lineHeight: "0.5cm" }}
                  dangerouslySetInnerHTML={{ __html: pendaftaran.pendaftaran }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <!-- About End --> */}
      <Footer />
    </div>
  );
}

export default Pendaftaran;
