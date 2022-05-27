import React, { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import GooglePayButton from '@google-pay/button-react'
import "react-bootstrap";
import Header from "../components/header";
import LoginHeader from "../components/login-head";
import "./sample.css";
import {
  Button,
  Modal,
  Form
} from "react-bootstrap";
import axios from 'axios'

const token = window.localStorage.getItem("token");

const tokenVal = window.localStorage.getItem("token")

const Sample = () => {

  const [cart,setCart] = useState([])
  const[quantity,setQuantity]=useState("1");
  const handleQuantity=(e)=>{
    setQuantity(e.target.value);
  }
  let carttotal=0;
  var a =[]


  async function getSeed(id){
    let data = {
      seedId:id
    }
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showSeedId",data
    );
    if (response2.status == 200){
      a = cart;
      a.push(response2.data.response)
      setCart(a)
    }
  }

  async function getFertilizer(id){
    let data = {
      fertilizerId:id
    }
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showFertilizerId",data
    );
    if (response2.status == 200){
      a = cart;
      a.push(response2.data.response)
      setCart(a)
    }
  }

 
  async function getMachinery(id){
    let data = {
      machineryId:id
    }
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showMachineryId",data
    );
    if (response2.status == 200){
      a = cart;
      a.push(response2.data.response)
      setCart(a)
    }
  }

  async function getGrain(id){
    let data = {
      grainId:id
    }
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showGrainId",data
    );
    if (response2.status == 200){
      a = cart;
      a.push(response2.data.response)
      setCart(a)
    }
  }

  async function getFruit(id){
    let data = {
      fruitId:id
    }
    let response2 = await axios.post(
      "http://localhost:4000/superadmin/showFruitId",data
    );
    if (response2.status == 200){
      a = cart;
      a.push(response2.data.response)
      console.log(cart)
      setCart(a)
    }
  }
  
  async function getCart() {
    let arr = [];
    const userId = window.localStorage.getItem('userId')
    const data = {
      userId:userId
    }
    let response = await axios.post(
      "http://localhost:4000/superadmin/showCart",data
    );
    if (response.status === 200) {
      let cartItems = response.data.message;
      for(let i = 0; i<cartItems.length;i++){
        if(cartItems[i].category == 'fruits'){
          getFruit(cartItems[i].productId)
        }
        else if (cartItems[i].category == 'seeds'){
          getSeed(cartItems[i].productId)
        }
        else if (cartItems[i].category == 'machinery'){
          getMachinery(cartItems[i].productId)
        }
        else if (cartItems[i].category == 'fertilizer'){
          getFertilizer(cartItems[i].productId)
        }
        else if (cartItems[i].category == 'grains'){
          getGrain(cartItems[i].productId)
        }

        
        
      }
      
    }
  }

  async function deleteCart(id){
    let response = await axios.post(
      "http://localhost:4000/superadmin/deleteCart",{cartId:id},
      {
        headers: { Authorization: token },
      }
    );
    getCart()
  }
  

  
  useEffect(() => {
    getCart();
  }, []);

  return (
    <div >
      {tokenVal? <Header/>:<LoginHeader/>}
      <div className="shopping-cart">
        {/* Title */}
        <div className="title">
          Shopping Bag
        </div>
        {/* Product #1 */}
        {cart&&cart.length>0&&cart.map((a)=>{
          console.log("hii"+a);
         
            
          var url ="http://localhost:4000/Controllers/Images/"+a.imagename;
          return(
          //  {a.length>0&& a.map((p)=>{
          //    return(
        <div className="item">
          <div className="buttons">
            <span className="delete-btn" />
            <span className="like-btn" />
          </div>
          <div className="image">
            <img async src={url} alt="" style={{ width: "90px"}}/>
          </div>
          <div className="descri">
            <span>{a.name}</span>
          </div>
          <div className="quantity">
          
          <button>+</button>
          <input className="proInput" type="text"  defaultValue={1} onChange={handleQuantity}  />
          <button>-</button>
          </div>
          <div className="total-price" onLoad={carttotal=carttotal+ quantity*a.price}>₹{a.price}</div>
          <div>
            
          <Button variant="primary" style={{ marginTop: "25px", marginLeft: "100px"}} onClick = {(a)=>deleteCart(a._id)}>
                      Remove
                      </Button></div>
          
        </div>
        //      );
        // })}
        );
        
          
      })}
      </div>
      <label style={{ width: "190rem", fontSize: "20px",marginTop: "-30px",marginBottom: "10px"}}>Total : {carttotal} /- </label>
      <Link to="#">
        
      <GooglePayButton className="btn-dash1" style={{  width: "10rem"}}
      environment="TEST"
      paymentRequest={{
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
              allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
              allowedCardNetworks: ["MASTERCARD", "VISA"],
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example",
                gatewayMerchantId: "exampleGatewayMerchantId",
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "12345678901234567890",
          merchantName: "Demo Merchant",
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: String(carttotal),
          currencyCode: "INR",
          countryCode: "IN",
        },
        shippingAddressRequired: true,

        callbackIntents: ["SHIPPING_ADDRESS"],
      }}
      onPaymentDataChanged={(paymentData) => {}}
      onLoadPaymentData={(paymentRequest) => {
        console.log("load payment data", paymentRequest);
      }}
    />
            </Link>   
    </div>
  );
};

export default Sample;
