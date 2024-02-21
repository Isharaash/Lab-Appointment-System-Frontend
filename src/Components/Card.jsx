import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; // Import the map-marker icon

const Card = ({ title, content, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'envelope':
        return faEnvelope;
      case 'phone':
        return faPhone;
      case 'map-marker':
        return faMapMarkerAlt; // Corrected icon name to faMapMarkerAlt
      default:
        return null;
    }
  };

  return (
    <div className="Card">
      <div className="icon">
        <FontAwesomeIcon icon={getIcon()} />
      </div>
      <div className="info">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;



