import { useState } from 'react';
import '../Styles/BirthdayForm.css';
import { Link } from 'react-router-dom';

const BirthdayForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    theme: '',
    cakeAndCatering: '',
    entertainment: '',
    photography: '',
    coordination: '',
    package: 'silver',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="birthbox">
      <div className="birthday-form">
        <h2>Birthday Celebration Form</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="birthday-section">
            <label htmlFor="name" className="birthday-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="birthday-input"
              required
            />
          </div>

          {/* Email */}
          <div className="birthday-section">
            <label htmlFor="email" className="birthday-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="birthday-input"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="birthday-section">
            <label htmlFor="phoneNumber" className="birthday-label">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="birthday-input"
              required
            />
          </div>

          {/* Theme Selection */}
          <div className="birthday-section">
            <label htmlFor="theme" className="birthday-label">Select Theme:</label>
            <select id="theme" name="theme" onChange={handleInputChange} value={formData.theme} className="birthday-select">
              <option value="themed">Themed Decorations</option>
              <option value="minimalist">Minimalist Decorations</option>
              {/* Add more theme options as needed */}
            </select>
          </div>

          {/* Cake and Catering */}
          <div className="birthday-section">
            <label htmlFor="cakeAndCatering" className="birthday-label">Select Cake and Catering:</label>
            <select
              id="cakeAndCatering"
              name="cakeAndCatering"
              onChange={handleInputChange}
              value={formData.cakeAndCatering}
              className="birthday-select"
            >
              <option value="full-service">Full-Service Cake and Catering</option>
              <option value="custom-cake">Custom Cake and Catering</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Entertainment */}
          <div className="birthday-section">
            <label htmlFor="entertainment" className="birthday-label">Select Entertainment:</label>
            <select
              id="entertainment"
              name="entertainment"
              onChange={handleInputChange}
              value={formData.entertainment}
              className="birthday-select"
            >
              <option value="dj">DJ Services</option>
              <option value="games">Games and Activities</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Photography */}
          <div className="birthday-section">
            <label htmlFor="photography" className="birthday-label">Select Photography:</label>
            <select
              id="photography"
              name="photography"
              onChange={handleInputChange}
              value={formData.photography}
              className="birthday-select"
            >
              <option value="basic">Basic Photography</option>
              <option value="photo-booth">Photo Booth Services</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Coordination */}
          <div className="birthday-section">
            <label htmlFor="coordination" className="birthday-label">Select Coordination:</label>
            <select
              id="coordination"
              name="coordination"
              onChange={handleInputChange}
              value={formData.coordination}
              className="birthday-select"
            >
              <option value="full-service">Full-Service Coordination</option>
              <option value="partial-service">Partial Coordination</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Package Selection */}
          <div className="birthday-section">
            <label htmlFor="package" className="birthday-label">Select Package:</label>
            <select id="package" name="package" onChange={handleInputChange} value={formData.package} className="birthday-select">
              <option value="silver">Silver Package</option>
              <option value="gold">Gold Package</option>
              <option value="diamond">Diamond Package</option>
            </select>
          </div>

          <Link to="/SuccessPage">
            <button type="submit" className="birthday-button">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default BirthdayForm;
