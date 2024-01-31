
import NavBar from './Navbar';
import Footer from './Footer';
import '../Styles/Farewell.css';
import { Link } from 'react-router-dom';

function Farewell() {
  const handleBookNow = () => {
    // Add logic to handle the "Book Now" button click
    console.log('Book Now button clicked for Farewell party services');
    // You can add further actions, such as redirecting to a booking page or displaying a modal.
  };

  return (
    <div>
      <NavBar />
      <div className="farewell-container">
        <h1 className="farewell-title">Farewell Party Services</h1>
        <div className="farewell-images">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaH40RZjmYJobB2uHX1sVdtXXsaK8evZ27WJqX8ALvxBsGDO2Ssf8JTRV-5Q3AdoVIes0&usqp=CAU" // Replace with your first farewell image URL
            alt="Farewell 1"
            className="farewell-image"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE1vA8CZGLEoExEaiVEhO8bhCg_TBmAWTYM5IJIxKpp0ghkAvmwUjcGdJaCRIlpKz2PAE&usqp=CAU" // Replace with your second farewell image URL
            alt="Farewell 2"
            className="farewell-image"
          />
          <img
            src="https://i5.walmartimages.com/asr/cb10806d-e62b-461a-97cf-c31a75b570df.77338a8d32b362734418650750a1212b.jpeg?odnHeight=320&odnWidth=320&odnBg=FFFFFF" // Replace with your third farewell image URL
            alt="Farewell 3"
            className="farewell-image"
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxTN3fy52G2vOM7CT5dw1mfARlKqwxtdq5-w&usqp=CAU" // Replace with your fourth farewell image URL
            alt="Farewell 4"
            className="farewell-image"
          />
        </div>
        <br></br>
        <h2>
          Bid farewell with style and emotion. Our farewell party services are designed to make
          the goodbye memorable and heartwarming.
          </h2>
          <br></br>
        <h2>Our Farewell Party Services Include:</h2>
        <ul>
          <li>Customized Decorations</li>
          <li>Farewell Speeches and Toasts</li>
          <li>Memorable Keepsakes</li>
          <li>Entertainment and Music</li>
          <li>Coordination and Planning</li>
        </ul>
        <h2>Our Packages:</h2>
        <ul>
          <li>Gold Package</li>
          <li>Silver Package</li>
          <li>Diamond Package</li>
        </ul>
        <p>Contact us now to book our farewell party services and create a memorable send-off for your loved ones.</p>
        <Link to="/FarewellForm">
        <button className="book-now-button" onClick={handleBookNow}>
          Book Now
        </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Farewell;
