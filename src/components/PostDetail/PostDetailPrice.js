import { Link } from 'react-router-dom';
import './card.css';
function PostDetailPrice() {
  return (
    <>
      <div className="card">
        <h1>Bảng giá</h1>
        <div className="card-body">
          <h3>Người lớn : 2000000</h3>
          <span>
            <h3>Trẻ em: </h3>20000
          </span>
          <Link
            href="/"
            className="btn btn-primary"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
          >
            Đặt ngay
          </Link>
        </div>
      </div>
    </>
  );
}

export default PostDetailPrice;
