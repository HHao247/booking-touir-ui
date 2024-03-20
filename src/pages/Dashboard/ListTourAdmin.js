import React, { useState } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { RiFileList2Fill } from 'react-icons/ri';
import { IoIosAddCircleOutline } from 'react-icons/io';
import DialogAddTour from './DialogAddTour';
import { formatDate, formatNumber } from '../../helpers';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actFetchTourAsync } from '../../store/post/actions';

function ListTour() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actFetchTourAsync());
  }, []);
  const postsTour = useSelector(state => state.POST.postsTour);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div>
        <form className="from-control">
          <h2 style={{ padding: '10px', textAlign: 'center', color: 'black' }}>Danh sách tour</h2>
          <div className="custom-table" style={{ padding: '10px 25px' }}>
            <button
              type="button"
              className="btn btn-primary"
              style={{
                padding: '7px',
                fontSize: '20px',
                marginRight: '10px',
                marginBottom: '10px',
                float: 'right',
                width: '150px'
              }}
              onClick={openModal}
            >
              <IoIosAddCircleOutline size={35} />
              Thêm
            </button>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">STT</th>

                  <th scope="col">Tên Tour</th>
                  <th scope="col">Điểm đến</th>
                  <th scope="col">Ngày bắt đầu</th>
                  <th scope="col">Giá</th>
                </tr>
              </thead>
              <tbody>
                {postsTour.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>Tour tham quan {item.diemDen}</td>
                    <td>{item.diemDen}</td>
                    <td>{formatDate(item.ngayBatDau)}</td>
                    <td>{formatNumber(item.gia)}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                      >
                        <AiFillDelete size={30} /> Xóa
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                      >
                        <BsFillPencilFill size={20} /> Sửa
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                      >
                        <RiFileList2Fill size={20} /> Danh sách
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </form>
      </div>
      <DialogAddTour isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

export default ListTour;
