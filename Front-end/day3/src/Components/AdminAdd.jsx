// src/AdminAdd.jsx
import  { useState } from 'react';
import AdminNavBar from './AdminNavBar';
import '../Styles/AdminAdd.css'; // Import the CSS file for styling

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

  const handleAddEvent = () => {
    // Implement logic to add the event details to your data store or API
    console.log('Event added:', eventDetails);

    // Redirect to the admin dashboard or another page
    // You can use React Router or any other navigation method here
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
