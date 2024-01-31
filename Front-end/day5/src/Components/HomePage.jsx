// src/HomePage.js
import { Link } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import '../Styles/HomePage.css'

function HomePage() {
  return (
    <div className="homepage">
      <NavBar />
      <div className="homepage-container">
        <h1 className="homepage-title">Hey There Welcome!</h1>
        <h1 className="homepage-part-title">Transforming Your Ideas into Memorable Events.</h1>
        <h2 className="homepage-subtitle">
          Your trusted partner in creating unforgettable events and memorable experiences.
          With a passion for perfection and a commitment to excellence.
          Whether it is a grand wedding, a joyous birthday celebration, a
          retirement party, or a heartwarming baby shower, we are here to make every moment
          extraordinary.
        </h2>
        <Link to="/services">
          <button className="explore-button">Explore Now</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
