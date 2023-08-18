import React, { useState } from 'react';
import Modal from 'react-modal';
import { formatDate, formatNumber } from '../../helpers';
import { useEffect } from 'react';
import { actGetListJoinAsync } from '../../store/post/actions';
import { useDispatch, useSelector } from 'react-redux';
import { TfiClose } from 'react-icons/tfi'
export default function DialogListJoin({ isListJoinOpen, closeListJoinModal, selectedTour, location }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const postListJoinTour = useSelector((state) => state.POST.postsListJoin);
  useEffect(() => {
    dispatch(actGetListJoinAsync(selectedTour)).then(() => {
      setLoading(true)
    })
  }, [selectedTour]);
  if (loading === false) {
    return (
      <></>
    )
  }
  const customStyles = {
    content: {
      width: '1100px',
      height: '500px',
      margin: 'auto'
    }
  };
  return (
    <>
      <Modal isOpen={isListJoinOpen} onRequestClose={closeListJoinModal} style={customStyles}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <span><TfiClose size={20} onClick={closeListJoinModal} color='black' /></span>
        </div>
        <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center' }}>
          Danh sách tham gia tour {location}
        </h2>
        <div className="custom-table" style={{ padding: '10px 25px' }}>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Họ và tên </th>
                <th scope="col">Ngày sinh </th>
                <th scope="col">Tên tour</th>
                <th scope="col">Ngày bắt đầu</th>
                <th scope="col">Giá</th>
              </tr>
            </thead>
            <tbody>
              {postListJoinTour.length > 0 ? (
                postListJoinTour.map((item, index) => (
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{item.taiKhoan.ho} {item.taiKhoan.ten}</td>
                    <td>{item.taiKhoan.ngaySinh}</td>
                    <td>Tour tham quan {item.tour.diemDen}</td>
                    <td>{formatDate(item.tour.ngayBatDau)}</td>
                    <td>{formatNumber(item.tour.gia)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Không có dữ liệu ...... </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </Modal>
    </>
  );
}
