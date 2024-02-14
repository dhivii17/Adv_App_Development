import { useState, useEffect } from 'react';
import NavBar from './Navbar';
import '../Styles/Services.css';
import axios from 'axios';
import {useNavigate} from "react-router-dom"

function Services() {
  const navigate=useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [servicesData, setServicesData] = useState([]);
 const handleClick = () =>{
  navigate("/Marriage")
 }
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/auth/getevents");
        setServicesData(response.data);
      } catch (error) {
        console.error('Error fetching services:', error.response?.data || 'Unknown error');
      }
    };

    fetchServices();
  }, []);

  const filteredServices = servicesData.filter(service =>
    service.eventName.toLowerCase().includes(searchTerm.toLowerCase())
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
          <div key={service.eventId} className="service">
            <img
              src={service.eventImageURL}
              alt={service.eventName}
              className="service-image"
            />
            <h2>{service.eventName}</h2>
            <p>{service.eventDescription}</p>
            <br />
            
              <button className="view-details-button" onClick={handleClick}>View Details</button>
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
