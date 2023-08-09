import React from 'react';
import './style.css';
import TourTitle from './TourTitle';
import { formatNumber } from '../../helpers';
import TourDec from './TourDec';

export default function TourDL() {
  return (
    <>
      <div className="card">
        <TourTitle />
        <TourDec />
        <h3 style={{ textAlign: 'right', fontSize: '2rem', color: '#F59321' }}>{formatNumber(80000000)}</h3>
      </div>
    </>
  );
}
