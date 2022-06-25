import React from 'react';
// import { Spin } from 'antd';
import Img from "../images/codepipelogo.jpg"
import "./Loader.css"

const Loader = () => (
  <div className="loader">
    <img src={Img} style={{ animation: `spin 5s linear infinite`}} alt="spinner"/>
  </div>
);

export default Loader;