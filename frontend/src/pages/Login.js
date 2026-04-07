import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => setCredentials({ ...credentials, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (credentials.email === 'admin@travel.com') navigate('/admin');
    else if (credentials.email && credentials.password) navigate('/dashboard');
    else setError('Please enter both email and password.');
  };

  const styles = {
    card: { backgroundColor: '#173B62', border: '1px solid rgba(255, 255, 255, 0.05)', color: '#f8f9fa' },
    icon: { color: '#F67055' },
    input: { backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#f8f9fa', border: '1px solid rgba(255, 255, 255, 0.15)' },
    inputGroupText: { backgroundColor: 'rgba(0,0,0,0.2)', color: '#F67055', borderColor: 'rgba(255, 255, 255, 0.15)' },
    btn: { backgroundColor: '#F67055', borderColor: '#F67055', color: 'white' },
    link: { color: '#F67055' }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6 col-lg-4">
        <div className="card shadow-sm" style={styles.card}>
          <div className="card-body p-4 p-sm-5">
            <div className="text-center mb-4">
              <div className="display-4 mb-3" style={styles.icon}><i className="bi bi-person-circle"></i></div>
              <h3 className="fw-bold">Welcome Back</h3>
              <p style={{ color: '#aab5c4' }}>Please sign in to your account</p>
            </div>
            {error && <div className="alert alert-danger py-2 text-center">{error}</div>}
            
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email address</label>
                <div className="input-group">
                  <span className="input-group-text" style={styles.inputGroupText}><i className="bi bi-envelope"></i></span>
                  <input type="email" className="form-control" name="email" value={credentials.email} onChange={handleChange} style={styles.input} required />
                </div>
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Password</label>
                <div className="input-group">
                  <span className="input-group-text" style={styles.inputGroupText}><i className="bi bi-lock"></i></span>
                  <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange} style={styles.input} required />
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />
                  <label className="form-check-label" style={{ color: '#aab5c4' }}>Remember me</label>
                </div>
                <Link to="/forgot-password" style={styles.link} className="text-decoration-none small fw-semibold">Forgot password?</Link>
              </div>

              <button type="submit" className="btn w-100 py-2 mb-3" style={styles.btn}>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;