import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";

const Footer = () => {
  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light mt-5">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Proyecto Final Node JS</span>
        <div className="navbar-nav">
          <Link to="#" className="nav-link">
            Santiago Pigliacampi
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
