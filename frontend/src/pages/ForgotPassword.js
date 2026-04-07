import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const styles = {
    card: { backgroundColor: '#173B62', border: '1px solid rgba(255, 255, 255, 0.05)', color: '#f8f9fa' },
    icon: { color: '#F67055' },
    input: { backgroundColor: 'rgba(255, 255, 255, 0.08)', color: '#f8f9fa', border: '1px solid rgba(255, 255, 255, 0.15)' },
    inputGroupText: { backgroundColor: 'rgba(0,0,0,0.2)', color: '#F67055', borderColor: 'rgba(255, 255, 255, 0.15)' },
    btnPrimary: { backgroundColor: '#F67055', borderColor: '#F67055', color: 'white' },
    btnOutline: { color: '#F67055', borderColor: '#F67055', backgroundColor: 'transparent' },
    link: { color: '#F67055' }
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-6 col-lg-4">
        <div className="card shadow-sm" style={styles.card}>
          <div className="card-body p-4">
            <div className="text-center mb-4">
              <i className="bi bi-shield-lock display-4" style={styles.icon}></i>
              <h4 className="mt-2">Forgot Login?</h4>
              <p style={{ color: '#aab5c4' }}>Enter your email address to receive a password reset link.</p>
            </div>

            {isSubmitted ? (
              <div className="alert text-center" style={{ backgroundColor: 'rgba(40, 167, 69, 0.1)', color: '#28a745', border: '1px solid #28a745' }}>
                <i className="bi bi-check-circle-fill me-2"></i>
                If an account exists, a recovery email has been sent.
                <div className="mt-3">
                  <Link to="/login" className="btn w-100" style={styles.btnOutline}>Return to Login</Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <div className="input-group">
                    <span className="input-group-text" style={styles.inputGroupText}><i className="bi bi-envelope"></i></span>
                    <input type="email" className="form-control" style={styles.input} value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                </div>
                <button type="submit" className="btn w-100 mb-3" style={styles.btnPrimary}>Send Recovery Link</button>
                <div className="text-center">
                  <Link to="/login" className="text-decoration-none" style={styles.link}>
                    <i className="bi bi-arrow-left me-1"></i>Back to Login
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;