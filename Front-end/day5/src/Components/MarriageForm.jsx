import { useState } from 'react';
import '../Styles/MarriageForm.css'
import { Link } from 'react-router-dom';

const MarriageForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    venue: '',
    decoration: '',
    catering: '',
    photography: '',
    entertainment: '',
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
      <div className="marriage-form">
        <h2>Marriage Booking Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="marriage-section">
            <label htmlFor="name" className="marriage-label">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="marriage-input"
              required
            />
          </div>

          {/* Email */}
          <div className="marriage-section">
            <label htmlFor="email" className="marriage-label">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="marriage-input"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="marriage-section">
            <label htmlFor="phoneNumber" className="marriage-label">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="marriage-input"
              required
            />
          </div>

          {/* Venue Selection */}
          <div className="marriage-section">
            <label htmlFor="venue" className="marriage-label">Select Venue:</label>
            <select id="venue" name="venue" onChange={handleInputChange} value={formData.venue} className="marriage-select">
              <option value="garden">Garden</option>
              <option value="beach">Beach</option>
              <option value="hotel">Hotel</option>
              {/* Add more venue options as needed */}
            </select>
          </div>

          {/* Decoration */}
          <div className="marriage-section">
            <label htmlFor="decoration" className="marriage-label">Select Decoration:</label>
            <select
              id="decoration"
              name="decoration"
              onChange={handleInputChange}
              value={formData.decoration}
              className="marriage-select"
            >
              <option value="floral">Floral Decorations</option>
              <option value="themed">Themed Decorations</option>
              <option value="minimalist">Minimalist Decorations</option>
              {/* Add more decoration options as needed */}
            </select>
          </div>

          {/* Catering Services */}
          <div className="marriage-section">
            <label htmlFor="catering" className="marriage-label">Catering Services:</label>
            <select
              id="catering"
              name="catering"
              onChange={handleInputChange}
              value={formData.catering}
              className="marriage-select"
            >
              <option value="full-service">Full-Service Catering</option>
              <option value="drop-off">Drop-off Catering</option>
              {/* Add more catering options as needed */}
            </select>
          </div>

          {/* Photography and Videography */}
          <div className="marriage-section">
            <label htmlFor="photography" className="marriage-label">Photography and Videography:</label>
            <select
              id="photography"
              name="photography"
              onChange={handleInputChange}
              value={formData.photography}
              className="marriage-select"
            >
              <option value="basic">Basic Package</option>
              <option value="standard">Standard Package</option>
              {/* Add more photography options as needed */}
            </select>
          </div>

          {/* Entertainment and Music */}
          <div className="marriage-section">
            <label htmlFor="entertainment" className="marriage-label">Entertainment and Music:</label>
            <select
              id="entertainment"
              name="entertainment"
              onChange={handleInputChange}
              value={formData.entertainment}
              className="marriage-select"
            >
              <option value="dj">DJ Services</option>
              <option value="live-band">Live Band</option>
              {/* Add more entertainment options as needed */}
            </select>
          </div>

          {/* Package Selection */}
          <div className="marriage-section">
            <label htmlFor="package" className="marriage-label">Select Package:</label>
            <select id="package" name="package" onChange={handleInputChange} value={formData.package} className="marriage-select">
              <option value="silver">Silver Package</option>
              <option value="gold">Gold Package</option>
              <option value="diamond">Diamond Package</option>
            </select>
          </div>

          <Link to="/SuccessPage">
            <button type="submit" className="marriage-button">Submit</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default MarriageForm;
