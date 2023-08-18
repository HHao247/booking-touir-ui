import { useSelector } from 'react-redux';
import './login.css';
import './style.css';
function ProfilePage() {
  const currentUser = useSelector(state => state.USER.currentUser);
  console.log("hao ", currentUser);
  return (
    <main className="login">
      <div className="tcl-container">
        <h1 className="form-title text-center" style={{ fontSize: '45px' }}>
          Profile
        </h1>
        <div style={{ display: 'flex' }}>
          <div className="form-login-register">
            <form autoComplete="off">
              <div className="form-control">
                <div className="style-colum">
                  <div className="column">
                    <div className="row">
                      <span>
                        <strong>Họ và tên:</strong> {currentUser.ho} {currentUser.ten}
                      </span>
                    </div>
                    <div className="row">
                      <span>
                        <strong>Ngày sinh:</strong> {currentUser.ngaySinh}
                      </span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="row">
                      <span>
                        <strong>Giới tính: </strong> {currentUser.phai}
                      </span>
                    </div>
                    <div className="row">
                      <span>
                        <strong>Số điện thoại:</strong> {currentUser.sdt}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default ProfilePage;
