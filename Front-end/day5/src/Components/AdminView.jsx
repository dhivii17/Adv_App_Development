// src/AdminView.
import '../Styles/AdminView.css'; // Import the CSS file for styling
import AdminNavBar from './AdminNavBar';
function AdminView() {
  // Assume you have data for events to display
  const events = [
    {
      eventId: 1,
      eventName: 'Event 1',
      eventDescription: 'Description for Event 1',
      eventImageURL: 'https://example.com/event1.jpg',
    },
    // Add more event objects as needed
  ];

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
