import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">

            
            <Link to="/"><i className='fab fa-instagram' /></Link>
            <Link to="/"><i className='fab fa-facebook-f' /></Link>
            <Link to="/"><i className='fab fa-twitter' /></Link>

    </div>
  );
}

export default Footer;
