import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUserCircle } from 'react-icons/bi';
import './css/custom-link.css';
function FunctionsBar(props) {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = link => {
    setSelectedLink(link);
  };
  return (
    <div>
      <h1 style={{ padding: '10px', color: 'black' }}>
        <BiUserCircle size={45} />
        Trang Admin
      </h1>
      <ul className="list-group" style={{ marginLeft: '20px', textAlign: 'left', fontSize: '20px' }}>
        <li className="list-group-item" style={{ border: 'none' }}>
          <Link
            to="/dashboard/list-tour"
            className={`custom-link ${selectedLink === '/dashboard/list-tour' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/dashboard/list-tour')}
          >
            Quản lí danh sách tour
          </Link>
        </li>
        <li className="list-group-item" style={{ border: 'none' }}>
          <Link
            to="/dashboard/cart"
            className={`custom-link ${selectedLink === '/dashboard/cart' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/dashboard/cart')}
          >
            Danh sách đơn hàng
          </Link>
        </li>
        <li className="list-group-item" style={{ border: 'none' }}>
          <Link
            to="/dashboard/users"
            className={`custom-link ${selectedLink === '/dashboard/users' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/dashboard/users')}
          >
            Danh sách khách hàng
          </Link>
        </li>
        <li className="list-group-item" style={{ border: 'none' }}>
          <Link
            to="/dashboard/content"
            className={`custom-link ${selectedLink === '/dashboard/content' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/dashboard/content')}
          >
            Header1
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default FunctionsBar;
