import React from 'react';
import Modal from 'react-modal';
import Button from '../shared/Button';
function DialogPrice({ isModalOpen, closeModal }) {
  const customStyles = {
    content: {
      width: '400px',
      height: '300px',
      margin: 'auto'
    }
  };
  const handleBooking = () => {
    console.log('hao');
  };
  return (
    <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
      <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Đặt vé </h2>
      <p>Đây là nội dung thông báo.</p>
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
