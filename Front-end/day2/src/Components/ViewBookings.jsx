// ViewBookings.jsx
import '../Styles/ViewBookings.css'; // Import your CSS file

const ViewBookings = () => {
  return (
    <div className="view-bookings-container">
      <h2 className="view-bookings-heading">View Bookings</h2>
      <table className="custom-table">
        <thead>
          <tr>
            <th className="table-header">Username</th>
            <th className="table-header">Event ID</th>
            <th className="table-header">Event Name</th>
            <th className="table-header">Venue</th>
            <th className="table-header">Package</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-data">User123</td>
            <td className="table-data">1</td>
            <td className="table-data">Event A</td>
            <td className="table-data">Venue X</td>
            <td className="table-data">Gold Package</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </div>
  );
};

export default ViewBookings;
