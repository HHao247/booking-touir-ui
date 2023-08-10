import React from 'react';
import './custom-table.css';
function ListCartUserPage(props) {
  const handleDeleteCartTour = () => {
    window.confirm('Bạn có chắc chắn muốn xóa không?');
  };
  return (
    <div className="tcl-container">
      <from className="from-control">
        <h2 style={{ padding: '10px', textAlign: 'center', color: 'black' }}>Danh sách tour tham gia</h2>
        <div className="custom-table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Họ và tên </th>
                <th scope="col">Tên tour</th>
                <th scope="col">Ngày đi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Nguyễn Hoàng Hảo</td>
                <td>Tour tham quan Đà Lạt</td>
                <td>25/07/2023</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-danger"
                    style={{ padding: '7px' }}
                    onClick={handleDeleteCartTour}
                  >
                    Hủy đăng ký
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>
                  <button type="button" class="btn btn-outline-danger" style={{ padding: '7px' }}>
                    Hủy đăng ký
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

export default ListCartUserPage;
