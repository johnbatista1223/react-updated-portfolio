import React from 'react';
import johnsPicture from '../images/john-pic.png';
import '../styles/Contact.css';
import Footer from '../Footer';

const Contact = () => {
  return ( 
    <div className="contact-card">

            <div className="card">
                <h1 className="text-center">Contact Me</h1>
                <div className="card-content">
                    <img src={johnsPicture} alt="profile-photo" className="profile float-left"></img>
                </div>
            </div>
            <Footer/>
        </div >
   );
}
 
export default Contact;