import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../../components/public/Navbar";
import Footer from "../../components/public/Footer";
import MediaSosial from "../../components/public/MediaSosial";

function Beranda() {
  const [loading, setLoading] = useState(true);
  const [berita, setBerita] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [beritaPerPage] = useState(8);

  useEffect(() => {
    axios
      .get("http://localhost:8000/news")
      .then((response) => {
        console.log("Data asli:", response.data); // Cek data asli

        const sortedBerita = [...response.data].reverse((a, b) => {
          const dateA = new Date(a.publication_date);
          const dateB = new Date(b.publication_date);
          return dateB - dateA; // Pastikan ini mengurutkan dari yang terbaru ke yang terlama
        });

        console.log("Data terurut:", sortedBerita); // Cek data setelah diurutkan
        setBerita(sortedBerita);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, []);
  const indexOfLastBerita = currentPage * beritaPerPage;
  const indexOfFirstBerita = indexOfLastBerita - beritaPerPage;
  const currentBerita = berita.slice(indexOfFirstBerita, indexOfLastBerita);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(berita.length / beritaPerPage); i++) {
    pageNumbers.push(i);
  }

  const removeHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  function formatDate(dateString) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }
  return (
    <div>
      <Navbar activeComponent="Informasi" />
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Berita/Pengumumman
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative p-0">
        {loading ? (
          <h3 style={{ textAlign: "center" }}>Loading....😁</h3>
        ) : (
          <div
            style={{
              marginLeft: "40px",
              marginRight: "40px",
              marginBottom: "100px",
            }}
            className="row"
          >
            <div className="col-lg-8">
              <br />
              <br />
              <div className="row" style={{ backgroundColor: "#ffff" }}>
                {currentBerita.map((item, index) => (
                  <div key={index} className="col-lg-5 col-md-6 col-sm-12 mb-4">
                    <div
                      className="card"
                      style={{
                        marginTop: "30px",
                        marginBottom: "30px",
                        boxShadow: "0 6px 8px rgba(0, 0, 0, 0.2",
                      }}
                    >
                      <Link to={`/berita/${item.news_id}`}>
                        {item.news_image && (
                          <img
                            src={`http://localhost:8000/images/${item.news_image}`}
                            alt={item.news_title}
                            className="card-img-top bg-informasi"
                            style={{ objectFit: "cover", height: "200px" }}
                          />
                        )}
                      </Link>
                      <div className="card-footer">
                        <small className="text-muted">
                          <i className="far fa-calendar-alt text-primary me-2 card-text"></i>
                          Kelurahan Amban: {formatDate(item.publication_date)}
                        </small>
                      </div>
                      <div
                        className="card-body"
                        style={{ maxHeight: "280px", overflow: "hidden" }}
                      >
                        <h5 className="card-title card-text">
                          {item.news_title.substring(0, 100)}
                        </h5>
                        <p className="card-text">
                          {removeHtmlTags(item.news_content).substring(0, 100)}
                          ...
                        </p>
                        <div>
                          <Link
                            to={`/berita/${item.hashed_id}`}
                            className="btn btn-primary"
                          >
                            Lihat Detail
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="d-flex justify-content-center mt-4">
                  {pageNumbers.map((number) => (
                    <button
                      className="btn btn-outline-primary me-2"
                      key={number}
                      onClick={() => paginate(number)}
                    >
                      {number}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <MediaSosial />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Beranda;
