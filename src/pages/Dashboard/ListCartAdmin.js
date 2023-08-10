import React from 'react';
import { formatNumber } from '../../helpers';
function ListCardPage() {
  return (
    <div>
      <div>
        <from className="from-control">
          <h2 style={{ padding: '10px', textAlign: 'center', color: 'black' }}>Danh sách đơn hàng</h2>
          <div className="custom-table">
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
                  <td>{formatNumber(2000000)}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>TP Hồ Chí Minh</td>
                  <td>Tp Nha Trang</td>
                  <td>25/07/2023</td>
                  <td>2000000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </from>
      </div>
    </div>
  );
}

export default ListCardPage;
