import './login.css';
import './style.css';
function ProfilePage() {
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
                        <strong>Họ và tên:</strong> Nguyễn Hoàng Hảo
                      </span>
                    </div>
                    <div className="row">
                      <span>
                        <strong>Ngày sinh:</strong> 24/07/2001
                      </span>
                    </div>
                  </div>
                  <div className="column">
                    <div className="row">
                      <span>
                        <strong>Giới tính: </strong> Nam
                      </span>
                    </div>
                    <div className="row">
                      <span>
                        <strong>Số điện thoại:</strong> 0386978780
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
