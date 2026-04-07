import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  const appStyle = {
    backgroundColor: '#0d243f', // Deepest background
    minHeight: '100vh',
    color: '#f8f9fa',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  };

  return (
    <div style={appStyle}>
      <Router>
        <Navbar />
        <div className="container mt-4 pb-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;