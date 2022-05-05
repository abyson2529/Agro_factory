import React, {useState,useEffect} from "react";
import { Link, Route } from "react-router-dom";
import "./products.css";
import Header from "../header";
import { useHistory } from "react-router";
import Seed1 from "../../assets/seed1.jpg";

import {
  Button,
  Modal,
  Form
} from "react-bootstrap";
const axios = require('axios')

const tokenVal = window.localStorage.getItem("token")
const Seeds = () => {

  const history = useHistory();
  const [seeds,setSeeds] = useState([]);
  async function getSeed() {
    let response = await axios.get(
      "http://localhost:4000/superadmin/showSeed",
    );
    if (response.status === 200) {
      setSeeds(response.data.response)
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
    getSeed();
  }, []);
  return (
    <div>
      <Header/>
     
         
      <div class="listing-section" style={{fontSize: "130%"}}>
      {seeds &&
                seeds.length > 0 &&
                seeds.map((p) => {
                  return (<div>
                    <div className="product">
                    <div className="image-box">
                    <img className="images"  src={Seed1}  />
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

export default Seeds;
