import { useState } from 'react';
import '../Styles/BabyShowerForm.css';
import { Link } from 'react-router-dom';

const BabyShowerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    decorations: '',
    cake: '',
    activities: '',
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
    console.log('Baby Shower Form submitted:', formData);
  };

  return (
    <div className="babybox">
      <div className="baby-shower-form">
        <h2>Baby Shower Booking Form</h2>
        <br></br>
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="form-section">
            <label htmlFor="name" className="label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input"
              required
            />
          </div>

          {/* Email */}
          <div className="form-section">
            <label htmlFor="email" className="label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="form-section">
            <label htmlFor="phoneNumber" className="label">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="input"
              required
            />
          </div>

          {/* Decorations */}
          <div className="form-section">
            <label htmlFor="decorations" className="label">
              Select Decorations:
            </label>
            <select
              id="decorations"
              name="decorations"
              onChange={handleInputChange}
              value={formData.decorations}
              className="select"
            >
              <option value="themed">Themed Decorations</option>
              <option value="minimalist">Minimalist Decorations</option>
              {/* Add more decoration options as needed */}
            </select>
          </div>

          {/* Cake */}
          <div className="form-section">
            <label htmlFor="cake" className="label">
              Select Cake:
            </label>
            <select
              id="cake"
              name="cake"
              onChange={handleInputChange}
              value={formData.cake}
              className="select"
            >
              <option value="adorable">Adorable Baby Shower Cake</option>
              {/* Add more cake options as needed */}
            </select>
          </div>

          {/* Activities */}
          <div className="form-section">
            <label htmlFor="activities" className="label">
              Select Activities:
            </label>
            <select
              id="activities"
              name="activities"
              onChange={handleInputChange}
              value={formData.activities}
              className="select"
            >
              <option value="games">Games and Activities</option>
              {/* Add more activity options as needed */}
            </select>
          </div>

          {/* Photography */}
          <div className="form-section">
            <label htmlFor="photography" className="label">
              Select Photography:
            </label>
            <select
              id="photography"
              name="photography"
              onChange={handleInputChange}
              value={formData.photography}
              className="select"
            >
              <option value="memories">Photography and Memories</option>
              {/* Add more photography options as needed */}
            </select>
          </div>

          {/* Coordination */}
          <div className="form-section">
            <label htmlFor="coordination" className="label">
              Select Coordination:
            </label>
            <select
              id="coordination"
              name="coordination"
              onChange={handleInputChange}
              value={formData.coordination}
              className="select"
            >
              <option value="planning">Coordination and Planning</option>
              {/* Add more coordination options as needed */}
            </select>
          </div>

          {/* Package Selection */}
          <div className="form-section">
            <label htmlFor="package" className="label">
              Select Package:
            </label>
            <select
              id="package"
              name="package"
              onChange={handleInputChange}
              value={formData.package}
              className="select"
            >
              <option value="silver">Silver Package</option>
              <option value="gold">Gold Package</option>
              <option value="diamond">Diamond Package</option>
            </select>
          </div>

          <Link to="/SuccessPage">
            <button type="submit" className="button">
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default BabyShowerForm;
