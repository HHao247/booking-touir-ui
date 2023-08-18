import React from 'react';
import './style.css';
import TourTitle from './TourTitle';
import { formatNumber } from '../../helpers';
import TourDec from './TourDec';
import IconLoading from '../shared/IconLoading';

export default function TourDL({ data, keyword=false }) {
  if (!data) {
    <div
      className="icon_center"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}
    >
      <IconLoading width={250} />
    </div>;
  }
  const { diemDen, gia, time, maTour, image } = data;
  console.log(data);
  return (
    <>
      <div className="card">
        <TourTitle diemDen={diemDen} time={time} maTour={maTour} image={image} keyword={keyword} />
        <TourDec data={data} />
        <h3 style={{ textAlign: 'right', fontSize: '2rem', color: '#F59321' }}>{formatNumber(gia)}</h3>
      </div>
    </>
  );
}
