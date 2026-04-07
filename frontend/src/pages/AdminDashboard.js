import React from 'react';

const AdminDashboard = () => {
  const styles = {
    card: { backgroundColor: '#173B62', border: '1px solid rgba(255, 255, 255, 0.05)', color: '#f8f9fa' },
    header: { backgroundColor: 'rgba(0,0,0,0.25)', borderBottom: '2px solid #F67055', color: '#f8f9fa' },
    btnPrimary: { backgroundColor: '#F67055', borderColor: '#F67055', color: 'white' },
    listItem: { backgroundColor: 'rgba(255,255,255,0.05)', color: '#f8f9fa', borderColor: 'rgba(255,255,255,0.05)' },
    alert: { backgroundColor: 'rgba(246, 112, 85, 0.15)', color: '#f8f9fa', border: '1px solid #F67055' }
  };

  return (
    <div>
      <h2 className="mb-4" style={{ color: '#F67055' }}>Admin Control Panel</h2>
      <div className="row">
        
        {/* Manage Services */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100" style={styles.card}>
            <div className="card-header" style={styles.header}>
              <i className="bi bi-gear-fill me-2"></i>Manage Travel Services
            </div>
            <div className="card-body">
              <button className="btn mb-3 w-100" style={styles.btnPrimary}>
                <i className="bi bi-plus-circle me-2"></i>Add New Service
              </button>
              <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center" style={styles.listItem}>
                  Flight 101 <button className="btn btn-sm btn-outline-light">Edit / Delete</button>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center" style={styles.listItem}>
                  Grand Plaza <button className="btn btn-sm btn-outline-light">Edit / Delete</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Manage Bookings & Refunds */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm h-100" style={styles.card}>
            <div className="card-header" style={styles.header}>
              <i className="bi bi-cash-stack me-2"></i>Manage Cancellations
            </div>
            <div className="card-body">
              <div className="alert d-flex justify-content-between align-items-center" style={styles.alert}>
                <span><strong>BKG-9922</strong> requests cancellation.</span>
                <button className="btn btn-sm btn-success">Process Refund</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;