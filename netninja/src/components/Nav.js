import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="container-fluid">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link to="/" className="navbar-brand" href="#">NetNinja</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" href="#">Home  </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link" href="#">Create</Link>
          </li>

          
        
         
        </ul>
        
      </div>
    </nav>
     </div>
  )
}

export default Nav;