import Modal from 'react-modal';
import React from 'react';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';

function DialogAddTour({ isModalOpen, closeModal }) {
  const handleAddTour = () => {
    console.log('thêm tour');
  };
  const customStyles = {
    content: {
      width: '700px',
      height: '800px',
      margin: 'auto'
    }
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
        <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Thêm tour</h2>
        <div className="from-input">
          <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." autoComplete="off" />
          <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." autoComplete="off" />
          <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." autoComplete="off" />
          <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." autoComplete="off" />
          <Input label="Tên đăng nhập" placeholder="Nhập tên đăng nhập ..." autoComplete="off" />
        </div>
        <div className="modal-button">
          <Button type="category" onClick={closeModal}>
            Đóng
          </Button>
          <Button type="primary" onClick={handleAddTour}>
            Thêm tour
          </Button>
        </div>
      </Modal>
    </>
  );
}

export default DialogAddTour;
