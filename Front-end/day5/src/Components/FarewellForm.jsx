import { useState } from 'react';
import '../Styles/FarewellForm.css'
import { Link } from 'react-router-dom';

const FarewellForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    customizedDecoration: '',
    farewellSpeeches: '',
    memorableKeepsakes: '',
    entertainment: '',
    coordinationPlanning: '',
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
    <div className="box">
      <div className="farewell-form">
        <h2>Farewell Event Booking Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="farewell-section">
            <label htmlFor="name" className="farewell-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="farewell-input"
              required
            />
          </div>

          {/* Email */}
          <div className="farewell-section">
            <label htmlFor="email" className="farewell-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="farewell-input"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="farewell-section">
            <label htmlFor="phoneNumber" className="farewell-label">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="farewell-input"
              required
            />
          </div>

          {/* Customized Decorations */}
          <div className="farewell-section">
            <label htmlFor="customizedDecoration" className="farewell-label">Customized Decorations:</label>
            <select
              id="customizedDecoration"
              name="customizedDecoration"
              onChange={handleInputChange}
              value={formData.customizedDecoration}
              className="farewell-select"
            >
              <option value="theme-based">Theme-based Decorations</option>
              <option value="personalized">Personalized Decorations</option>
              {/* Add more customized decoration options as needed */}
            </select>
          </div>

          {/* Farewell Speeches and Toasts */}
          <div className="farewell-section">
            <label htmlFor="farewellSpeeches" className="farewell-label">Farewell Speeches and Toasts:</label>
            <select
              id="farewellSpeeches"
              name="farewellSpeeches"
              onChange={handleInputChange}
              value={formData.farewellSpeeches}
              className="farewell-select"
            >
              <option value="guest-speakers">Guest Speakers</option>
              <option value="personal-toasts">Personal Toasts</option>
              {/* Add more farewell speeches and toasts options as needed */}
            </select>
          </div>

          {/* Memorable Keepsakes */}
          <div className="farewell-section">
            <label htmlFor="memorableKeepsakes" className="farewell-label">Memorable Keepsakes:</label>
            <select
              id="memorableKeepsakes"
              name="memorableKeepsakes"
              onChange={handleInputChange}
              value={formData.memorableKeepsakes}
              className="farewell-select"
            >
              <option value="custom-gifts">Custom Gifts</option>
              <option value="photo-books">Photo Books</option>
              {/* Add more memorable keepsakes options as needed */}
            </select>
          </div>

          {/* Entertainment and Music */}
          <div className="farewell-section">
            <label htmlFor="entertainment" className="farewell-label">Entertainment and Music:</label>
            <select
              id="entertainment"
              name="entertainment"
              onChange={handleInputChange}
              value={formData.entertainment}
              className="farewell-select"
            >
              <option value="live-band">Live Band</option>
              <option value="dj-services">DJ Services</option>
              {/* Add more entertainment options as needed */}
            </select>
          </div>

          {/* Coordination and Planning */}
          <div className="farewell-section">
            <label htmlFor="coordinationPlanning" className="farewell-label">Coordination and Planning:</label>
            <select
              id="coordinationPlanning"
              name="coordinationPlanning"
              onChange={handleInputChange}
              value={formData.coordinationPlanning}
              className="farewell-select"
            >
              <option value="full-service">Full-Service Coordination</option>
              <option value="day-of-coordination">Day-of Coordination</option>
              {/* Add more coordination and planning options as needed */}
            </select>
          </div>

          {/* Package Selection */}
          <div className="farewell-section">
            <label htmlFor="package" className="farewell-label">Select Package:</label>
            <select id="package" name="package" onChange={handleInputChange} value={formData.package} className="farewell-select">
              <option value="silver">Silver Package</option>
              <option value="gold">Gold Package</option>
              <option value="diamond">Diamond Package</option>
            </select>
          </div>

          <Link to="/SuccessPage">
            <button type="submit" className="farewell-button">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default FarewellForm;
