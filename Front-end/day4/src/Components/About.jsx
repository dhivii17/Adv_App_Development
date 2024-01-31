// src/AboutPage.js
import NavBar from './Navbar';
import '../Styles/About.css';
const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <div className='about-container'>
        <div className="about-content">
          <div className="about-image-container">
            <img
              src="https://i.pinimg.com/736x/0c/af/64/0caf641c1f5391e1390773a51b31e6a2.jpg" // Replace with the URL of your about page image
              alt="About Us"
              className="about-image"
            />
          </div>
          <div className="about-text-container">
            <h1 className="about-title">About Us</h1>
            <br></br>
            <h2 className="about-subtitle">
              Event Managers Work with Clients to Understand their Requirements
              And Objectives For the Event.
            </h2>
            <p className="about-description">
              1. Event Planning And Coordination: This includes Creating Events
              Timelines, Managing Budgets And Coordinating With other stakeholders.
              <br></br><br></br>
              2. Venue Selection And Management: This involves Selecting The
              Appropriate Venue for the Event. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 
