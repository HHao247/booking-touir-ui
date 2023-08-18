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
import DialogEditTour from './DialogEditTour';
import DialogListJoin from './DialogListJoin';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteJTour } from '../../store/user/actions';
function ListTour() {
  const dispatch = useDispatch();
  const postsTour = useSelector(state => state.POST.postsTour);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isListJoinOpen, setIsListJoinOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(null);
  const [location, setLocation] = useState(null);
  const [shouldRender, setShouldRender] = useState(false);


  useEffect(() => {
    dispatch(actFetchTourAsync());
    setShouldRender(false)
  }, [shouldRender]);

  const openListJoinModal = async (maTour, diemDen) => {
    await setLocation(diemDen)
    await setSelectedTour(maTour);
    setIsListJoinOpen(true)
  }

  const closeListJoinModal = () => {
    setIsListJoinOpen(false)
  }
  const openEditModal = async (maTour) => {
    await setSelectedTour(maTour);
    setIsEditModalOpen(true);
  }
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  }
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleDelete = (maTour) => {
    const result = window.confirm('Bạn có chắc chắn muốn xoa không?');
    if (result) {
      dispatch(deleteJTour(maTour)).then((response)=>{
        if (response.ok) {
          toast.success('Xóa tour thành công!', {
            position: toast.POSITION.TOP_RIGHT, 
            autoClose: 3000 
          });
          setShouldRender(true);
        } else {
          toast.error('Xóa tour thất bại!', {
            position: toast.POSITION.TOP_RIGHT, 
            autoClose: 5000 
          });
        }
      })
    }
  }

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
                        onClick={()=>handleDelete(item.maTour)}
                      >
                        <AiFillDelete size={30}  /> Xóa
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                        onClick={() => openEditModal(item.maTour)}
                      >
                        <BsFillPencilFill size={20} /> Sửa
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                        onClick={() => openListJoinModal(item.maTour, item.diemDen)}
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
      {isModalOpen && (<DialogAddTour isModalOpen={isModalOpen} closeModal={closeModal} setShouldRender={setShouldRender} />)}
      {isEditModalOpen && (<DialogEditTour isEditModalOpen={isEditModalOpen}
        setShouldRender={setShouldRender} closeEditModal={closeEditModal}
        selectedTour={selectedTour} />)}
      {isListJoinOpen && (<DialogListJoin isListJoinOpen={isListJoinOpen} selectedTour={selectedTour} location={location} closeListJoinModal={closeListJoinModal} />)}
      <ToastContainer />
    </>
  );
}

export default ListTour;
