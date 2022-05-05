import React, {useState,useEffect} from "react";
import { Link, Route } from "react-router-dom";
import "./products.css";
import Header from "../header";
import { useHistory } from "react-router";
import Apple1 from "../../assets/apple1.jpeg";

import {
  Button,
  Modal,
  Form
} from "react-bootstrap";
const axios = require('axios')

const token = window.localStorage.getItem("token");

const tokenVal = window.localStorage.getItem("token")
const Fruits = () => {

  const history = useHistory();
  const [fruits,setFruits] = useState([]);
  const [users, setUsers] = useState([]);
  const [name, setName] = useState(false)
  const [price, setPrice] = useState(false)
  const [description, setDescription] = useState(false)
  const [quantity, setQuantity] = useState(false)
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const role = window.localStorage.getItem("role")

  async function handleCreateFruits(){
    let data = {
        name:name,
        price:price,
        desc:description,
        quantity:quantity
    }
    console.log(data)
    let response = await axios.post(
      "http://localhost:4000/superadmin/addFruit",data,
      {
        headers: { Authorization: token },
      }
    );  
    handleClose()
    getFruit()
}
async function deleteFruits(id){
  let response = await axios.post(
    "http://localhost:4000/superadmin/deleteFruit",{fruitId:id},
    {
      headers: { Authorization: token },
    }
  );
  getFruit()
}

  async function getFruit() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showFruit",
    );
    if (response.status === 200) {
      setFruits(response.data.response)
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
    getFruit();
  }, []);
  return (
    <div>
      <Header/>
     
      {role && role=='farmer'?
      <Button
            variant="primary"
            onClick={handleShow}
            style={{ width: "10rem", margin: "1rem" }}
          >
            Add Fruits
          </Button>:<div></div>
      }
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Fruits</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <Form.Control type="text" placeholder="Product Name"onChange={(e)=>setName(e.target.value)} />
                <br />
                <Form.Control type="text" placeholder=" Product Price" onChange={(e)=>setPrice(e.target.value)}/>
                <br />
                <Form.Control type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
                <br />
                <Form.Control type="text" placeholder="Quantity" onChange={(e)=>setQuantity(e.target.value)}/>
                <br />
                <Form.Group controlId="formFile" style={{fontSize: "18px"}}>
                  <Form.Label>Product Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCreateFruits}>
              Add Fruits
              </Button>
            </Modal.Footer>
          </Modal>

      <div class="listing-section" style={{fontSize: "130%"}}>
      {fruits &&
                fruits.length > 0 &&
                fruits.map((p) => {
                  return (<div>
                    <div className="product">
                    <div className="image-box">
                    <img className="images"  src={Apple1}  />
                    </div>
                    <div className="text-box">
                      <h2 className="item">{p.name}</h2>
                      <h3 className="price">RS :{p.price}</h3>
                      <p className="description">{p.desc}</p>
                      <label htmlFor="item-1-quantity">Quantity:</label>
          <input className="proInput" type="text" name="item-1-quantity" id="item-1-quantity" defaultValue={1} />
                    <Link to="/sample">
                      <button type="button" name="item-1-button" id="item-1-button" onClick ={()=>handleCart()}>Add to Cart</button>
                      </Link>
                    </div>
                  </div>
                  </div>
                  )})}
      </div>
    
    </div>
  );
};


export default Fruits;
