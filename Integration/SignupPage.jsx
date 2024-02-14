import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/SignupPage.css';
import axios from 'axios'; // Import Axios

const SignUpPage = () => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Hook to access the navigate function

  const handleSignUp = async () => {
    // Basic validation
    if (!newName || !newEmail || !newPassword) {
      setError('Please fill in all fields');
      return;
    }

    // Clear previous error messages
    setError('');

    try {
      // Make POST request to register endpoint
      const response = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name: newName,
        email: newEmail,
        password: newPassword,
      });

      console.log('Registration successful:', response.data);

      // Optionally, you can navigate to the login page or any other page after successful signup
      // Example:
      navigate('/LoginPage');
    } catch (error) {
      console.error('Error registering:', error.response?.data?.error || 'Unknown error');
      // You might want to set an error state here if needed
    }
  };

  return (
    <div className='sign-container'>
      <div className="signup-container">
        <h2>SignUp Page</h2>
        <form>
          <label>
            Name:
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
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
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="button" onClick={handleSignUp}>
            SignUp
          </button>
        </form>
        <p>
          Already have an account?{' '}
          <Link to="/LoginPage">Login</Link> {/* Use Link for navigation */}
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
