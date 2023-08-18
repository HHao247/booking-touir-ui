import './LoginPage/login.css'
import { Link,useHistory } from "react-router-dom"
import Input from '../components/shared/Input'
import Button from '../components/shared/Button'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { actLoginAsync, actRegisterAsync } from '../store/user/actions'

function RegisterPage() {

  const [formData, setFormData] = useState(
    {
      ho: '',
      ten: '',
      sdt: '',
      phai: '',
      ngaySinh: '',
      matKhau: '',
      maLoaiTaiKhoan:2,
    })

  const dataLogin = {
    username: formData.sdt,
    password: formData.matKhau
  }

  const dispatch = useDispatch();

  const history = useHistory();

  async function handleChangeValue(e) {
    await setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    console.log(dataLogin);
    dispatch(actRegisterAsync(formData)).then((response) => {
      if (response.ok) {
        dispatch(actLoginAsync(dataLogin)).then((response) => {
          if (response.ok) {
            history.push('/')
          } else {
            alert(response.error)
          }
        })
      } else {
        alert(response.error)
      }
    })
  }
  return (
    <main className="login">
      <div className="spacing" />
      <div className="tcl-container">
        <div className="tcl-row">
          <div className="tcl-col-12 tcl-col-sm-6 block-center">
            <h1 className="form-title text-center">Đăng ký</h1>
            <div className="form-login-register">
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Input 
                  label="Họ" 
                  placeholder="Nhập họ"
                  autoComplete="off"
                  name="ho"
                  onChange={handleChangeValue}
                />
                <Input 
                  label="Tên" 
                  placeholder="Nhập tên ..."
                  autoComplete="off"
                  name="ten"
                  onChange={handleChangeValue}
                />
                <Input 
                  label="Số điện thoại" 
                  placeholder="Nhập số điện thoại ..."
                  autoComplete="off"
                  name="sdt"
                  onChange={handleChangeValue}
                />
                <Input 
                  label="Giới tính" 
                  placeholder="Nhập giới tính ..."
                  autoComplete="off"
                  name="phai"
                  onChange={handleChangeValue}
                />
                <Input 
                  label="Ngày sinh" 
                  placeholder="Nhập ngày sinh ..."
                  autoComplete="off"
                  name="ngaySinh"
                  onChange={handleChangeValue}
                />
                <Input 
                  type="password" 
                  label="Mật khẩu" 
                  placeholder="Nhập mật khẩu của bạn ..."
                  autoComplete="new-password"
                  name="matKhau"
                  onChange={handleChangeValue}
                />
                <Input 
                  type="password" 
                  label="Xác nhận mật khẩu" 
                  placeholder="Xác nhận mật khẩu ..."
                  autoComplete="new-password"
                />

                <div className="d-flex tcl-jc-between tcl-ais-center">
                  <Button type="primary" size="large">Đăng ký</Button>
                  <Link to="/login">Bạn đã có tài khoản?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing" />
    </main>

  )
}

export default RegisterPage