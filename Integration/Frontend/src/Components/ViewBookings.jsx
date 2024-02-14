import { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/ViewBookings.css';

const ViewBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
}, []);

// Booking.js


const fetchBookings = async () => {
try {
  const response = await axios.get('http://localhost:8080/api/v1/auth/getbookings');
  setBookings(response.data);
} catch (error) {
  console.error('Error fetching bookings:', error);
}
};

  return (
    <div className="view-bookings-container">
      <h2 className="view-bookings-heading">View Bookings</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th className="table-header">Booking ID</th>
            <th className="table-header">Person Name</th>
            <th className="table-header">Email</th>
            <th className="table-header">Phone Number</th>
            <th className="table-header">Event Name</th>
            <th className="table-header">Venue</th>
            <th className="table-header">Decorations</th>
            <th className="table-header">Catering</th>
            <th className="table-header">Photography</th>
            <th className="table-header">Entertainment</th>
            <th className="table-header">Package</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking) => (
            <tr key={booking.bookid}>
              <td className="table-data">{booking.bookid}</td>
              <td className="table-data">{booking.pername}</td>
              <td className="table-data">{booking.bookemail}</td>
              <td className="table-data">{booking.bookphoneno}</td>
              <td className="table-data">{booking.bookeventname}</td>
              <td className="table-data">{booking.bookvenue}</td>
              <td className="table-data">{booking.decorations}</td>
              <td className="table-data">{booking.catering}</td>
              <td className="table-data">{booking.photography}</td>
              <td className="table-data">{booking.entertainment}</td>
              <td className="table-data">{booking.bookpackage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;
