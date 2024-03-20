import React from 'react';
import { GiCommercialAirplane } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { BsFillCarFrontFill } from 'react-icons/bs';
function TourDec({data}) {
  const { time ,diemDen,diemDi} = data;

  return (
    <div className="row">
      <div className="col-md-12">
        <div className="container">
          <div className="content1">
            <IoMdTime size={20} color="black" style={{ marginRight: '5px' }} />{time}
          </div>
          <div className="content2">
            <GiCommercialAirplane size={20} color="black" style={{ marginRight: '5px' }} />
            <BsFillCarFrontFill size={20} color="black" />
          </div>
        </div>
        <div className="container">
          <div className="content1">
            <IoLocationSharp size={20} color="black" style={{ marginRight: '5px' }} />
            {diemDi}
          </div>
          <div className="content2">{diemDen}</div>
        </div>
      </div>
    </div>
  );
}

export default TourDec;
