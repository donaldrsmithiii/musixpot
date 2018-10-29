import React from 'react'

const Location = () => {
  return (
    <div className="location_wrapper">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12352.121901090248!2d-76.6073936!3d39.2875594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x22697bb8f2fceca2!2sBaltimore+Soundstage!5e0!3m2!1sen!2ssg!4v1540804601141" 
      width="100%" 
      height="500px" 
      frameBorder="0" 
      allowFullscreen
    ></iframe>

    <div className="location_tag">
      <div>Location</div>
    </div>

    </div>
  );
}

export default Location;