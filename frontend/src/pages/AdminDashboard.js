import React, { useState, useEffect } from 'react';
import api from '../services/api';

const AdminDashboard = () => {
  const [services, setServices] = useState([]);
  const [cancellations, setCancellations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newService, setNewService] = useState({ name: '', type: '', price: '' });

  useEffect(() => {
    fetchServices();
    fetchCancellations();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await api.get('/admin/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCancellations = async () => {
    try {
      const response = await api.get('/admin/bookings/cancellations');
      setCancellations(response.data);
    } catch (error) {
      console.error('Error fetching cancellations:', error);
    }
  };

  const handleAddService = async (e) => {
    e.preventDefault();
    try {
      await api.post('/admin/services', newService);
      setNewService({ name: '', type: '', price: '' });
      fetchServices();
      alert('Service added successfully');
    } catch (error) {
      alert('Error adding service: ' + error.message);
    }
  };

  const handleDeleteService = async (id) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      try {
        await api.delete(`/admin/services/${id}`);
        fetchServices();
        alert('Service deleted successfully');
      } catch (error) {
        alert('Error deleting service: ' + error.message);
      }
    }
  };

  const handleProcessRefund = async (id) => {
    try {
      await api.put(`/admin/bookings/${id}/refund`);
      fetchCancellations();
      alert('Refund processed successfully');
    } catch (error) {
      alert('Error processing refund: ' + error.message);
    }
  };

  const styles = {
    card: { backgroundColor: '#173B62', border: '1px solid rgba(255, 255, 255, 0.05)', color: '#f8f9fa' },
    header: { backgroundColor: 'rgba(0,0,0,0.25)', borderBottom: '2px solid #F67055', color: '#f8f9fa' },
    btnPrimary: { backgroundColor: '#F67055', borderColor: '#F67055', color: 'white' },
    listItem: { backgroundColor: 'rgba(255,255,255,0.05)', color: '#f8f9fa', borderColor: 'rgba(255,255,255,0.05)' },
    alert: { backgroundColor: 'rgba(246, 112, 85, 0.15)', color: '#f8f9fa', border: '1px solid #F67055' }
  };

  if (loading) return <div>Loading...</div>;

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
              <form onSubmit={handleAddService} className="mb-3">
                <input 
                  type="text" 
                  placeholder="Service Name" 
                  className="form-control mb-2"
                  value={newService.name}
                  onChange={e => setNewService({...newService, name: e.target.value})}
                  required
                />
                <input 
                  type="text" 
                  placeholder="Type (Flight/Hotel/Tour)" 
                  className="form-control mb-2"
                  value={newService.type}
                  onChange={e => setNewService({...newService, type: e.target.value})}
                  required
                />
                <input 
                  type="number" 
                  placeholder="Price" 
                  className="form-control mb-2"
                  value={newService.price}
                  onChange={e => setNewService({...newService, price: e.target.value})}
                  required
                />
                <button type="submit" className="btn w-100" style={styles.btnPrimary}>
                  <i className="bi bi-plus-circle me-2"></i>Add New Service
                </button>
              </form>
              <ul className="list-group">
                {services.map(service => (
                  <li key={service.id} className="list-group-item d-flex justify-content-between align-items-center" style={styles.listItem}>
                    <span>{service.name} - ${service.price}</span>
                    <button 
                      className="btn btn-sm btn-outline-light"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
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
              {cancellations.length === 0 ? (
                <p>No pending cancellations</p>
              ) : (
                cancellations.map(cancellation => (
                  <div key={cancellation.id} className="alert d-flex justify-content-between align-items-center" style={styles.alert}>
                    <span><strong>{cancellation.bookingId}</strong> requests cancellation.</span>
                    <button 
                      className="btn btn-sm btn-success"
                      onClick={() => handleProcessRefund(cancellation.id)}
                    >
                      Process Refund
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;