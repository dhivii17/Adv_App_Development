
import  '../Styles/SuccessPage.css'; // Import the CSS file

const SuccessPage = () => {
  return (
    <div className="success-container">
      <img
        className="success-image"
        src="https://t4.ftcdn.net/jpg/02/72/79/67/360_F_272796737_1gfclSQF8yzFHZeE2XX5513eOQMV53dw.jpg" // Replace with the actual path to your image
        alt="Event Success"
      />
      <h1 className="success-heading">Your event is booked successfully!</h1>
      <p className="success-message">
        Thank you for booking with us. We look forward to seeing you at the event.
      </p>
      {/* Add more content as needed */}
    </div>
  );
};

export default SuccessPage;
