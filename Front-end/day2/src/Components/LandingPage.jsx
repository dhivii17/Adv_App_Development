// Slideshow.jsx
import { Component } from 'react';
import '../Styles/LandingPage.css'
import { Link } from 'react-router-dom';

class Slideshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  componentDidMount() {
    this.showSlides();
  }

  showSlides = () => {
    let { slideIndex } = this.state;
    let slides = document.getElementsByClassName('mySlides');
    let dots = document.getElementsByClassName('dot');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
    this.setState({ slideIndex });
    setTimeout(this.showSlides, 2000); // Change image every 2 seconds
  };

  render() {
    return (
      <div>
        <div className="slideshow-container">
          <div className="overlay">
            <div className="button-container">
              <Link to="/LoginPage">
                <button className="Landingpage-button-user">User</button>
              </Link>
              <Link to="/AdminLogin">
                <button className="Landingpage-button-admin">Admin</button>
              </Link>
            </div>
          </div>

          <div className="mySlides fade">
            <img
              className="landing-img"
              src="https://images.pexels.com/photos/1157557/pexels-photo-1157557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              style={{ width: '100%' }}
              alt="Nature"
            />
          </div>

          <div className="mySlides fade">
            <img
              className="landing-img"
              src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              style={{ width: '100%' }}
              alt="Snow"
            />
            {/* <div className="text">Caption Two</div> */}
          </div>
          {/* Add more slides as needed */}
        </div>
        <div style={{ textAlign: 'center' }}>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    );
  }
}

export default Slideshow;
