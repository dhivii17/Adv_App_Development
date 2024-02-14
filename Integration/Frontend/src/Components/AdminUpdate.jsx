import { useState } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import '../Styles/AdminUpdate.css';

const AdminUpdate = () => {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDescription: '',
    eventImageURL: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    try {
      // Sending form data to the backend API using Axios PUT request
      const response = await axios.put(`http://localhost:8080/api/v1/auth/updateEvents/${eventDetails.eventname}`, eventDetails);     
      // Resetting the form data after successful submission
      setEventDetails({
        eventName: '',
        eventDescription: '',
        eventImageURL: '',
      });
      console.log(response)
      // You can add further logic here, like showing a success message
    } catch (error) {
      console.error('Error:', error); // Logging any errors that occurred
      // You can add further logic here, like showing an error message
    }
  };

  return (
    <div>
      <AdminNavBar />
      <div className="admin-update-container">
        <h1 className="admin-update-title">Update Event</h1>
        <div className="admin-update-form">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventDetails.eventName}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="eventDescription">Event Description:</label>
          <textarea
            id="eventDescription"
            name="eventDescription"
            value={eventDetails.eventDescription}
            onChange={handleInputChange}
            required
          ></textarea>

          <label htmlFor="eventImageURL">Event Image URL:</label>
          <input
            type="text"
            id="eventImageURL"
            name="eventImageURL"
            value={eventDetails.eventImageURL}
            onChange={handleInputChange}
            required
          />

          <button onClick={handleUpdateEvent} className="update-event-button">
            Update Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdate;
