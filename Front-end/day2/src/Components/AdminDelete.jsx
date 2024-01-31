// src/AdminDelete.jsx
import  { useState } from 'react';
import AdminNavBar from './AdminNavBar';
import '../Styles/AdminDelete.css'; // Import the CSS file for styling

function AdminDelete() {
  const [eventId, setEventId] = useState('');

  const handleInputChange = (e) => {
    setEventId(e.target.value);
  };

  const handleDeleteEvent = () => {
    // Implement logic to delete the event with eventId from your data store or API
    console.log('Event deleted with ID:', eventId);

    // Redirect to the admin dashboard or another page
    // You can use React Router or any other navigation method here
  };

  return (
    <div>
      <AdminNavBar />
      <div className="admin-delete-container">
        <h1 className="admin-delete-title">Delete Event</h1>
        <div className="admin-delete-form">
          <label htmlFor="eventId">Event ID:</label>
          <input
            type="text"
            id="eventId"
            name="eventId"
            value={eventId}
            onChange={handleInputChange}
            required
          />

          <button onClick={handleDeleteEvent} className="delete-event-button">
            Delete Event
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminDelete;
