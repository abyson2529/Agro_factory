import React from "react";

import User from "../assets/imguser.png";
import Header from "../components/header";
import LoginHeader from "../components/login-head";
import "./product_desc.css";
import {Card} from 'react-bootstrap';

const tokenVal = window.localStorage.getItem("token")

const product_desc = () => {
  return (
    <div>
      {tokenVal? <Header/>:<LoginHeader/>}
      <div >
         
      <div className="”Cart-Container”" />
        <div className="”Header”">
          <h3 className="”Heading”">Shopping Cart</h3>
          <h5 className="”Action”">Remove all</h5>
        </div>
        <div className="”Cart-Items”">
          <div className="”image-box”">
            <img src="”images/apple.png”" style={{}} height="”120px”"  />
          </div>
          <div className="”about”">
            <h1 className="”title”">Apple Juice</h1>
            <h3 className="”subtitle”">250ml</h3>
            <img src="”images/veg.png”" style={{}} height="”30px”"  />
          </div>
          <div className="”counter”" />
          <div className="”prices”" />
        </div>
        <div className="”counter”">
          <div className="”btn”">+</div>
          <div className="”count”">2</div>
          <div className="”btn”">-</div>
        </div>
        <div className="”prices”">
          <div className="”amount”">$2.99</div>
          <div className="”save”"><u>Save for later</u></div>
          <div className="”remove”"><u>Remove</u></div>
        </div>
        <hr /> 
        <div className="”checkout”">
          <div className="”total”">
            <div>
              <div className="”Subtotal”">Sub-Total</div>
              <div className="”items”">2 items</div>
            </div>
            <div className="”total-amount”">$6.18</div>
          </div>
          <button className="”button”">Checkout</button>
        </div>

      </div>
    </div>
  );
};

export default product_desc;
