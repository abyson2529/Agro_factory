import React, {useState,useEffect} from "react";
import { Link, Route } from "react-router-dom";
import "./products.css";
import Header from "../header";
import { useHistory } from "react-router";
import Ferti1 from "../../assets/ferti1.jpg";

import {
  Button,
  Modal,
  Form
} from "react-bootstrap";
const axios = require('axios')

const tokenVal = window.localStorage.getItem("token")
const Vegetables = () => {

  // const [show, setShow] = useState(false);

 // const handleClose = () => setShow(false);
 // const handleShow = () => setShow(true);

  const history = useHistory();
  const [fertilizer,setFertilizer] = useState([]);
  async function getFertilizers() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showFertilizers",
    );
    if (response.status === 200) {
      setFertilizer(response.data.response)
    }
  }
  function handleCart(){
    if(tokenVal){
      
    }
    else{
      history.push("/login")
    }
  }

  useEffect(() => {
    getFertilizers();
  }, []);
  return (
    <div>
      <Header/>
   {/*}   <Button
            onClick={handleShow}
            style={{ width: "10rem", margin: "1rem",backgroundColor: "#3EFB9F",color: "black",border:"none" }}
          >
            Add Product
          </Button> 
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
                <Form.Control type="text" placeholder="Product Name" />
                <br />
                <Form.Control type="text" placeholder="Price" />
                <br />
                <Form.Control type="text" placeholder="Description" />
                <br />
                <Form.Control type="text" placeholder="Quantity in KG :" />
                <br />
                <Form.Group controlId="formFile" style={{fontSize: "18px"}}>
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Add Product
          </Button>
        </Modal.Footer>
  </Modal>  */}
         
      <div class="listing-section" style={{fontSize: "130%"}}>
      {fertilizer &&
                fertilizer.length > 0 &&
                fertilizer.map((p) => {
                  return (<div>
                    <div className="product">
                    <div className="image-box">
                    <img className="images"  src={Ferti1}  />
                    </div>
                    <div className="text-box">
                      <h2 className="item">{p.name}</h2>
                      <h3 className="price">RS :{p.price}</h3>
                      <p className="description">{p.desc}</p>
                      <label htmlFor="item-1-quantity">Quantity:</label>
          <input className="proInput" type="text" name="item-1-quantity" id="item-1-quantity" defaultValue={1} />
                      <button type="button" name="item-1-button" id="item-1-button" onClick ={()=>handleCart()}>Add to Cart</button>
                    </div>
                  </div>
                  </div>
                  )})}

      </div>
    
    </div>
  );
};

export default Vegetables;
