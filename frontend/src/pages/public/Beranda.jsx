import React, { useState, useEffect } from "react";
import Navbar from "../../components/public/Navbar";
import axios from "axios";
import Footer from "../../components/public/Footer";

function Beranda() {
  const [ucapanList, setUcapanList] = useState([]);

  const fetchUcapan = async () => {
    try {
      const response = await axios.get("http://localhost:8000/lihat-ucapan");
      setUcapanList(response.data.Result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUcapan();
  }, []);
  return (
    <div>
      <Navbar activeComponent="Beranda" />
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
      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          {ucapanList.map((ucapan) => (
            <div key={ucapan.id} className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div className="position-relative h-100">
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src={`http://localhost:8000/images/${ucapan.image}`}
                    alt=""
                    style={{
                      objectFit: "cover",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h1 className="mb-4">
                  Ucapana dari <span className="text-primary">Samsat</span>
                </h1>
                <p
                  className="mb-4"
                  style={{ fontSize: "17px", lineHeight: "0.7cm" }}
                  dangerouslySetInnerHTML={{ __html: ucapan.pesan }}
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

export default Beranda;
