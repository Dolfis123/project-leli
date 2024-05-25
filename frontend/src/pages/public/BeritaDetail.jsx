import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import MediaSosial from "../../components/public/MediaSosial";
import Footer from "../../components/public/Footer";

function BeritaDetail() {
  const { hashed_id } = useParams();
  const [berita, setBerita] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/news/${hashed_id}`)
      .then((response) => {
        setBerita(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news data:", error);
        setLoading(false);
      });
  }, [hashed_id]);

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
      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          {loading ? (
            <h3 style={{ textAlign: "center" }}>Loading....😁</h3>
          ) : (
            <div className="row g-5">
              <div
                className="col-lg-6 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div className="position-relative h-100">
                  {berita.news_image && (
                    <img
                      className="img-fluid position-absolute w-100 h-100"
                      src={`http://localhost:8000/images/${berita.news_image}`}
                      alt={berita.news_title}
                      style={{ objectFit: "cover" }}
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <h6 className="section-title bg-white text-start text-primary pe-3">
                  Kelurahan Amban: {formatDate(berita.publication_date)}
                </h6>
                <h1 className="mb-4">{berita.news_title}</h1>
                <p className="mb-4">
                  <div
                    dangerouslySetInnerHTML={{ __html: berita.news_content }}
                  />
                </p>
                <p className="mb-4">Sumber Berita: {berita.news_source}</p>
                <p className="mb-4"> Kategori Berita: {berita.category}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* <!-- About End --> */}
      <Footer />
    </div>
  );
}

export default BeritaDetail;
