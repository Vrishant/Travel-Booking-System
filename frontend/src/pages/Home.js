import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const [searchCriteria, setSearchCriteria] = useState({ source: '', destination: '', date: '', budget: '' });
  const [results, setResults] = useState([]);

  // Mock API call to Java Backend
  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate fetching from backend: GET /api/services?source=...
    setResults([
      { id: 1, type: 'Flight', title: 'AeroAir Flight 101', price: 299, availability: 12, icon: 'bi-airplane' },
      { id: 2, type: 'Hotel', title: 'Grand Plaza Hotel', price: 150, availability: 5, icon: 'bi-building' },
      { id: 3, type: 'TourPackage', title: 'City Highlights Tour', price: 89, availability: 20, icon: 'bi-map' }
    ]);
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