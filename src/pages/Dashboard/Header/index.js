import { Link } from 'react-router-dom';
import '../css/custom-header.css';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { actLogout } from '../../../store/user/actions';
function HeaderAdmin() {
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
    <nav className="navbar navbar-light bg-red">
      <div className="container-fluid">
        <div className="mr-auto"></div>
        <ul className="header-nav__lists">
          <li className="user">
            <Link to="/login">
              <div className="username-container">
                <i className="icons ion-person" />
                <span className="username">{currentUser?.ten ?? 'Hoàng Hảo'}</span>
              </div>
            </Link>
            <ul>
              <li>
                <a href="/login" onClick={handleLogout}>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderAdmin;
