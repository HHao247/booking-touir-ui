import Modal from 'react-modal';
import React from 'react';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import { useState } from 'react';
import { convertDateFormat } from '../../helpers';
import { useDispatch } from 'react-redux';
import { actAddTourAsync } from '../../store/admin/actions';

function DialogAddTour({ isModalOpen, closeModal }) {
  const dispatch = useDispatch();
  const customStyles = {
    content: {
      width: '700px',
      height: '800px',
      margin: 'auto'
    }
  };

  const [formData, setFormData] = useState({
    diemDen: '',
    diemDi: '',
    moTa: '',
    gia: '',
    maLoaiTour: '',
    trangThai: '',
    image: '',
    ngayBatDau: '',
  });
  async function handleChangeValue(e) {
    const { name, value } = e.target;
    if (name === 'ngayBatDau') {
      const convertedDate = convertDateFormat(value);
      await setFormData({
        ...formData,
        [name]: convertedDate,
      });
    } else {
      await setFormData({
        ...formData,
        [name]: value,
      });
    }
  }
  const handleAddTour = (e) => {
    e.preventDefault();
    dispatch(actAddTourAsync(formData).then((response)=>{
      if (response.ok) {
        alert('theem thanh cong')
      }else{
        alert('theem thaat bai')
      }
    }))
    console.log("add tpur",formData)
    console.log('thêm tour');
  };
  return (
    <>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles}>
        <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Thêm tour</h2>
        <div className="from-input">
          <Input label="Điểm đến" placeholder="Nhập điểm đến ..." autoComplete="off" onChange={handleChangeValue} name="diemDen" />
          <Input label="Điểm đi " placeholder="Nhập điểm đi  ..." autoComplete="off" onChange={handleChangeValue} name="diemDi" />
          <Input label="Mô tả" placeholder="Nhập mô tả ..." autoComplete="off" onChange={handleChangeValue} name="moTa" />
          <Input label="Giá" placeholder="Nhập giá ..." autoComplete="off" onChange={handleChangeValue} name="gia" />
          <Input label="Trạng thái" placeholder="Nhập trạng thái ..." autoComplete="off" onChange={handleChangeValue} name="trangThai" />
          <Input label="Image" placeholder="Nhập link image..." autoComplete="off" onChange={handleChangeValue} name="image" />
          <Input label="Ngày bắt đầu" placeholder="Nhập ngày bắt đầu ..." autoComplete="off" onChange={handleChangeValue} name="ngayBatDau" />
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
