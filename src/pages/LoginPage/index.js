import './login.css';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/shared/Input';
import Button from '../../components/shared/Button';
import { actLoginAsync } from '../../store/user/actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  function handleChangeValue(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(actLoginAsync(formData)).then(res => {
      if (res.ok) {
        switch (res.currentUser) {
          case 1:
            history.push('/dashboard');
            break;
          case 2:
            history.push('/');
            break;
          default:
            break;
        }
      } else {
        setMessage(res.error);
      }
    });
  }
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng nhập</h1>
            <div className="form-login-register">
              <p>{message}</p>
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input
                  label="Tên đăng nhập"
                  placeholder="Nhập tên đăng nhập ..."
                  autoComplete="off"
                  name="username"
                  onChange={handleChangeValue}
                />
                <Input
                  type="password"
                  label="Mật khẩu"
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  name="password"
                  onChange={handleChangeValue}
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">
                    Đăng nhập
                  </Button>
                  <Link to="/register">Đăng ký</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>
  );
}

export default LoginPage;
