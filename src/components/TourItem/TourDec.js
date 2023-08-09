import React from 'react';
import { GiCommercialAirplane } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { IoMdTime } from 'react-icons/io';
import { BsFillCarFrontFill } from 'react-icons/bs';
function TourDec() {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="container">
          <div className="content1">
            <IoMdTime size={20} color="black" style={{ marginRight: '5px' }} />6 ngày 3 đêm
          </div>
          <div className="content2">
            <GiCommercialAirplane size={20} color="black" style={{ marginRight: '5px' }} />
            <BsFillCarFrontFill size={20} color="black" />
          </div>
        </div>
        <div className="container">
          <div className="content1">
            <IoLocationSharp size={20} color="black" style={{ marginRight: '5px' }} />
            TP Hồ Chí Minh
          </div>
          <div className="content2">Nha Trang</div>
        </div>
        <div className="container">
          {/* <div className="content1">Nha Trang</div>
        <div className="content2">Nội dung 2</div> */}
        </div>
      </div>
    </div>
  );
}

export default TourDec;
