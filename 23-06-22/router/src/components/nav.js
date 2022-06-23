import { Link, NavLink} from "react-router-dom";

function Nav() {
    return (
<div className="container-fluid">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <NavLink   style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })} class="nav-link" to="/">Home </NavLink>
      </li>
      <li class="nav-item">
        <NavLink   style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })} class="nav-link" to="/about">About</NavLink>
      </li>   
      
        <li class="nav-item">
        <NavLink   style={({ isActive }) => ({
    color: isActive ? '#fff' : '#545e6f',
    background: isActive ? '#7600dc' : '#f0f0f0',
  })} class="nav-link" to="/contact">Contact</NavLink>
      </li>
   
    
 
    </ul>
  
  </div>
</nav>
 </div>
    );
}
export default Nav;