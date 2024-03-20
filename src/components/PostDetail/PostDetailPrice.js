import './card.css';
import { formatDate, formatNumber } from '../../helpers';
import Button from '../shared/Button';
import { useState } from 'react';
import DialogPrice from './DialogPrice';
import { ToastContainer } from 'react-toastify';
function PostDetailPrice({data}) {
  const {gia,ngayBatDau}=data;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="card-price" style={{ padding: '10px' }}>
        <h1 style={{ fontSize: '35px', marginTop: '15px' }}>Bảng giá tham gia </h1>
        <div className="card-body-price">
          <p>
            <strong>Ngày đi :</strong> {formatDate(ngayBatDau)}
          </p>

          <p>
            <strong>Giá vé :</strong> {formatNumber(gia)}
          </p>
        </div>
        <div className="text-center">
          <Button type="primary" style={{ margin: '20px' }} size="large" loading={false} onClick={openModal}>
            Tham gia ngay
          </Button>
        </div>
      </div>
      <DialogPrice isModalOpen={isModalOpen} closeModal={closeModal} data={data}/>
      <ToastContainer />
    </>
  );
}

export default PostDetailPrice;
