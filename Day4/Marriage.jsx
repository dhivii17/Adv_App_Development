
import NavBar from './Navbar';
import Footer from './Footer';
import '../Styles/Marriage.css'
import { Link } from 'react-router-dom';
function Marriage() {
  const handleBookNow = () => {
    // Add logic to handle the "Book Now" button click
    console.log('Book Now button clicked');
    // You can add further actions, such as redirecting to a booking page or displaying a modal.
  };

  return (
    <div>
      <NavBar />
      <div className="marriage-container">
        <h1 className="marriage-title">Marriage Services</h1>
        <div className="marriage-images">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNMOukivaQtV0Yli1f91ybKK9koE-OlcVUFA&usqp=CAU"
            alt="Marriage 1"
            className="marriage-image"
          />
          <img
            src="https://i.pinimg.com/736x/0b/c6/be/0bc6be3b9b5bb4a73429d6cc275357f3.jpg" // Replace with your second image URL
          // Replace with your second image URL
            alt="Marriage 2"
            className="marriage-image"
          />
          <img
            src="https://c4.wallpaperflare.com/wallpaper/461/312/947/couple-dance-dress-love-wallpaper-preview.jpg" // Replace with your third image URL
            alt="Marriage 3"
            className="marriage-image"
          />
          <img
            src="https://cdn0.weddingwire.in/article-gallery-o/00000/3_2/960/jpg/articulos-india/2019/non-troncales/indian-wedding-background/magic-box-entertainment-lead-indian-wedding-background.jpeg" // Replace with your fourth image URL
            alt="Marriage 4"
            className="marriage-image"
          />
        </div>
        <br></br>
        <h2>
          Plan your dream wedding with us. We take care of every detail to make your day special.
          From venue selection to decoration and coordination, we have got it all covered.
        </h2>
        <br></br>
        <h2>Our Marriage Services Include:</h2>
        <ul>
          <li>Venue Selection and Decoration</li>
          <li>Catering Services</li>
          <li>Photography and Videography</li>
          <li>Entertainment and Music</li>
          <li>Coordination and Planning</li>
        </ul>
        <h2>Our Packages:</h2>
        <ul>
          <li>Gold Package</li>
          <li>Silver Package</li>
          <li>Diamond Package</li>
        </ul>
        <p>Contact us now to book our marriage services and turn your wedding dreams into reality!</p>
        <Link to="/MarriageForm">
        <button className="book-now-button" onClick={handleBookNow}>
          Book Now
        </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Marriage;
