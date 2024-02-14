import { useState } from 'react';
import '../Styles/AdminLogin.css'; // Update with your desired CSS filename
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAdminLogin = async () => {
    if (!email || !password) {
      setError('Please enter both admin email and password');
      return;
    }

    setError('');

    try {
      // Make POST request to authenticate admin
      const response = await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
        email: email,
        password: password,
      });
      const { token, id } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(id));
        console.log("Login successful:", response.data);
      console.log('Admin Login successful:', response.data);

      // Assuming successful login, redirect to the Admin Dashboard or any other page
      navigate('/AdminAdd'); // Update this with the path you want to redirect to
    } catch (error) {
      console.error('Error logging in as admin:', error.response?.data?.error || 'Unknown error');
      // You might want to set an error state here if needed
    }
  };

  return (
    <div className='admin-page-container'> {/* Use a different class for styling */}
      <div className="admin-login-container"> {/* Use a different class for styling */}
        <h2>Admin Login Page</h2>
        <form>
          <label>
            Admin Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Admin Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
