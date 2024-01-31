// src/Contact.jsx
import NavBar from './Navbar';
import '../Styles/Contact.css'; // Make sure to create and import Contact.css for styling

function Contact() {
  return (
    <div className="contact-page">
      <NavBar />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>
          Have questions or want to get in touch? Reach out to us using the contact information below.
        </p>
        <div className="contact-details">
          <div className="contact-info">
            <h2>Address</h2>
            <p>123 Event Street</p>
            <p>Cityville, State 12345</p>
          </div>
          <div className="contact-info">
            <h2>Email</h2>
            <p>info@example.com</p>
          </div>
          <div className="contact-info">
            <h2>Phone</h2>
            <p>(123) 456-7890</p>
          </div>
        </div>
        <form className="contact-form">
          <h2>Send us a Message</h2>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Your Phone:</label>
          <input type="phone" id="phone" name="phone" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
