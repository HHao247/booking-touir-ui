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
      <ul className="list-group" style={{ textAlign: 'left', fontSize: '10px' }}>
        <li className="list-group-item" style={{ border: 'none' }}>
          <Link
            to="/dashboard/list-tour"
            className={`custom-link ${selectedLink === '/dashboard/list-tour' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/dashboard/list-tour')}
          >
            Danh sách tour
          </Link>
        </li>
        {/* <li className="list-group-item" style={{ border: 'none' }}>
          <Link
            to="/dashboard/cart"
            className={`custom-link ${selectedLink === '/dashboard/cart' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/dashboard/cart')}
          >            Danh sách tham gia
          </Link>
        </li> */}
        {/* <li className="list-group-item" style={{ border: 'none' }}>
          <Link
            to="/dashboard/users"
            className={`custom-link ${selectedLink === '/dashboard/users' ? 'active' : ''}`}
            onClick={() => handleLinkClick('/dashboard/users')}
          >
            Danh sách khách hàng
          </Link>
        </li> */}
       
      </ul>
    </div>
  );
}

export default FunctionsBar;
