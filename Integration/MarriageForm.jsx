import { useState } from 'react';
import axios from 'axios';
import '../Styles/MarriageForm.css';

const MarriageForm = () => {
  const [formData, setFormData] = useState({
    bookid: '',
    pername: '',
    bookemail: '',
    bookphoneno: '',
    bookeventname: '',
    bookvenue: '',
    decorations: '',
    catering: '',
    photography: '',
    entertainment: '',
    bookpackage: 'silver',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your Spring Boot backend
      const response = await axios.post("http://localhost:8080/api/v1/auth/postbook", formData);

      console.log('Response from the server:', response.data);

      // Handle success, show a success message, or redirect to a success page
      // You can replace this with your desired logic

    } catch (error) {
      console.error('Error submitting form:', error);

      // Handle error, show an error message, or redirect to an error page
      // You can replace this with your desired logic
    }
  };

  return (
    <div className="box">
      <div className="marriage-form">
        <h2>Marriage Booking Form</h2>
        <form onSubmit={handleSubmit}>
          {/* Booking ID */}
          <div className="marriage-section">
            <label htmlFor="bookid" className="marriage-label">
              Booking ID:
            </label>
            <input
              type="text"
              id="bookid"
              name="bookid"
              value={formData.bookid}
              onChange={handleInputChange}
              className="marriage-input"
              required
            />
          </div>

          {/* Persons Name */}
          <div className="marriage-section">
            <label htmlFor="pername" className="marriage-label">
              Persons Name:
            </label>
            <input
              type="text"
              id="pername"
              name="pername"
              value={formData.pername}
              onChange={handleInputChange}
              className="marriage-input"
              required
            />
          </div>

          {/* Email */}
          <div className="marriage-section">
            <label htmlFor="bookemail" className="marriage-label">
              Email:
            </label>
            <input
              type="email"
              id="bookemail"
              name="bookemail"
              value={formData.bookemail}
              onChange={handleInputChange}
              className="marriage-input"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="marriage-section">
            <label htmlFor="bookphoneno" className="marriage-label">
              Phone Number:
            </label>
            <input
              type="tel"
              id="bookphoneno"
              name="bookphoneno"
              value={formData.bookphoneno}
              onChange={handleInputChange}
              className="marriage-input"
              required
            />
          </div>

          {/* Event Name */}
          <div className="marriage-section">
            <label htmlFor="bookeventname" className="marriage-label">
              Event Name:
            </label>
            <input
              type="text"
              id="bookeventname"
              name="bookeventname"
              value={formData.bookeventname}
              onChange={handleInputChange}
              className="marriage-input"
              required
            />
          </div>

          {/* Select Venue */}
          <div className="marriage-section">
            <label htmlFor="bookvenue" className="marriage-label">
              Select Venue:
            </label>
            <select
              id="bookvenue"
              name="bookvenue"
              onChange={handleInputChange}
              value={formData.bookvenue}
              className="marriage-select"
            >
              <option value="garden">Garden</option>
              <option value="beach">Beach</option>
              <option value="hotel">Hotel</option>
            </select>
          </div>

          {/* Select Decoration */}
          <div className="marriage-section">
            <label htmlFor="decorations" className="marriage-label">
              Select Decoration:
            </label>
            <select
              id="decorations"
              name="decorations"
              onChange={handleInputChange}
              value={formData.decorations}
              className="marriage-select"
            >
              <option value="floral">Floral Decorations</option>
              <option value="themed">Themed Decorations</option>
              <option value="minimalist">Minimalist Decorations</option>
            </select>
          </div>

          {/* Catering Services */}
          <div className="marriage-section">
            <label htmlFor="catering" className="marriage-label">
              Catering Services:
            </label>
            <select
              id="catering"
              name="catering"
              onChange={handleInputChange}
              value={formData.catering}
              className="marriage-select"
            >
              <option value="full-service">Full-Service Catering</option>
              <option value="drop-off">Drop-off Catering</option>
            </select>
          </div>

          {/* Photography and Videography */}
          <div className="marriage-section">
            <label htmlFor="photography" className="marriage-label">
              Photography and Videography:
            </label>
            <select
              id="photography"
              name="photography"
              onChange={handleInputChange}
              value={formData.photography}
              className="marriage-select"
            >
              <option value="basic">Basic Package</option>
              <option value="standard">Standard Package</option>
            </select>
          </div>

          {/* Entertainment and Music */}
          <div className="marriage-section">
            <label htmlFor="entertainment" className="marriage-label">
              Entertainment and Music:
            </label>
            <select
              id="entertainment"
              name="entertainment"
              onChange={handleInputChange}
              value={formData.entertainment}
              className="marriage-select"
            >
              <option value="dj">DJ Services</option>
              <option value="live-band">Live Band</option>
            </select>
          </div>

          {/* Select Package */}
          <div className="marriage-section">
            <label htmlFor="bookpackage" className="marriage-label">
              Select Package:
            </label>
            <select
              id="bookpackage"
              name="bookpackage"
              onChange={handleInputChange}
              value={formData.bookpackage}
              className="marriage-select"
            >
              <option value="silver">Silver Package</option>
              <option value="gold">Gold Package</option>
              <option value="diamond">Diamond Package</option>
            </select>
          </div>

          {/* Remove Link tag and use onClick on the button */}
          <button type="submit" className="marriage-button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MarriageForm;
