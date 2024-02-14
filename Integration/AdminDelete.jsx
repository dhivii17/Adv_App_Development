// // src/AdminDelete.jsx
// import { useState } from 'react';
// import AdminNavBar from './AdminNavBar';
// import '../Styles/AdminDelete.css';

// function AdminDelete() {
//   const [eventName, setEventName] = useState('');

//   const handleInputChange = (e) => {
//     setEventName(e.target.value);
//   };

//   const handleDeleteEvent = () => {
//     console.log('Event deleted with Name:', eventName);
//     // Add your logic to delete the event by eventName
//   };

//   return (
//     <div>
//       <AdminNavBar />
//       <div className="admin-delete-container">
//         <h1 className="admin-delete-title">Delete Event</h1>
//         <div className="admin-delete-form">
//           <label htmlFor="eventName">Event Name:</label>
//           <input
//             type="text"
//             id="eventName"
//             name="eventName"
//             value={eventName}
//             onChange={handleInputChange}
//             required
//           />

//           <button onClick={handleDeleteEvent} className="delete-event-button">
//             Delete Event
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminDelete;
import { useState } from 'react';
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import '../Styles/AdminDelete.css';

function AdminDelete() {
  const [eventName, setEventName] = useState('');

  const handleInputChange = (e) => {
    setEventName(e.target.value);
  };

  const handleDeleteEvent = async () => {
    try {
      // Sending DELETE request to the backend API using Axios
      const response = await axios.delete(`http://localhost:8080/api/v1/auth/deleteevents/${eventName}`);
      console.log(response.data); // Logging the response from the backend
      // Add your logic for handling the response, like showing a success message

      // Resetting the form data after successful deletion
      setEventName('');
    } catch (error) {
      console.error('Error:', error); // Logging any errors that occurred
      // Add your logic for handling errors, like showing an error message
    }
  };

  return (
    <div>
      <AdminNavBar />
      <div className="admin-delete-container">
        <h1 className="admin-delete-title">Delete Event</h1>
        <div className="admin-delete-form">
          <label htmlFor="eventName">Event Name:</label>
          <input
            type="text"
            id="eventName"
            name="eventName"
            value={eventName}
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

