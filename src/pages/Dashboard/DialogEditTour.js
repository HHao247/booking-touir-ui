import Modal from 'react-modal';
import React, { useEffect } from 'react';
import Button from '../../components/shared/Button';
import Input from '../../components/shared/Input';
import { useState } from 'react';
import { convertDateFormat } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { actAddTourAsync, actGetPostDetailAsync } from '../../store/post/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function DialogEditTour({ isEditModalOpen, closeEditModal, selectedTour, setShouldRender }) {
  const dispatch = useDispatch();
  const postDetail = useSelector(state => state.POST.postDetail);
  const [isEditing, setIsEditing] = useState(false);
  const customStyles = {
    content: {
      width: '700px',
      height: '800px',
      margin: 'auto'
    }
  };
  useEffect(() => {
    dispatch(actGetPostDetailAsync(selectedTour));
    setFormData(prevFormData => ({
      ...prevFormData,
      maTour: selectedTour
    }));
  }, [selectedTour]);

  const [formData, setFormData] = useState({
    maTour: selectedTour,
    diemDen: '',
    diemDi: '',
    moTa: '',
    gia: '',
    maLoaiTour: '',
    trangThai: '',
    image: '',
    ngayBatDau: ''
  });
  async function handleChangeValue(e) {
    const { name, value } = e.target;
    if (name === 'ngayBatDau') {
      const convertedDate = convertDateFormat(value);
      await setFormData({
        ...formData,
        [name]: convertedDate
      });
    } else {
      await setFormData({
        ...formData,
        [name]: value
      });
    }
  }
  useEffect(() => {
    if (postDetail) {
      setFormData({
        maTour: selectedTour,
        diemDen: postDetail.diemDen || '',
        diemDi: postDetail.diemDi || '',
        moTa: postDetail.moTa || '',
        gia: postDetail.gia || '',
        maLoaiTour: postDetail.loaiTour ? postDetail.loaiTour.maLoaiTour : '',
        trangThai: postDetail.trangThai || '',
        image: postDetail.image || '',
        ngayBatDau: postDetail.ngayBatDau || ''
      });
    }
  }, [postDetail]);
  const handleEditTour = e => {
    e.preventDefault();
    setIsEditing(true);
    dispatch(actAddTourAsync(formData)).then(response => {
      if (response.ok) {
        closeEditModal();
        toast.success('Sửa sản phẩm thành công!', {
          position: toast.POSITION.TOP_RIGHT, 
          autoClose: 5000 
        });
        setShouldRender(true);
      } else {
        toast.error('Sửa sản phẩm thất bại!', {
            position: toast.POSITION.TOP_RIGHT, 
            autoClose: 5000 
          });
      }
      setIsEditing(false);
    });
  };
  return (
    <>
      <Modal isOpen={isEditModalOpen && !isEditing} onRequestClose={closeEditModal} style={customStyles}>
        <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>Thêm tour</h2>
        <div className="from-input">
          <Input
            label="Điểm đến"
            placeholder="Nhập điểm đến ..."
            autoComplete="off"
            onChange={handleChangeValue}
            name="diemDen"
            value={formData.diemDen}
          />
          <Input
            label="Điểm đi "
            placeholder="Nhập điểm đi  ..."
            autoComplete="off"
            onChange={handleChangeValue}
            name="diemDi"
            value={formData.diemDi}
          />
          <Input
            label="Mô tả"
            placeholder="Nhập mô tả ..."
            autoComplete="off"
            onChange={handleChangeValue}
            name="moTa"
            value={formData.moTa}
          />
          <Input
            label="Giá"
            placeholder="Nhập giá ..."
            autoComplete="off"
            onChange={handleChangeValue}
            name="gia"
            value={formData.gia}
          />
          <Input
            label="Trạng thái"
            placeholder="Nhập trạng thái ..."
            autoComplete="off"
            onChange={handleChangeValue}
            name="trangThai"
            value={formData.trangThai}
          />
          <Input
            label="Image"
            placeholder="Nhập link image..."
            autoComplete="off"
            onChange={handleChangeValue}
            name="image"
            value={formData.image}
          />
          <Input
            label="Ngày bắt đầu"
            placeholder="Nhập ngày bắt đầu ..."
            autoComplete="off"
            onChange={handleChangeValue}
            name="ngayBatDau"
            value={formData.ngayBatDau}
          />
          <Input
            label="Mã loại tour"
            placeholder="Nhập mã loại tour ..."
            autoComplete="off"
            onChange={handleChangeValue}
            name="maLoaiTour"
            value={formData.maLoaiTour}
          />
        </div>
        <div className="modal-button">
          <Button type="default" onClick={closeEditModal}>
            Đóng
          </Button>
          <Button type="primary" onClick={handleEditTour}>
            Sửa tour
          </Button>
        </div>
      </Modal>
    </>
  );
}
