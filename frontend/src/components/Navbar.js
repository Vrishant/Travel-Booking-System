import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    nav: {
      backgroundColor: '#173B62',
      borderBottom: '3px solid #F67055'
    },
    link: { color: '#f8f9fa' },
    btn: {
      backgroundColor: '#F67055',
      color: 'white',
      border: 'none'
    }
  };

  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={styles.nav}>
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" style={styles.link}>
          <i className="bi bi-globe-americas me-2" style={{ color: '#F67055' }}></i>Bhalla Travel
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" style={{ filter: 'invert(1)' }}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={styles.link}><i className="bi bi-search me-1"></i>Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard" style={styles.link}><i className="bi bi-person me-1"></i>My Bookings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin" style={styles.link}><i className="bi bi-shield-lock me-1"></i>Admin</Link>
            </li>
            <li className="nav-item">
              <Link className="btn ms-2 px-4" to="/login" style={styles.btn}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;