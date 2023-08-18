import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function TourTitle({ diemDen, time, maTour, image,keyword }) {
  const highlightSearch = (diemDen) => {
    const regex = new RegExp(`(${keyword})`, "gi");
    return diemDen.replace(regex, (match) => `<mark>${match}</mark>`);
  }
  return (
    <>
      <div className="card-img-top">
        <img src={`${image}`} className="card-img" alt="..." style={{ height: '250px' }} />
        <h2 dangerouslySetInnerHTML={{ __html: highlightSearch(diemDen) }} />
      </div>
      <Link to={`/post/${maTour}`}>
        <h2 style={{ color: 'black', fontSize: '25px', margin: '10px 0px 8px 10px' }}>{`Tour tham quan `}{diemDen} {time}</h2>
      </Link>
    </>
  );
}
