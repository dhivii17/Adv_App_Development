// SignUpPage.js
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignupPage.css';


const SignUpPage = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Hook to access the navigate function

  const handleSignUp = () => {
    // Basic validation
    if (!newUsername || !newPassword || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Add your SignUp logic here
    console.log('Signing up with:', { newUsername, newPassword });
    // For a real application, you would typically make an API call to create a new user

    // Clear previous error messages
    setError('');

    // Optionally, you can navigate to the login page or any other page after successful signup
    // Example:
    navigate('/login');
  };

  return (
    <div>
         <div className='sign-container'>
         <div className="signup-container">
      <h2>SignUp Page</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="button" onClick={handleSignUp}>
          SignUp
        </button>
      </form>
      <p>
        Already having an account?{' '}
        <Link to="/LoginPage">Login</Link> {/* Use Link for navigation */}
      </p>
      </div>
    </div>
    </div>
  );
};

export default SignUpPage;
