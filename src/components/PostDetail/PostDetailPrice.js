import './card.css';
import { formatNumber } from '../../helpers';
import Button from '../shared/Button';
import { useState } from 'react';
import DialogPrice from './DialogPrice';

function PostDetailPrice() {
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
        <h1 style={{ fontSize: '35px', marginTop: '15px' }}>Bảng giá tham gia tour</h1>
        <div className="card-body-price">
          <p>
            <strong>Ngày đi :</strong> 15/07/2023
          </p>

          <p>
            <strong>Giá vé :</strong> {formatNumber(200000)}
          </p>
        </div>
        <div className="text-center">
          <Button type="primary" style={{ margin: '20px' }} size="large" loading={false} onClick={openModal}>
            Tham gia ngay
          </Button>
        </div>
      </div>
      <DialogPrice isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default PostDetailPrice;
