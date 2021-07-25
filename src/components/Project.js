import React from 'react';
import './styles/Main.css';
import johnsPicture from './images/john-pic.png';

const Project = () => {
  return (
  <div className="main-container container">
    <div className="row main_row">
      <div className="col-6">
        <h2 className="text-white">Hello, I'm</h2>
        <h2 className="custom-header m-heading">John Batista</h2>
        <h2 className="text-white">Full stack web Developer</h2>
      </div>
      <div className="col-6">
        <img src={johnsPicture} className="img-fluid custom-image">
          </img>
      </div>
    </div>
  </div>
  
  

  export default Project;