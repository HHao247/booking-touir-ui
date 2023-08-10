import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import { IoIosAddCircleOutline } from 'react-icons/io';

function ListTour(props) {
  return (
    <div>
      <from className="from-control">
        <h2 style={{ padding: '10px', textAlign: 'center', color: 'black' }}>Danh sách tour</h2>
        <div className="custom-table">
          <button
            type="button"
            class="btn btn-primary"
            style={{
              padding: '7px',
              fontSize: '20px',
              marginRight: '10px',
              marginBottom: '10px',
              float: 'right',
              width: '150px'
            }}
          >
            <IoIosAddCircleOutline size={35} />
            Thêm
          </button>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Mã Tour</th>
                <th scope="col">Điểm đi</th>
                <th scope="col">Điểm đến</th>
                <th scope="col">Ngày bắt đầu</th>
                <th scope="col">Giá</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>TP Hồ Chí Minh</td>
                <td>Tp Đà Lạt</td>
                <td>25/07/2023</td>
                <td>2000000</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                  >
                    <AiFillDelete size={30} /> Xóa
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                  >
                    <BsFillPencilFill size={20} /> Sửa
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>TP Hồ Chí Minh</td>
                <td>Tp Nha Trang</td>
                <td>25/07/2023</td>
                <td>2000000</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                  >
                    <AiFillDelete size={30} /> Xóa
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                  >
                    <BsFillPencilFill size={25} /> Sửa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </from>
    </div>
  );
}

export default ListTour;
