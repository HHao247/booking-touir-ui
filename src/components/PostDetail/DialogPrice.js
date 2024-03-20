import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../shared/Button';
import { formatNumber } from '../../helpers';
import Input from '../shared/Input';
function DialogPrice({ isModalOpen, closeModal, data }) {
  const { gia } = data;
  const customStyles = {
    content: {
      width: '600px',
      height: '500px',
      margin: 'auto'
    }
  };
  const [countTicket, setCountTicket] = useState(1);

  const handleCountTicketChange = e => {
    const selectedValue = parseInt(e.target.value);
    setCountTicket(selectedValue);
    console.log('Số lượng vé', selectedValue);
  };

  const handleBooking = () => {
    console.log('Số lượng vé', countTicket);
  };
  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
      <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Tham gia tour </h2>
      
      <div className="row">
        <div className="col-md-12">
          <div className="container">
            <div className="content1">Số lượng: </div>
            <div className="content2">
              <select
                className="form-select"
                aria-label="Default select example"
                style={{ width: '120px', textAlign: 'center' }}
                onChange={handleCountTicketChange}
                value={countTicket}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
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
                <option value="Tiền mặt">Tiền mặt</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <Input label="Điểm đón" placeholder="Nhập điểm đón ..." autoComplete="off" />
      <Input label="Ghi chú" placeholder="Nhập ghi chú ..." autoComplete="off" />
      <div className="container">
            <div className="content1">Tổng tiền giá vé </div>
            <div className="content2">{formatNumber(gia)}</div>
          </div>
      <div className="modal-button">
        <Button type="default" onClick={closeModal}>
          Đóng
        </Button>
        <Button type="primary" onClick={handleBooking}>
          Tham gia tour
        </Button>
      </div>
    </Modal>
  );
}

export default DialogPrice;
