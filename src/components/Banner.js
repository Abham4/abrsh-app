import React from 'react';
import {FaFacebookF,FaTwitter,FaPinterestP,FaInstagram,FaTiktok,FaPlay} from "react-icons/fa";

const Banner = () => {
    
  return <header className="header">
      <div className="container">
          
          <div className="row">
              <div className="col-6">
                  <div className="header__content">
                  <div className="header__section">
                  <ul className="header__ul">
                   <li>
                       <FaFacebookF />
                   </li>
                   <li>
                       <FaTwitter />
                   </li>
                   <li>
                       <FaPinterestP />
                   </li>
                   <li>
                       <FaInstagram />
                   </li>
                   <li>
                       <FaTiktok />
                   </li>
               </ul>
               <h1>I am Abraham</h1>
                  <p>He is my refuge and my fortress, my God</p>
               <div className="header__buttons">
                   <a href="" className="btn btn-outline"> 
                   JESUS +
                   </a>
                   &nbsp;&nbsp;&nbsp;
                   <a href="" className="btn btn-smart"> 
                   <FaPlay className="play" />
                   </a>
                   </div> 
               </div>
              </div>
              
            </div>
            <div className="col-6">
                 <div className="banner__img">
                     </div> 

            </div>

          </div>
      </div>
      
  </header>;
};

export default Banner;
