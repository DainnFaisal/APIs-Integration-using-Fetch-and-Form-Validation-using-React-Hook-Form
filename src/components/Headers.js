import '../stylesheets/Headers.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Headers() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav-bar collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="set-links logo" to="/">API-Integration</Link>
              </li>
              <li className="nav-item">
                <Link className="set-links" to="/Login">Login</Link>
              </li>
              <li className="nav-item"> 
              <Link className="set-links" to="/Register">Register</Link>
              </li>
              <li className="nav-item">
              <Link className="set-links" to="/Products">Products</Link>
              </li>
              <li className="nav-item">
              <Link className="set-links" to="/Categories">Categories</Link>
              </li>
              <li className="nav-item">
              <Link className="set-links" to="/User">User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Headers
