import React from 'react';
import { Link } from 'react-router-dom';

export default function TourDLTitle() {
  return (
    <>
      <div className="card-img-top">
        <img src="/assets/images/da-lat.jpg" className="card-img" alt="..." />
        <h2>Địa điểm đến</h2>
      </div>
      <Link to="/post">
        <h2 style={{ color: 'black', textAlign: 'center' }}>Tên của tour du lịch</h2>
      </Link>
    </>
  );
}
