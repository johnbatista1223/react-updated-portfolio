import React from 'react';
import './styles/Main.css';
import johnsPicture from './images/john-pic.png';


const Project = () => {
  return (
<div className="main-container container">
  <div className="row main_row">
    <div className="col-6">
      <h2 className="text-white">Hello, I'm</h2>
      <h1 className="custom-header m-heading">John Batista</h1>
      <h2 className="text-white">Full stack web Developer</h2>
    </div>
    <div className="col-6">
      <img src={johnsPicture}className="img-fluid custom-image" /> 
    </div>
  </div>

  <br/> 
  
  <div id="about" className="container about p-8">
    <div className="row">
      <div className="col-3">
      </div>
      <div className="col-7 pl-3 pt-5 pb-2 text-white">
        <h3 className="custom-header">About Me</h3>
        <h1 className="m-heading"> A glimps about me</h1>
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
</div>
/
<div id="projects" className="container mt-5 pt-5">
    <h1 className="custom-header mb-3 pb-2">My Projects</h1>
    <div className="row custom-row">
      <div className="col-4 mb-5">
        <div className="card" >
          <div className="card-body custom-card1">
            <br/>
            <h5 className="card-title">Weather App</h5>
            <p className="card-text">
              This is a weather app that displays a 5 day forcast with icons great for everyday use.
            </p>
            <a href="https://johnbatista1223.github.io/weather-application/" className="btn btn-warning">See Project</a>
            <a href="https://github.com/johnbatista1223/weather-application" className="btn btn-warning">Repo</a>
          </div>
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="card" >
          <div className="card-body custom-card2">
            <br/>
            <h5 className="card-title">Day planner</h5>
            <p className="card-text">
              Need to plan your day this is a simply daily planner app thats easy to use, and its color coded by the
              hour.
            </p>
            <a href="https://johnbatista1223.github.io/work-schedule-planner/" className="btn btn-warning">See Project</a>
            <a href="https://github.com/johnbatista1223/work-schedule-planner" className="btn btn-warning">Repo</a>
          </div>
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="card" >
          <div className="card-body custom-card3">
            <h5 className="card-title">Grand Day Out</h5>
            <p className="card-text">
              This is an easy to use park application where you can look up a city and all of its nearby recreational
              areas will show up.
            </p>
            <a href="https://danringenbach.github.io/Project-1/" className="btn btn-warning">See Project</a>
            <a href="https://github.com/DanRingenbach/Project-1" className="btn btn-warning">Repo</a>
          </div>
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="card" >
          <div className="card-body custom-card4">
            <br/>
            <h5 className="card-title">Password Generator</h5>
            <p className="card-text">
              Just a simple password generator app just in case you need to generate a password for a website.
            </p>
            <a href="https://johnbatista1223.github.io/Password-Key-generator/" className="btn btn-warning">See Project</a>
            <a href="https://github.com/johnbatista1223/Password-Key-generator" className="btn btn-warning">Repo</a>
          </div>
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="card" >
          <div className="card-body custom-card5">
            <h5 className="card-title">Quiz App</h5>
            <p className="card-text">
              Quiz application, however fast you finish the quiz with correct
              answers that will be your score.
            </p>
            <a href="https://johnbatista1223.github.io/quizo-game/" className="btn btn-warning">See Project</a>
            <a href="https://github.com/johnbatista1223/quizo-game" className="btn btn-warning">Repo</a>
          </div>
        </div>
      </div>
      <div className="col-4 mb-5">
        <div className="card" >
          <div className="card-body custom-card6">
            <br/>
            <h5 className="card-title">Wedding profile </h5>
            <p className="card-text">
              A web optimization page where you can improve your web position in the search rankings.
            </p>
            <a href="https://storybook-weddings.herokuapp.com/" className="btn btn-warning">See Project</a>
            <a href="https://github.com/johnbatista1223/Wedding-Profile" className="btn btn-warning">Repo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}


  export default Project;