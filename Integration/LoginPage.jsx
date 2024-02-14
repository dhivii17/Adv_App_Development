import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../Styles/LoginPage.css"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    setFormErrors(validate({ email, password }));
  
    if (isSubmit) {
      try {
        const response = await axios.post("http://localhost:8080/api/v1/auth/authenticate", {
          email,
          password,
        });
        const { token, id } = response.data;
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(id));
        console.log("Login successful:", response.data);
        navigate("/HomePage"); // Update this with the path you want to redirect to
      } catch (error) {
        console.error("Error logging in:", error.response?.data?.error || "Unknown error");
        // You might want to set an error state here if needed
      }
    }
  };
  

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (values.email.length < 5) {
      errors.email = "Email invalid format";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    const isValid = Object.keys(errors).length === 0;
    setIsSubmit(isValid);

    return errors;
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <h2>Login Page</h2>
        <form className="emp-box" onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={email}
              onChange={handleEmail}
              className="inp"
            />
          </label>
          {formErrors.email && (
            <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
              {formErrors.email}
            </p>
          )}
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              className="inp"
            />
          </label>
          {formErrors.password && (
            <p style={{ color: "red", fontSize: "13px", marginLeft: "5px" }}>
              {formErrors.password}
            </p>
          )}
          <br />
          <p>
            Not an existing user? Register{" "}
            <Link to="/SignupPage">here</Link>
          </p>
          <br />
          <button type="submit" id="login-button">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
