// src/Services.js
import { useState } from 'react';
import NavBar from './Navbar';
import '../Styles/Services.css';
import { Link } from 'react-router-dom';

function Services() {
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy service data (replace with your actual data)
  const servicesData = [
    {
      id: 1,
      name: 'Marriage',
      imageSrc: 'https://i.pinimg.com/originals/3c/b0/5e/3cb05e30293889736141f6a737c6b486.jpg',
      description: 'Plan your dream wedding with us. We take care of every detail to make your day special.',
      link: '/Marriage',
    },
    {
      id: 2,
      name: 'Birthday',
      imageSrc: 'https://static.vecteezy.com/system/resources/thumbnails/032/498/898/small/birthday-cake-with-candles-and-sweets-on-white-table-near-blue-wall-generative-ai-free-photo.jpg',
      description: 'Celebrate birthdays with joy and excitement. We organize memorable birthday events.',
      link: '/Birthday',
    },
    {
      id: 3,
      name: 'Farewell',
      imageSrc: 'https://www.learnesl.net/wp-content/uploads/2018/11/Tableau-Performers.jpg',
      description: 'Our farewell party services are designed to make the goodbye memorable and heartwarming.',
      link: '/Farewell',
    },
    {
      id: 4,
      name: 'BabyShower',
      imageSrc: 'https://m.media-amazon.com/images/I/71BvpxIiF9L.jpg',
      description: 'Welcoming a new life is a joyous occasion. We create beautiful baby showers for expecting parents.',
      link: '/BabyShower',
    },
    // Add more services as needed
  ];

  const filteredServices = servicesData.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NavBar />
      <div className="services-container">
        <h1 className="services-title">Our Services</h1>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search services..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {filteredServices.map(service => (
          <div key={service.id} className="service">
            <img
              src={service.imageSrc}
              alt={service.name}
              className="service-image"
            />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <br />
            <Link to={service.link}>
              <button className="view-details-button">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
