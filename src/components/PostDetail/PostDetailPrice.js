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
      <div className="card-price">
        <h1>Bảng giá vé</h1>
        <div className="card-body-price">
          <p>
            <strong>Người lớn:</strong> {formatNumber(200000)}
          </p>
          <p>
            <strong>Trẻ em:</strong> {formatNumber(200000)}
          </p>
        </div>
        <div className="text-center">
          <Button type="primary" style={{ margin: '20px' }} size="large" loading={false} onClick={openModal}>
            Đặt ngay
          </Button>
        </div>
      </div>
      <DialogPrice isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default PostDetailPrice;
