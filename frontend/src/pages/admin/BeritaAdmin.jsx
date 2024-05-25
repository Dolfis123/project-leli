import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form, Table } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../../components/admin/Sidebar";
import "../../css/admin/visiMisi.css";

function BeritaAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsContent, setNewsContent] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [newsSource, setNewsSource] = useState("");
  const [category, setCategory] = useState("");
  const [newsImage, setNewsImage] = useState(null);
  const [newsImageUrl, setNewsImageUrl] = useState("");
  const [newsList, setNewsList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    resetForm();
  };

  const handleShowEditModal = (news) => {
    setEditId(news.news_id);
    setNewsTitle(news.news_title);
    setNewsContent(news.news_content);
    setPublicationDate(news.publication_date);
    setNewsSource(news.news_source);
    setCategory(news.category);
    setNewsImage(null);
    setNewsImageUrl(`http://localhost:8000/images/${news.news_image}`);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    resetForm();
  };

  const resetForm = () => {
    setNewsTitle("");
    setNewsContent("");
    setPublicationDate("");
    setNewsSource("");
    setCategory("");
    setNewsImage(null);
    setNewsImageUrl("");
  };

  const handleNewsContentChange = (value) => setNewsContent(value);
  const handleNewsImageChange = (e) => {
    setNewsImage(e.target.files[0]);
    setNewsImageUrl(URL.createObjectURL(e.target.files[0]));
  };

  const fetchNews = async () => {
    try {
      const response = await axios.get("http://localhost:8000/news");
      setNewsList(response.data.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !newsTitle ||
      !newsContent ||
      !publicationDate ||
      !newsSource ||
      !category ||
      !newsImage
    ) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("news_title", newsTitle);
    formData.append("news_content", newsContent);
    formData.append("publication_date", publicationDate);
    formData.append("news_source", newsSource); // don't parse to integer
    formData.append("category", category);
    formData.append("news_image", newsImage);

    try {
      await axios.post("http://localhost:8000/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchNews();
      handleCloseModal();
    } catch (error) {
      console.error(
        "Error adding data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("news_title", newsTitle);
    formData.append("news_content", newsContent);
    formData.append("publication_date", publicationDate);
    formData.append("news_source", newsSource);
    formData.append("category", category);
    if (newsImage) formData.append("news_image", newsImage);

    try {
      await axios.put(`http://localhost:8000/news/${editId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchNews();
      handleCloseEditModal();
    } catch (error) {
      console.error(
        "Error editing data:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="dashboard dashboard_1">
      <div className="full_container">
        <div className="inner_container">
          <Sidebar />
          <div id="content">
            <div className="main_container">
              <Button
                variant="primary"
                onClick={handleShowModal}
                style={{ marginTop: "20px" }}
              >
                Tambah Data Berita
              </Button>
              <Table striped bordered hover style={{ marginTop: "20px" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Judul</th>
                    {/* <th>Isi</th> */}
                    {/* <th>Tanggal Publikasi</th> */}
                    {/* <th>Sumber</th> */}
                    <th>Kategori</th>
                    <th>Gambar</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {newsList.map((news, index) => (
                    <tr key={news.news_id}>
                      <td>{index + 1}</td>
                      <td>{news.news_title}</td>
                      {/* <td
                        dangerouslySetInnerHTML={{ __html: news.news_content }}
                      ></td> */}
                      {/* <td>{news.publication_date}</td> */}
                      {/* <td>{news.news_source}</td> */}
                      <td>{news.category}</td>
                      <td>
                        <img
                          src={`http://localhost:8000/images/${news.news_image}`}
                          alt="foto"
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => handleShowEditModal(news)}
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>

              <Modal
                show={showModal}
                onHide={handleCloseModal}
                className="custom-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Tambah Data Berita</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formTitle">
                      <Form.Label>Judul</Form.Label>
                      <Form.Control
                        type="text"
                        value={newsTitle}
                        onChange={(e) => setNewsTitle(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formContent">
                      <Form.Label>Isi</Form.Label>
                      <ReactQuill
                        theme="snow"
                        value={newsContent}
                        onChange={handleNewsContentChange}
                        modules={{
                          toolbar: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["bold", "italic", "underline"],
                            [{ color: [] }, { background: [] }],
                            [{ align: [] }],
                            ["link", "image", "video"],
                            ["clean"],
                          ],
                        }}
                        formats={[
                          "header",
                          "font",
                          "list",
                          "bullet",
                          "bold",
                          "italic",
                          "underline",
                          "color",
                          "background",
                          "align",
                          "link",
                          "image",
                          "video",
                        ]}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formPublicationDate">
                      <Form.Label>Tanggal Publikasi</Form.Label>
                      <Form.Control
                        type="date"
                        value={publicationDate}
                        onChange={(e) => setPublicationDate(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formSource">
                      <Form.Label>Sumber</Form.Label>
                      <Form.Control
                        type="text"
                        value={newsSource}
                        onChange={(e) => setNewsSource(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formCategory">
                      <Form.Label>Kategori</Form.Label>
                      <Form.Control
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formImage">
                      <Form.Label>Gambar</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={handleNewsImageChange}
                        required
                      />
                      {newsImageUrl && (
                        <div>
                          <img
                            src={newsImageUrl}
                            alt="preview"
                            style={{ width: "100px", marginTop: "10px" }}
                          />
                        </div>
                      )}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Simpan
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>

              <Modal
                show={showEditModal}
                onHide={handleCloseEditModal}
                className="custom-modal"
              >
                <Modal.Header closeButton>
                  <Modal.Title>Edit Data Berita</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleEditSubmit}>
                    <Form.Group controlId="formTitle">
                      <Form.Label>Judul</Form.Label>
                      <Form.Control
                        type="text"
                        value={newsTitle}
                        onChange={(e) => setNewsTitle(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formContent">
                      <Form.Label>Isi</Form.Label>
                      <ReactQuill
                        theme="snow"
                        value={newsContent}
                        onChange={handleNewsContentChange}
                        modules={{
                          toolbar: [
                            [{ header: "1" }, { header: "2" }, { font: [] }],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["bold", "italic", "underline"],
                            [{ color: [] }, { background: [] }],
                            [{ align: [] }],
                            ["link", "image", "video"],
                            ["clean"],
                          ],
                        }}
                        formats={[
                          "header",
                          "font",
                          "list",
                          "bullet",
                          "bold",
                          "italic",
                          "underline",
                          "color",
                          "background",
                          "align",
                          "link",
                          "image",
                          "video",
                        ]}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formPublicationDate">
                      <Form.Label>Tanggal Publikasi</Form.Label>
                      <Form.Control
                        type="date"
                        value={publicationDate}
                        onChange={(e) => setPublicationDate(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formSource">
                      <Form.Label>Sumber</Form.Label>
                      <Form.Control
                        type="text"
                        value={newsSource}
                        onChange={(e) => setNewsSource(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formCategory">
                      <Form.Label>Kategori</Form.Label>
                      <Form.Control
                        type="text"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formImage">
                      <Form.Label>Gambar</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={handleNewsImageChange}
                      />
                      <Form.Text className="text-muted">
                        Kosongkan jika tidak ingin mengubah gambar.
                      </Form.Text>
                      {newsImageUrl && (
                        <div>
                          <img
                            src={newsImageUrl}
                            alt="preview"
                            style={{ width: "100px", marginTop: "10px" }}
                          />
                        </div>
                      )}
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Simpan
                    </Button>
                  </Form>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BeritaAdmin;
