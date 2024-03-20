import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
function ListUsersAdmin(props) {
  const handleDeleteUser = () => {
    window.confirm('Bạn có muốn xóa người dùng này không ?');
  };
  return (
    <div>
      <div>
        <form className="from-control">
          <h2 style={{ padding: '10px', textAlign: 'center', color: 'black' }}>Danh sách khách hàng</h2>
          <div className="custom-table">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Họ và tên</th>
                  <th scope="col">Ngày Sinh</th>
                  <th scope="col">Giới tính</th>
                  <th scope="col">Số điện thoại</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Hoàng Hảo</td>
                  <td>20/06/2000</td>
                  <td>Nam</td>
                  <td>0386978780</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                      onClick={handleDeleteUser}
                    >
                      <AiFillDelete size={30} /> Xóa
                    </button>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Nguyễn Hoàng Hảo</td>
                  <td>24/07/2001</td>
                  <td>Nam</td>
                  <td>0386978780</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      style={{ padding: '7px', fontSize: '15px', marginRight: '7px' }}
                      onClick={handleDeleteUser}
                    >
                      <AiFillDelete size={30} /> Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ListUsersAdmin;
