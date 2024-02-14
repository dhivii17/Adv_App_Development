// src/AdminView.jsx
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/AdminView.css';
import AdminNavBar from './AdminNavBar';

function AdminView() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/auth/getevents");
        setEvents(response.data);
      } catch (error) {
        console.error('Error fetching events:', error.response?.data || 'Unknown error');
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <AdminNavBar />
      <div className="admin-view-container">
        <h1 className="admin-view-title">View Events</h1>
        <div className="admin-view-events">
          {events.map((event) => (
            <div key={event.eventId} className="admin-view-event">
              <h2>{event.eventName}</h2>
              <p>{event.eventDescription}</p>
              <img src={event.eventImageURL} alt={`Event ${event.eventId}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminView;
