import { Link } from 'react-router-dom';
function HeaderMenus() {
  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">
          <li>
            <Link href="/"> Tour Đặt</Link>
          </li>
        </ul>
        <ul className="header-nav__lists">
          <li className="user">
            <Link to="/login">
              <i className="icons ion-person" /> Tài khoản
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
