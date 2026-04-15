import React, { useState } from 'react';

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleBook = async () => {
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ serviceId: service.id })
      });
      if (response.ok) {
        alert("Payment successful! Notification sent. Booking confirmed.");
        // Refresh home results
        window.location.reload();
      }
    } catch (error) {
      alert('Booking failed');
    }
  };

  const styles = {
    card: { backgroundColor: '#173B62', border: '1px solid rgba(255, 255, 255, 0.05)', color: '#f8f9fa' },
    icon: { color: '#F67055' },
    badge: { backgroundColor: 'rgba(246, 112, 85, 0.2)', color: '#F67055', border: '1px solid #F67055' },
    price: { color: '#F67055' },
    footer: { backgroundColor: 'rgba(0,0,0,0.15)', borderColor: 'rgba(255, 255, 255, 0.05)' },
    btn: {
      backgroundColor: isHovered ? '#F67055' : 'transparent',
      color: isHovered ? 'white' : '#F67055',
      borderColor: '#F67055',
      transition: '0.3s'
    }
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm" style={styles.card}>
        <div className="card-body text-center">
          <div className="display-4 mb-3" style={styles.icon}>
            <i className={`bi ${service.icon}`}></i>
          </div>
          <h5 className="card-title">{service.title}</h5>
          <span className="badge mb-2" style={styles.badge}>{service.type}</span>
          <p className="card-text mb-1" style={{ color: '#aab5c4' }}>Seats/Rooms Left: {service.availability}</p>
          <h4 style={styles.price}>${service.price}</h4>
        </div>
        <div className="card-footer border-top-0" style={styles.footer}>
          <button 
            className="btn w-100" 
            style={styles.btn} 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleBook}
          >
            <i className="bi bi-credit-card me-2"></i>Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;