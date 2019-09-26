import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";



function NavBar() {

  return (

    <div class="navbar">
      
      <ul>
        <Link id="logo" to="/">Dan's Book Search</Link>
        <Link className="search-link" to="/search"><img src="/images/cloud-icon.png" alt="a png of a cloud"id="cloud-1-style"/> </Link>
        <Link className="saved-link" to="/saved"><img src="/images/cloud-icon.png" alt="a png of a cloud"id="cloud-1-style"/></Link>
      </ul>
      
    </div> 

  );
}

export default NavBar;
