import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import api from '../services/api';

const Home = () => {
  const [searchCriteria, setSearchCriteria] = useState({ source: '', destination: '', date: '', budget: '' });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.get('/services', { params: searchCriteria });
      const data = response.data;
      setResults(data.map(s => ({
        id: s.id,
        type: s.type,
        title: s.name,
        price: s.price,
        availability: s.availability,
        icon: s.type === 'Flight' ? 'bi-airplane' : s.type === 'Hotel' ? 'bi-building' : 'bi-map'
      })));
    } catch (error) {
      alert('Error fetching services: ' + error.message);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="card shadow-sm mb-5">
        <div className="card-body bg-light">
          <h4 className="card-title mb-4"><i className="bi bi-search me-2"></i>Find Your Next Adventure</h4>
          <form className="row g-3" onSubmit={handleSearch}>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Source" onChange={e => setSearchCriteria({...searchCriteria, source: e.target.value})} required />
            </div>
            <div className="col-md-3">
              <input type="text" className="form-control" placeholder="Destination" onChange={e => setSearchCriteria({...searchCriteria, destination: e.target.value})} required />
            </div>
            <div className="col-md-3">
              <input type="date" className="form-control" onChange={e => setSearchCriteria({...searchCriteria, date: e.target.value})} required />
            </div>
            <div className="col-md-2">
              <input type="number" className="form-control" placeholder="Max Budget" onChange={e => setSearchCriteria({...searchCriteria, budget: e.target.value})} />
            </div>
            <div className="col-md-1">
              <button type="submit" className="btn btn-primary w-100"><i className="bi bi-search"></i></button>
            </div>
          </form>
        </div>
      </div>

      {results.length > 0 && (
        <>
          <h3 className="mb-3">Available Services</h3>
          <div className="row">
            {results.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;