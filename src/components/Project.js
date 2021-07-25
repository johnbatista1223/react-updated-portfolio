import React from 'react';
import './styles/Main.css';
import johnsPicture from './images/john-pic.png';


const Project = () => {
  return (
    
<div class="main-container container">
    <div class="row main_row">
      <div class="col-6">
        <h2 class="text-white">Hello, I'm</h2>
        <h1 class="custom-header m-heading">John Batista</h1>
        <h2 class="text-white">Full stack web Developer</h2>
      </div>
      <div class="col-6">
        <img src="images/john-pic.png" class="img-fluid custom-image" >
      </div>
    </div>
    </div>
    <br>
    <div id="about" class="container about p-8">
    <div class="row">
      <div class="col-3">
      </div>
      <div class="col-7 pl-3 pt-5 pb-2 text-white">
        <h3 class="custom-header">About Me</h3>
        <h1 class="m-heading"> A glimps about me</h1>
        <p>
          My name is John Batista. I'm 28 years old. I was born in Queens, New York. I currently live in New Jersey. Im
          a full time employee for the USPS while being a Part time Student studying what I enjoying doing which is
          Coding. Im a husband and a father to 2 beautiful evil kids, just kidding, thier awesome. Im a huge sports fan
          but an all times Green Bay Packers fan. Fun fact thats why I named my son after the greatest quarterback Aaron
          Rodgers. I love the aspect of learning new things,and I also love watching movies, and great shows. Theres so
          much more about me but these are the most important.
        </p>
      </div>
    </div>
  </div>
  )
}
  
  

  export default Project;