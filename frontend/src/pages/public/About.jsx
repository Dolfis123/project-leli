import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/public/Navbar";
import Footer from "../../components/public/Footer";

function About() {
  const [sejarahList, setSejarahList] = useState([]);
  const [visiMisiList, setVisiMisiList] = useState([]);

  const fetchSejarah = async () => {
    try {
      const response = await axios.get("http://localhost:8000/sejarah");
      setSejarahList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchSejarah();
  }, []);

  const fetchVisiMisi = async () => {
    try {
      const response = await axios.get("http://localhost:8000/visi-misi");
      setVisiMisiList(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchVisiMisi();
  }, []);

  return (
    <div>
      <Navbar activeComponent="Tentang" />
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Tentang Kami
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          {sejarahList.map((sejarah) => (
            <div key={sejarah.id} className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div className="position-relative h-100">
                  <img
                    className="img-fluid position-absolute w-100 h-100"
                    src={`http://localhost:8000/images/${sejarah.image}`}
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
                  Sejarah <span className="text-primary">Samsat</span>
                </h1>
                <p
                  className="mb-4"
                  style={{ fontSize: "17px", lineHeight: "0.7cm" }}
                  dangerouslySetInnerHTML={{ __html: sejarah.isi }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5">VISI</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-8 col-md-10 col-sm-12 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              {visiMisiList.map((visiMisi) => (
                <div key={visiMisi.id} className="service-item rounded pt-3">
                  <div className="p-4">
                    <i
                      className="fa fa-3x text-primary mb-4"
                      style={{ marginRight: "10px" }}
                    >
                      VISI
                    </i>{" "}
                    <span className="fa fa-3x">Samsat</span>
                    <p
                      style={{ fontSize: "17px", lineHeight: "0.7cm" }}
                      dangerouslySetInnerHTML={{ __html: visiMisi.visi }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="mb-5">MISI</h1>
          </div>
          <div className="row g-4 justify-content-center">
            <div
              className="col-lg-8 col-md-10 col-sm-12 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              {visiMisiList.map((visiMisi) => (
                <div key={visiMisi.id} className="service-item rounded pt-3">
                  <div className="p-4">
                    <i
                      className="fa fa-3x text-primary mb-4"
                      style={{ marginRight: "10px" }}
                    >
                      MISI
                    </i>{" "}
                    <span className="fa fa-3x">Samsat</span>
                    <p
                      style={{ fontSize: "1px", lineHeight: "0.7cm" }}
                      dangerouslySetInnerHTML={{ __html: visiMisi.misi }}
                    ></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
      <Footer />
    </div>
  );
}

export default About;
