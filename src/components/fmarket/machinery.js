import React, {useState,useEffect} from "react";
import { Link, Route } from "react-router-dom";
import "./products.css";
import Header from "../header";
import { useHistory } from "react-router";
import Tool1 from "../../assets/tool2.jpg";

import {
  Button,
  Modal,
  Form
} from "react-bootstrap";
const axios = require('axios')

const tokenVal = window.localStorage.getItem("token")
const Machinery = () => {

  const history = useHistory();
  const [machinery,setMachinery] = useState([]);
  async function getMachinery() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showMachinery",
    );
    if (response.status === 200) {
      setMachinery(response.data.response)
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
    getMachinery();
  }, []);
  return (
    <div>
      <Header/>   
      <div class="listing-section" style={{fontSize: "130%"}}>
      {machinery &&
                machinery.length > 0 &&
                machinery.map((p) => {
                  return (<div>
                    <div className="product">
                    <div className="image-box">
                      
                      <img className="images"  src={Tool1}  />
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

export default Machinery;
