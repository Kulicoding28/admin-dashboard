import {
  ListOutlined,
  NotificationsNoneOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import React from "react";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <h1 className="title">Overview</h1>
        <div className="items">
          <div className="item">
            <div className="search">
              <input type="text" placeholder="Search..." />
              <SearchOutlined />
            </div>
          </div>
          <div className="item">
            <NotificationsNoneOutlined className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img src="/assets/aziz1.png" alt="user" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
