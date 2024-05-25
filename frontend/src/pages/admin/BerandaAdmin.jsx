import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form, Table } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../../components/admin/Sidebar";
import "../../css/admin/visiMisi.css";

function BerandaAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [pesan, setPesan] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [ucapanList, setUcapanList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setPesan("");
    setImage(null);
    setImageUrl("");
  };

  const handleShowEditModal = (ucapan) => {
    setEditId(ucapan.id);
    setPesan(ucapan.pesan);
    setImage(null);
    setImageUrl(`http://localhost:8000/images/${ucapan.image}`);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setPesan("");
    setImage(null);
    setImageUrl("");
  };

  const handlePesanChange = (value) => setPesan(value);
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pesan", pesan);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:8000/ucapan", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchUcapan();
      handleCloseModal();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pesan", pesan);
    if (image) formData.append("image", image);

    try {
      await axios.put(`http://localhost:8000/edit-ucapan/${editId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      fetchUcapan();
      handleCloseEditModal();
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  return (
    <div className="dashboard dashboard_1">
      <div className="full_container">
        <div className="inner_container">
          <Sidebar />
          <div id="content">
            <div className="main_container">
              {/* <Button
                variant="primary"
                onClick={handleShowModal}
                style={{ marginTop: "20px" }}
              >
                Tambah Data Ucapan
              </Button> */}

              <Table striped bordered hover style={{ marginTop: "20px" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Gambar</th>
                    <th>Pesan</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {ucapanList.map((ucapan, index) => (
                    <tr key={ucapan.id}>
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={`http://localhost:8000/images/${ucapan.image}`}
                          alt="foto"
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td
                        dangerouslySetInnerHTML={{ __html: ucapan.pesan }}
                      ></td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => handleShowEditModal(ucapan)}
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
                  <Modal.Title>Tambah Data Ucapan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formPesan">
                      <Form.Label>Pesan</Form.Label>
                      <ReactQuill
                        theme="snow"
                        value={pesan}
                        onChange={handlePesanChange}
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
                    <Form.Group controlId="formImage">
                      <Form.Label>Gambar</Form.Label>
                      <Form.Control
                        type="file"
                        onChange={handleImageChange}
                        required
                      />
                      {imageUrl && (
                        <div>
                          <img
                            src={imageUrl}
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
                  <Modal.Title>Edit Data Ucapan</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleEditSubmit}>
                    <Form.Group controlId="formPesan">
                      <Form.Label>Pesan</Form.Label>
                      <ReactQuill
                        theme="snow"
                        value={pesan}
                        onChange={handlePesanChange}
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
                    <Form.Group controlId="formImage">
                      <Form.Label>Gambar</Form.Label>
                      <Form.Control type="file" onChange={handleImageChange} />
                      <Form.Text className="text-muted">
                        Kosongkan jika tidak ingin mengubah gambar.
                      </Form.Text>
                      {imageUrl && (
                        <div>
                          <img
                            src={imageUrl}
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

export default BerandaAdmin;
