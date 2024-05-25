import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form, Table } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../../components/admin/Sidebar";
import "../../css/admin/visiMisi.css";

function PendaftaranAdmin() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [pendaftaran, setPendaftaran] = useState("");
  const [pendaftaranList, setPendaftaranList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleShowEditModal = (pendaftaran) => {
    setEditId(pendaftaran.id);
    setPendaftaran(pendaftaran.pendaftaran);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => setShowEditModal(false);

  const handlePendaftaranChange = (value) => setPendaftaran(value);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { pendaftaran };

    try {
      await axios.post("http://localhost:8000/pendaftaran", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchPendaftaran();
      handleCloseModal();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = { pendaftaran };

    try {
      await axios.put(`http://localhost:8000/pendaftaran/${editId}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchPendaftaran();
      handleCloseEditModal();
    } catch (error) {
      console.error("Error editing data:", error);
    }
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["bold", "italic", "underline"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const quillFormats = [
    "header",
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
  ];

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
                Tambah Data Pendaftaran
              </Button> */}

              <Table striped bordered hover style={{ marginTop: "20px" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Pendaftaran</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {pendaftaranList.map((pendaftaran, index) => (
                    <tr key={pendaftaran.id}>
                      <td>{index + 1}</td>
                      <td
                        dangerouslySetInnerHTML={{
                          __html: pendaftaran.pendaftaran,
                        }}
                      ></td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => handleShowEditModal(pendaftaran)}
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
                  <Modal.Title>Tambah Data Pendaftaran</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formPendaftaran">
                      <Form.Label>Pendaftaran</Form.Label>
                      <ReactQuill
                        theme="snow"
                        value={pendaftaran}
                        onChange={handlePendaftaranChange}
                        modules={quillModules}
                        formats={quillFormats}
                        required
                      />
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
                  <Modal.Title>Edit Data Pendaftaran</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleEditSubmit}>
                    <Form.Group controlId="formPendaftaran">
                      <Form.Label>Pendaftaran</Form.Label>
                      <ReactQuill
                        theme="snow"
                        value={pendaftaran}
                        onChange={handlePendaftaranChange}
                        modules={quillModules}
                        formats={quillFormats}
                        required
                      />
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

export default PendaftaranAdmin;
