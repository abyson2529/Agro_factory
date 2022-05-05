import React from "react";
import './profile.css'
import Profile from "../assets/profile.png";
import Header from "../components/header"
import LoginHeader from "../components/login-head";


const tokenVal = window.localStorage.getItem("token")


const profile = () => {
  return (
    <div>
      {tokenVal? <Header/>:<LoginHeader/>}
    <div className="container emp-profile">
    <form method="post">
      <div className="row">
        <div className="col-md-4">
          <div className="profile-img">
            <img src={Profile} alt="" />
            <div className="file btn btn-lg btn-primary">
              Change Photo
              <input type="file" name="file" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile-head">
            <h5>
              Abyson mathew
            </h5>
            <h6>
              Farmer
            </h6>
            <br />
            <br />
            <br />
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <input type="button" className="btn my-4 font-weight-bold atlas-cta cta-green" name="btnAddMore" defaultValue="Edit Profile" />
        </div>
      </div>
      <div className="row">
        
        <div className="col-md-8">
          <div className="tab-content profile-tab" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="row">
                <div className="col-md-6">
                  <label>User Id</label>
                </div>
                <div className="col-md-6">
                  <p>Abyson</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Name</label>
                </div>
                <div className="col-md-6">
                  <p>Abyson Mathew</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Email</label>
                </div>
                <div className="col-md-6">
                  <p>abysonmathew@gmail.com</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Phone</label>
                </div>
                <div className="col-md-6">
                  <p>9072222529</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>User Type</label>
                </div>
                <div className="col-md-6">
                  <p>Farmer</p>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="row">
                <div className="col-md-6">
                  <label>Experience</label>
                </div>
                <div className="col-md-6">
                  <p>Expert</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Hourly Rate</label>
                </div>
                <div className="col-md-6">
                  <p>10$/hr</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Total Projects</label>
                </div>
                <div className="col-md-6">
                  <p>230</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>English Level</label>
                </div>
                <div className="col-md-6">
                  <p>Expert</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label>Availability</label>
                </div>
                <div className="col-md-6">
                  <p>6 months</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <label>Your Bio</label><br />
                  <p>Your detail description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>           
  </div>
  </div>
  );
};

export default profile;
