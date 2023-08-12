import React from 'react';
import './custom-table.css';
function ListCartUserPage(props) {
  const handleDeleteCartTour = () => {
    window.confirm('Bạn có chắc chắn muốn xóa không?');
  };

  return (
    <div style={{ width: '1100px', margin: 'auto' }}>
      <from className="from-control">
        <h2 style={{ padding: '10px', textAlign: 'center', color: 'black' }}>Danh sách tour tham gia</h2>
        <div className="custom-table">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Họ và tên </th>
                <th scope="col">Tên tour</th>
                <th scope="col">Địa điểm đón</th>
                <th scope="col">Check in</th>
                <th scope="col">Ngày đi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Nguyễn Hoàng Hảo</td>
                <td>Tour tham quan Đà Lạt 3 ngày 2 đêm</td>
                <td>Tp Hồ Chí Minh</td>
                <td>Tp Đà Lạt</td>
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
                <td>Hoàng Hảo</td>
                <td>Tham quan Nha Trang </td>
                <td>Tp Hồ Chí Minh</td>
                <td>Nha Trang</td>
                <td>26/07/2023</td>
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
