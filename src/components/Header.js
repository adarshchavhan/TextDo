import React from 'react';
import {Link} from 'react-router-dom'

export default function Header({title, updateMode, mode}) {
  return (
    <>
      <nav className={`navbar navbar-expand-sm shadow-sm navbar-${mode} bg-${mode} sticky-top`}>
         <div className="container">
            
            <Link className="navbar-brand" to="/">{title}</Link>
            
            <div className="form-check form-switch position-fixed" style={{top: "15px", right:"80px"}}>
                  <input className="form-check-input" type="checkbox" onClick={updateMode} id="flexSwitchCheckDefault"/>
               </div>

            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
               aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="collapsibleNavId">
               
               <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                  <li className="nav-item active">
                     <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/about">About</Link>
                  </li>
               </ul>
               
            </div>

         </div>
      </nav>  

    </>
    
  )
}
