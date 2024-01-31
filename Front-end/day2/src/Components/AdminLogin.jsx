// AdminLogin.jsx
import { useState } from 'react';
import '../Styles/AdminLogin.css'; // Update with your desired CSS filename
import {  useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [adminUsername, setAdminUsername] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    // Basic validation
    if (!adminUsername || !adminPassword) {
      setError('Please enter both admin username and password');
      return;
    }

    // Clear previous error messages
    setError('');

    // Add your admin authentication logic here
    console.log('Logging in as admin with:', { adminUsername, adminPassword });
    // For a real application, you would typically make an API call to authenticate the admin

    // Assuming successful login, redirect to the Admin Dashboard or any other page
    navigate('/AdminAdd'); // Update this with the path you want to redirect to
  };

  return (
    <div className='admin-page-container'> {/* Use a different class for styling */}
      <div className="admin-login-container"> {/* Use a different class for styling */}
        <h2>Admin Login Page</h2>
        <form>
          <label>
            Admin Username:
            <input
              type="text"
              value={adminUsername}
              onChange={(e) => setAdminUsername(e.target.value)}
            />
          </label>
          <br />
          <label>
            Admin Password:
            <input
              type="password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
            />
          </label>
          <br />
          {error && <p className="admin-error-message">{error}</p>}
          <button type="button" onClick={handleAdminLogin}>
            Admin Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
