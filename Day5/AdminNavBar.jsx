// AdminNavBar.js

import { Link } from 'react-router-dom';
import '../Styles/AdminNavBar.css';

const AdminNavBar = () => {
  return (
    <nav className="admin-navbar-container">
      <ul className="admin-navbar-list">
        <li className="admin-navbar-list-item">
          <Link to="/admin-dashboard" className="admin-navbar-link">Admin Dashboard</Link>
        </li>
        <li className="admin-navbar-list-item">
          <Link to="/AdminAdd" className="admin-navbar-link">Add Events</Link>
        </li>
        <li className="admin-navbar-list-item">
          <Link to="/AdminUpdate" className="admin-navbar-link">Update Events</Link>
        </li>
        <li className="admin-navbar-list-item">
          <Link to="/AdminDelete" className="admin-navbar-link">Delete Events</Link>
        </li>
        <li className="admin-navbar-list-item">
          <Link to="/AdminView" className="admin-navbar-link">View Events</Link>
        </li>
        <li className="admin-navbar-list-item">
          <Link to="/ViewBookings" className="admin-navbar-link">View Bookings</Link>
        </li>
        <li className="admin-navbar-list-item">
          <Link to="/Slideshow" className="admin-navbar-link">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavBar;
