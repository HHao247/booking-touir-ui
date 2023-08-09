import React from 'react';
import { Link } from 'react-router-dom';

export default function TourTitle() {
  return (
    <>
      <div className="card-img-top">
        <img src="/assets/images/da-lat.jpg" className="card-img" alt="..." />
        <h2>Địa điểm đến</h2>
      </div>
      <Link to="/post">
        <h2 style={{ color: 'black', fontSize: '25px', margin: '10px 0px 0px 10px' }}>Tên của tour du lịch</h2>
      </Link>
    </>
  );
}
