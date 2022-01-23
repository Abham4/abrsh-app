import React from 'react';
import {FaFacebookF,FaTwitter,FaPinterestP,FaInstagram,FaTiktok,FaPlay} from "react-icons/fa";
const Contact = () => {
    
  return <div className="contact">
      <div className="container">
         <div className="contactSection">
             <div className="aboutSection">
                 <img></img>
                 <div className="row j">
                     <div className="col-6">
                     <p className="p">For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life</p>
                         <div className="aboutCircles">
                             <ul className="h_ul">
                                 <li><FaFacebookF /></li>
                                 <li><FaTwitter /></li>
                                 <li><FaPinterestP /></li>
                                 <li><FaInstagram /></li>
                                 <li><FaInstagram /></li>
                             </ul>
                         </div>
                     </div>

                 </div>
             </div>

         </div>
      </div>
  </div>;
};

export default Contact;
