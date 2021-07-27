import React from 'react';
import './styles/Main.css';


const Footer = () => {
  return(
    <React.Fragment>
      <div>
        <br />
        <br />
        <br />
        <div id="social-media" className="container-fluid">
          <div className="container text-white py-5">
            <h4 className="custom-header">Social Media</h4>
            <h1 className="m-heading">Follow me!</h1>
            <div className="row pt-5">
              <div className="col-3 media_link btn">
                <div className="row">
                  <div className="col-6 d-flex justify-content-start">
                    <a href="https://www.linkedin.com/in/john-batista/" className="m-0 pt-2 text-white">
                      <h3>Linkedin</h3>
                    </a></div><a href="https://www.linkedin.com/in/john-batista/" className="m-0 pt-2 text-white">
                    <div className="col-6 d-flex justify-content-end align-items-center">
                    </div>
                  </a></div><a href="https://www.linkedin.com/in/john-batista/" className="m-0 pt-2 text-white">
                </a></div><a href="https://www.linkedin.com/in/john-batista/" className="m-0 pt-2 text-white">
              </a><div className="col-3 media_link btn"><a href="https://www.linkedin.com/in/john-batista/" className="m-0 pt-2 text-white">
                </a><div className="row"><a href="https://www.linkedin.com/in/john-batista/" className="m-0 pt-2 text-white">
                  </a><div className="col-6 d-flex justify-content-start"><a href="https://www.linkedin.com/in/john-batista/" className="m-0 pt-2 text-white">
                    </a><a href="https://github.com/johnbatista1223" className="m-0 pt-2 text-white">
                      <h3>Github</h3>
                    </a>
                  </div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                  </div>
                </div>
              </div>
              <div className="col-3 media_link btn">
                <div className="row">
                  <div className="col-6 d-flex justify-content-start">
                    <a href="https://www.facebook.com/john.batista.581" className="m-0 pt-2 text-white">
                      <h3>Facebook</h3>
                    </a>
                  </div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                  </div>
                </div>
              </div>
              <div className="col-3 media_link bg-warning btn">
                <div className="row">
                  <div className="col-6 d-flex justify-content-start">
                    <h6 className="m-0 pt-2  text-white">Email: Batistaj651@gmail.com
                      phone: 609-289-6244
                    </h6>
                  </div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="container text-muted text-center py-3 mt-5">
            <h5>
              Copyright © 2021
              <p className="text-warning">John Batista</p>
            </h5>
          </div>
        </footer>
      </div>
    </React.Fragment>
  )
}
export default Footer;