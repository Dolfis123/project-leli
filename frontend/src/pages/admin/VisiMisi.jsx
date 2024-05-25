import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Button, Form, Table } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Sidebar from "../../components/admin/Sidebar";
import "../../css/admin/visiMisi.css";

function VisiMisi() {
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [visi, setVisi] = useState("");
  const [misi, setMisi] = useState("");
  const [visiMisiList, setVisiMisiList] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleShowEditModal = (visiMisi) => {
    setEditId(visiMisi.id);
    setVisi(visiMisi.visi);
    setMisi(visiMisi.misi);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => setShowEditModal(false);

  const handleVisiChange = (value) => setVisi(value);
  const handleMisiChange = (value) => setMisi(value);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { visi, misi };

    try {
      await axios.post("http://localhost:8000/visi-misi", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchVisiMisi();
      handleCloseModal();
    } catch (error) {
      console.error("Error adding data:", error);
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = { visi, misi };

    try {
      await axios.put(`http://localhost:8000/visi-misi/${editId}`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchVisiMisi();
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
                Tambah Data Visi dan Misi
              </Button> */}

              <Table striped bordered hover style={{ marginTop: "20px" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Visi</th>
                    <th>Misi</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {visiMisiList.map((visiMisi, index) => (
                    <tr key={visiMisi.id}>
                      <td>{index + 1}</td>
                      <td
                        dangerouslySetInnerHTML={{ __html: visiMisi.visi }}
                      ></td>
                      <td
                        dangerouslySetInnerHTML={{ __html: visiMisi.misi }}
                      ></td>
                      <td>
                        <Button
                          variant="warning"
                          onClick={() => handleShowEditModal(visiMisi)}
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
                  <Modal.Title>Tambah Data Visi dan Misi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formVisi">
                      <Form.Label>Visi</Form.Label>
                      <ReactQuill
                        theme="snow"
                        value={visi}
                        onChange={handleVisiChange}
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
                    <Form.Group controlId="formMisi">
                      <Form.Label>Misi</Form.Label>
                      <ReactQuill
                        theme="snow"
                        value={misi}
                        onChange={handleMisiChange}
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
                  <Modal.Title>Edit Data Visi dan Misi</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form onSubmit={handleEditSubmit}>
                    <Form.Group controlId="formVisi">
                      <Form.Label>Visi</Form.Label>
                      <ReactQuill
                        theme="snow"
                        value={visi}
                        onChange={handleVisiChange}
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
                    <Form.Group controlId="formMisi">
                      <Form.Label>Misi</Form.Label>
                      <ReactQuill
                        theme="snow"
                        value={misi}
                        onChange={handleMisiChange}
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

export default VisiMisi;
