
import NavBar from './Navbar';
import Footer from './Footer';
import '../Styles/Birthday.css';
import { Link } from 'react-router-dom';

function Birthday() {
  const handleBookNow = () => {
    // Add logic to handle the "Book Now" button click
    console.log('Book Now button clicked for Birthday services');
    // You can add further actions, such as redirecting to a booking page or displaying a modal.
  };

  return (
    <div>
      <NavBar />
      <div className="birthday-container">
        <h1 className="birthday-title">Birthday Services</h1>
        <div className="birthday-images">
          <img
            src="https://rukminim2.flixcart.com/image/850/1000/xif0q/birthday-combo/y/e/7/blue-and-white-pastel-birthday-decorations-combo-kit-with-net-original-imaggyj69gp9qfav.jpeg?q=20&crop=false"
            alt="Birthday 1"
            className="birthday-image"
          />
          <img
            src="https://thumbs.dreamstime.com/b/colorful-happy-birthday-cupcakes-candles-spelling-148323072.jpg"
            alt="Birthday 2"
            className="birthday-image"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0eBczENNvndr67RBV9SJD9V2OSgt00RFCjw&usqp=CAU"
            alt="Birthday 3"
            className="birthday-image"
          />
          <img
            src="https://m.media-amazon.com/images/I/713BT9joBSL.jpg"
            alt="Birthday 4"
            className="birthday-image"
          />
        </div>
        <br></br>
        <h2>
          Celebrate birthdays with joy and excitement. We organize memorable birthday events.
          Whether its a surprise party or a themed celebration, our team ensures a fantastic
          experience for everyone involved.
        </h2>
        <br></br>
        <h2>Our Birthday Services Include:</h2>
        <ul>
          <li>Themed Decorations</li>
          <li>Birthday Cake and Catering</li>
          <li>Entertainment and Activities</li>
          <li>Photography and Memories</li>
          <li>Coordination and Planning</li>
        </ul>
        <h2>Our Packages:</h2>
        <ul>
          <li>Gold Package</li>
          <li>Silver Package</li>
          <li>Diamond Package</li>
        </ul>
        <p>Contact us now to book our birthday services and make your celebration unforgettable!</p>
        <Link to="/BirthdayForm">
        <button className="book-now-button" onClick={handleBookNow}>
          Book Now
        </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Birthday;
