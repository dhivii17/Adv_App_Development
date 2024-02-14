// src/AdminAdd.jsx
import { useState } from 'react';
import AdminNavBar from './AdminNavBar';
import axios from 'axios'; // Import Axios
import '../Styles/AdminAdd.css';

function AdminAdd() {
  const [eventDetails, setEventDetails] = useState({
    eventName: '',
    eventDescription: '',
    eventImageURL: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });
  };

  const handleAddEvent = async () => {
    try {
      // Make a POST request to your backend API to store the event details
      const response = await axios.post("http://localhost:8080/api/v1/auth/postevents", eventDetails);

      console.log('Event added:', response.data);

      // Redirect to the admin dashboard or another page
      // You can use React Router or any other navigation method here
    } catch (error) {
      console.error('Error adding event:', error.response?.data?.error || 'Unknown error');
      // Handle error state if needed
    }
  };

  return (
    <div>
      <AdminNavBar />
      <div className="admin-add-container">
        <h1 className="admin-add-title">Add Event</h1>
        <div className="admin-add-form">
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

          <button onClick={handleAddEvent} className="add-event-button">
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminAdd;
