/** @format */

import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {


  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
     
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/about">{props.aboutText}</a>
        </li> */}
     
        
      </ul>
      
    <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor:'#white',borderRadius:'18px',margin:'1px 0px',padding:'5px',float:'right',alignContent:'flex'}}>
      <input className="form-check-input"onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
    </div>
    </div>

  </div>
</nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About',
}
