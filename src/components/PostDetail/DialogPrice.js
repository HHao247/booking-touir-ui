import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../shared/Button';
import { formatNumber } from '../../helpers';
function DialogPrice({ isModalOpen, closeModal }) {
  const customStyles = {
    content: {
      width: '500px',
      height: '400px',
      margin: 'auto'
    }
  };
  const [adultTicket, setAdultTicket] = useState(0);
  const [childTicket, setChildTicket] = useState(0);
  const handleAdultTicketChange = e => {
    setAdultTicket(parseInt(e.target.value));
  };

  const handleChildTicketChange = e => {
    setChildTicket(parseInt(e.target.value));
  };
  const handleBooking = () => {
    console.log('Số lượng vé người lớn:', adultTicket);
    console.log('Số lượng vé trẻ em:', childTicket);
  };
  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
      <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Đặt vé </h2>
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <div className="content1">Người lớn</div>
            <div className="content2">
              <select
                className="form-select"
                aria-label="Default select example"
                style={{ width: '120px', textAlign: 'center' }}
                onChange={handleAdultTicketChange}
              >
                <option selected></option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <div className="container">
            <div className="content1">Trẻ em </div>
            <div className="content2">
              <select
                className="form-select"
                aria-label="Default select example"
                style={{ width: '120px', textAlign: 'center' }}
                onChange={handleChildTicketChange}
              >
                <option selected></option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
          <div className="container">
            <div className="content1">Phương thức thanh toán</div>
            <div className="content2">
              <select
                className="form-select"
                aria-label="Default select example"
                style={{ width: '120px', textAlign: 'center' }}
              >
                <option selected>Tiền mặt</option>
              </select>
            </div>
          </div>
          <div className="container">
            <div className="content1">Tổng tiền giá vé </div>
            <div className="content2">{formatNumber(20000000)}</div>
          </div>
          <div className="container">
            {/* <div className="content1">Nha Trang</div>
        <div className="content2">Nội dung 2</div> */}
          </div>
        </div>
      </div>
      <div className="modal-button">
        <Button type="category" onClick={closeModal}>
          Đóng
        </Button>
        <Button type="primary" onClick={handleBooking}>
          Đặt vé
        </Button>
      </div>
    </Modal>
  );
}

export default DialogPrice;
