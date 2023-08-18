import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { actLogout } from '../../store/user/actions';
function HeaderMenus() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentUser = useSelector(state => state.USER.currentUser);
  const handleLogout = e => {
    e.preventDefault();
    let result = window.confirm('Bạn có chắc chắn muốn logout không?');
    if (result) {
      dispatch(actLogout());
      history.push('/login');
    }
  };
  return (
    <div className="tcl-col-6">
      {/* Nav */}
      <div className="header-nav">
        <ul className="header-nav__lists">
          <li>
            <Link to="/cart-user">Tour tham gia</Link>
          </li>
        </ul>
        <ul className="header-nav__lists">
          <li className="user">
            {currentUser && (
              <Link to="/login">
                {/* <i className="icons ion-person" /> {currentUser.ten} */}
                <div style={{ display: 'flex' }}>
                  <i className="icons ion-person" /> {currentUser.ten}
                </div>
              </Link>
            )}
            <ul>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <a href="/#" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </li>
          <li>
            {!currentUser && (
              <Link to="/register">
                <i className="icons ion-person" /> Dang ky
              </Link>
            )}
          </li>
          <li>
            {!currentUser && (
              <Link to="/login">
                <i className="icons ion-person" /> Dang nhap
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderMenus;
