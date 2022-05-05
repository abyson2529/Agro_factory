import React from "react";
import { Link, Route } from "react-router-dom";
import "react-bootstrap";
import Header from "../components/header";
import LoginHeader from "../components/login-head";
import Newf1 from "../assets/newf1.png";
import Apple2 from "../assets/apple1.jpeg";
import Plus from "../assets/plus.png";
import "./sample.css";

const tokenVal = window.localStorage.getItem("token")

const sample = () => {
  return (
    <div >
      {tokenVal? <Header/>:<LoginHeader/>}
      <div className="shopping-cart">
        {/* Title */}
        <div className="title">
          Shopping Bag
        </div>
        {/* Product #1 */}
        <div className="item">
          <div className="buttons">
            <span className="delete-btn" />
            <span className="like-btn" />
          </div>
          <div className="image">
            <img src={Apple2} alt="" style={{ width: "90px"}}/>
          </div>
          <div className="descri">
            <span>Apples</span>
           
            <span>Red</span>
          </div>
          <div className="quantity">
          <label >Quantity:</label>
          <input className="proInput" type="text"  defaultValue={1} />
          </div>
          <div className="total-price">$549</div>
          
        </div>
      </div>
      <Link to="#">
              <button className="btn-dash1" >Buy Now</button>
            </Link>   
    </div>
  );
};

export default sample;
