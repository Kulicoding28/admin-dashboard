import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              alt="noImage"
            />
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="">
                  <DriveFolderUploadOutlined />
                </label>
                <input type="file" />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Jhon_ex" />
              </div>
              <div className="formInput">
                <label htmlFor="">Name and Surname</label>
                <input type="text" placeholder="Jhon ex" />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Jhonex@gmail.com" />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="+62 1234 23 23" />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="password" />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input type="text" placeholder="Damai Street 24 Depok" />
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="Indonesia" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
