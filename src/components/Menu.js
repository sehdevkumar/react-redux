import React,{useState,useEffect} from "react";
import './Menu.css'
import {NavLink} from 'react-router-dom'



function Menu() {
    
   

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">
          CoolerWave.com
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink to="/" className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              
                <NavLink to="/signup" className="nav-link" href="#">
                  SignUp
                </NavLink>
            

              
            </li>

            <li className="nav-item">
             
                <NavLink to="/signin" className="nav-link" href="#">
                  SignIn
                </NavLink>
              
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Menu;
