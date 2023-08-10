import { Link } from 'react-router-dom';
function HeaderMenus() {
  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">
          <li>
            <Link to="/cart-user">Đơn hàng</Link>
          </li>
        </ul>
        <ul className="header-nav__lists">
          {/* <li className="user">
            <Link to="/login">
              <i className="icons ion-person" /> Tài khoản
            </Link>
          </li> */}
          <li className="user">
            <Link to="/login">
              {/* <i className="icons ion-person" /> {currentUser.name} */}
              <div style={{ display: 'flex' }}>
                <i className="icons ion-person" /> Đăng Nhập
              </div>
            </Link>

            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <a href="/#">Logout</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/register">
              <i className="icons ion-person" /> Dang ky
            </Link>
          </li>
          <li>
            <Link to="/login">
              <i className="icons ion-person" /> Dang nhap
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
