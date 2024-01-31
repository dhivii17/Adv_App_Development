// NavBar.js

import { Link } from 'react-router-dom';
import '../Styles/NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/about" className="navbar-link">About</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/services" className="navbar-link">Services</Link>
        </li>
        <li className="navbar-list-item">
          <Link to="/contact" className="navbar-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
