// src/AdminUpdate.jsx
import  { useState } from 'react';
import AdminNavBar from './AdminNavBar';
import '../Styles/AdminUpdate.css'; // Import the CSS file for styling

function AdminUpdate() {
  const [eventDetails, setEventDetails] = useState({
    eventId: '', // Added eventId field
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

  const handleUpdateEvent = () => {
    // Implement logic to update the event details in your data store or API
    console.log('Event updated:', eventDetails);

    // Redirect to the admin dashboard or another page
    // You can use React Router or any other navigation method here
  };

  return (
    <div>
      <AdminNavBar />
      <div className="admin-update-container">
        <h1 className="admin-update-title">Update Event</h1>
        <div className="admin-update-form">
          <label htmlFor="eventId">Event ID:</label>
          <input
            type="text"
            id="eventId"
            name="eventId"
            value={eventDetails.eventId}
            onChange={handleInputChange}
            required
          />

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
}

export default AdminUpdate;
