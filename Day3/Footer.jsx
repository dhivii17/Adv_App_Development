// src/Footer.js
import '../Styles/Footer.css'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="custom-footer">
      <nav>
        <ul className="footer-list">
          <li><NavLink to="/News" className="footer-link" activeClassName="active-link">News</NavLink></li>
          <li><NavLink to="/About" className="footer-link" activeClassName="active-link">About</NavLink></li>
          <li><NavLink to="/Contact" className="footer-link" activeClassName="active-link">Contact Us</NavLink></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
