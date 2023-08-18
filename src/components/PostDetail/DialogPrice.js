import React, { useState } from 'react';
import Modal from 'react-modal';
import Button from '../shared/Button';
import { formatDateComment, formatNumber } from '../../helpers';
import Input from '../shared/Input';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { actPostJoinTour } from '../../store/post/actions';
function DialogPrice({ isModalOpen, closeModal, data }) {
  const customStyles = {
    content: {
      width: '600px',
      height: '500px',
      margin: 'auto'
    }
  };
  const { gia, maTour } = data;
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    maTour: maTour,
    checkin: formatDateComment(),
    ghiChu: '',
    diaDiemDon: '',
    viTri: ''
  });

  function handleChangeValue(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const handleBooking = (e) => {
    e.preventDefault();
    setIsEditing(true);
    console.log(formData);
    dispatch(actPostJoinTour(formData)).then((response) => {
      if (response.ok) {
        toast.success('Tham gia thành công!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000,
        });
        closeModal();
      } else {
        toast.error('Tham gia thất bại!', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 5000
        });
      }
      setIsEditing(false)
    })


  };
  return (
    <Modal isOpen={isModalOpen && !isEditing} onRequestClose={closeModal} style={customStyles}>
      <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Tham gia tour </h2>
      <Input label="Điểm đón" placeholder="Nhập điểm đón ..." autoComplete="off" name="diaDiemDon" onChange={handleChangeValue} />
      <Input label="Ghi chú" placeholder="Nhập ghi chú ..." autoComplete="off" name="ghiChu" onChange={handleChangeValue} />
      <Input label="Vị trí" placeholder="Nhập vị trí ..." autoComplete="off" name="viTri" onChange={handleChangeValue} />
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
