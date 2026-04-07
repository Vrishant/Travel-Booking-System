import React, { useState } from 'react';

const UserDashboard = () => {
  const [bookings, setBookings] = useState([
    { id: 'BKG-9921', service: 'Grand Plaza Hotel', date: '2026-05-12', amount: 150, status: 'Confirmed' },
    { id: 'BKG-9922', service: 'AeroAir Flight 101', date: '2026-06-01', amount: 299, status: 'Confirmed' }
  ]);

  const handleCancel = (id) => {
    const updatedBookings = bookings.map(bkg => 
      bkg.id === id ? { ...bkg, status: 'Cancelled (Refund Pending)' } : bkg
    );
    setBookings(updatedBookings);
    alert(`Cancellation requested for ${id}. Notification sent.`);
  };

  const styles = {
    card: { backgroundColor: '#173B62', border: '1px solid rgba(255, 255, 255, 0.05)', color: '#f8f9fa' },
    header: { backgroundColor: 'rgba(0,0,0,0.15)', borderBottom: '1px solid rgba(255,255,255,0.05)' },
    
    // NEW: We must force the table to drop Bootstrap's default colors
    table: { color: '#f8f9fa', backgroundColor: 'transparent', marginBottom: 0 }, 
    
    th: { backgroundColor: 'rgba(0,0,0,0.25)', color: '#f8f9fa', borderBottom: '2px solid #F67055' },
    td: { color: '#f8f9fa', borderColor: 'rgba(255,255,255,0.05)', backgroundColor: 'transparent' },
    icon: { color: '#F67055' }
  };

  return (
    <div className="card shadow-sm" style={styles.card}>
      <div className="card-header" style={styles.header}>
        <h4 className="mb-0"><i className="bi bi-clock-history me-2" style={styles.icon}></i>My Bookings</h4>
      </div>
      <div className="card-body table-responsive">
        {/* Apply the new table styles here to override Bootstrap */}
        <table className="table align-middle" style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Booking ID</th>
              <th style={styles.th}>Service</th>
              <th style={styles.th}>Travel Date</th>
              <th style={styles.th}>Amount</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map(bkg => (
              <tr key={bkg.id}>
                <td style={styles.td}>{bkg.id}</td>
                <td style={styles.td}>{bkg.service}</td>
                <td style={styles.td}>{bkg.date}</td>
                <td style={styles.td}>${bkg.amount}</td>
                <td style={styles.td}>
                  <span className="badge" style={{ backgroundColor: bkg.status === 'Confirmed' ? '#28a745' : '#ffc107', color: bkg.status === 'Confirmed' ? 'white' : '#000' }}>
                    {bkg.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <button className="btn btn-sm btn-danger" disabled={bkg.status !== 'Confirmed'} onClick={() => handleCancel(bkg.id)}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;