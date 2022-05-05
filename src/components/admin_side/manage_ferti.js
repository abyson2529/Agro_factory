import React, { useEffect, useState } from "react";

import { Table } from "react-bootstrap";
import { Link, Route, useLocation } from "react-router-dom";
import Side_nav from "./side_nav";
import Header from "../header";
import LoginHeader from "../login-head";
import { Modal, Button, Form } from "react-bootstrap";

const axios = require("axios");
const token = window.localStorage.getItem("token");

const tokenVal = window.localStorage.getItem("token");

function Manage_ferti() {
  const [users, setUsers] = useState([]);

  const [show, setShow] = useState(false);

  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [desc, setDesc] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [image, setImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function handleCreateFertilizer(e) {
     let data = {
       name: name,
       price: price,
       desc: desc,
       quantity: quantity,
     };
     let response = await axios.post(
       "http://localhost:4000/superadmin/addFertilizer",
       data,
       {
        headers: { Authorization: token },
       }
      );
    // e.preventDefault();
    // var formData = new FormData();
    // for (const key of Object.keys(image)) {
    //   formData.append("coverImage", image[key]);
    // }
    // formData.append("name", name);
    // formData.append("price", price);
    // formData.append("desc", desc);
    // formData.append("quantity", quantity);
    // console.log(formData);

    // const response = await axios({
    //   method: "POST",
    //   url: "http://localhost:4000/superadmin/addFertilizer",
    //   data: formData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // });

    handleClose();
    getFertilizers();
  }

  async function deleteFertilizer(id) {
    let response = await axios.post(
      "http://localhost:4000/superadmin/deleteFertilizer",
      { fertilizerId: id },
      {
        headers: { Authorization: token },
      }
    );
    getFertilizers();
  }

  async function getFertilizers() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showFertilizers",
      {
        headers: { Authorization: token },
      }
    );
    if (response.status === 200) {
      setUsers(response.data.response);
    }
  }

  useEffect(() => {
    getFertilizers();
  }, []);

  const data = {};
  return (
    <div>
      {tokenVal ? <Header /> : <LoginHeader />}
      <Side_nav />
      <div>
        <div
          className="modal fade"
          id="editHospitalModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        ></div>
        <div
          className="main__container"
          style={{ marginLeft: "19rem", margintop: "2.5rem" }}
        >
          <Button
            variant="primary"
            onClick={handleShow}
            style={{ width: "10rem", margin: "1rem" }}
          >
            Add Fertilizer
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Fertilizer</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form.Control
                  type="text"
                  placeholder="Fertilizer Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder=" Fertilizer Price"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Description"
                  onChange={(e) => setDesc(e.target.value)}
                />
                <br />
                <Form.Control
                  type="text"
                  placeholder="Quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <br />
                {/* <Form.Group controlId="formFile" style={{ fontSize: "18px" }}>
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files)}
                  />
                </Form.Group> */}
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCreateFertilizer}>
                Add Fertilizer
              </Button>
            </Modal.Footer>
          </Modal>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Fertilizer Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.length > 0 &&
                users.map((p) => {
                  return (
                    <tr>
                      <td>{p.name}</td>
                      <td>{p.price}</td>
                      <td>{p.desc}</td>
                      <td>{p.quantity}</td>
                      <td colSpan="2">
                        <button
                          className="btn btn-success"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          Edit <i className="fa fa-edit"></i>
                        </button>

                        <button
                          className="btn btn-danger"
                          onClick={(e) => deleteFertilizer(p._id)}>
                          <i className="fa fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
export default Manage_ferti;
