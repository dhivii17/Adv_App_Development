// LoginPage.js
import { useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }

    // Clear previous error messages
    setError('');

    // Add your authentication logic here
    console.log('Logging in with:', { username, password });
    // For a real application, you would typically make an API call to authenticate the user

    // Assuming successful login, redirect to the Navbar or any other page
    navigate('/HomePage'); // Update this with the path you want to redirect to
  };

  return (
    <div className='page-container'>
    <div className="login-container">
      <h2>Login Page</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Not an existing user?{' '}
        <Link to="/SignupPage">SignUp</Link> {/* Use Link for navigation */}
      </p>
    </div>
    </div>
  );
};

export default LoginPage;
