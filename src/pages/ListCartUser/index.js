import React from 'react';
import './custom-table.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actFetchListJoinMeAsync } from '../../store/post/actions';
import { formatDate, formatNumber } from '../../helpers';
import { deleteJoin } from '../../store/user/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
function ListCartUserPage() {
  const dispatch = useDispatch();
  const [reload,setReload]= useState(false);
  const postsListJoinMe = useSelector((state) => state.POST.postsListJoinMe);
  useEffect(() => {
    dispatch(actFetchListJoinMeAsync())
  }, [reload]);
  const handleDeleteCartTour = (sttThamGia) => {
    const confirm = window.confirm('Bạn có chắc chắn muốn rời không?');
    if (confirm) {
      dispatch(deleteJoin(sttThamGia)).then((response)=>{
        if (response.ok) {
          toast.success('Rời tour thành công!', {
            position: toast.POSITION.TOP_RIGHT, 
            autoClose: 3000 
          });
          setReload(true);
        } else {
          toast.error('Rời tour thất bại!', {
            position: toast.POSITION.TOP_RIGHT, 
            autoClose: 5000 
          });
        }
      })
    }
    setReload(false);
  };

  return (
    <div style={{ width: '1100px', margin: 'auto' }}>
      <form className="from-control">
        <h2 style={{ padding: '10px', textAlign: 'center', color: 'black' }}>Danh sách tour tham gia</h2>
        <div className="custom-table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên tour</th>
                <th scope="col">Ngày đăng kí</th>
                <th scope="col">Địa điểm đón</th>
                <th scope="col">Ngày đi</th>
                <th scope="col">Giá</th>
              </tr>
            </thead>
            <tbody>
              {
                postsListJoinMe ? (
                  postsListJoinMe.map((item, index) => (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td style={{textAlign:'left'}}>Tour tham quan {item.tour.diemDen}</td>
                      <td>{formatDate(item.checkin)}</td>
                      <td style={{textAlign:'left'}}>{item.viTri}</td>
                      <td>{formatDate(item.tour.ngayBatDau)}</td>
                      <td>{formatNumber(item.tour.gia)}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          style={{ padding: '7px' }}
                          onClick={() => handleDeleteCartTour(item.sttThamGia)}
                        >
                          Hủy đăng ký
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (<tr>
                  <td colSpan="6">Không có dữ liệu ...... </td>
                </tr>)
              }

            </tbody>
          </table>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default ListCartUserPage;
