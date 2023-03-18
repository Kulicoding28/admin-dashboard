import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./single.scss";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="/assets/asset1.jpeg" alt="" className="itemImg" />
              <div className="detail">
                <h1 className="itemTitle">Jhony</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">Jhony@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right"></div>
          <div className="bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default Single;
