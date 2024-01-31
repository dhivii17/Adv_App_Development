import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import video from "./Logovdo.mp4";
import '../Styles/Logo.css'

const Logo = () => {
  useEffect(() => {
    const videoElement = document.getElementById('logoVideo');

    const handleVideoEnd = () => {
      // Redirect to LandingPage using Link
      document.getElementById('landingPageLink').click();
    };

    // Add an event listener for the end of the video
    videoElement.addEventListener('ended', handleVideoEnd);

    // Remove the event listener when the component unmounts
    return () => {
      videoElement.removeEventListener('ended', handleVideoEnd);
    };
  }, []);

  const handleVideoPlay = () => {
    // Remove loop attribute after the first play
    const videoElement = document.getElementById('logoVideo');
    videoElement.removeAttribute('loop');
  };

  return (
    <div className="logo-container">
      <video
        id="logoVideo"
        className="Logo-video"
        autoPlay
        muted
        playsInline
        onPlay={handleVideoPlay}
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* Hidden Link to trigger the navigation */}
      <Link to="/LandingPage" id="landingPageLink" style={{ display: 'none' }} />
    </div>
  );
};

export default Logo;
