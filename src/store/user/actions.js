
import adminService from '../../services/adminService';
import userService from '../../services/userService';

export const ACT_LOGIN = 'ACT_LOGIN';
export const ACT_REGISTER = 'ACT_REGISTER';
export const ACT_LOGOUT = 'ACT_LOGOUT';
export const ACT_UPDATE_CURRENT_USER = "ACT_UPDATE_CURRENT_USER";

export function actUpdateCurrentUser(currentUser) {
  return {
    type: ACT_UPDATE_CURRENT_USER,
    payload: currentUser
  }
}

export function actLogin(accessToken, currentUser) {
  return {
    type: ACT_LOGIN,
    payload: {
        accessToken,
        currentUser,
    }
  }
}  
export function actLogout() {
  return {
    type: ACT_LOGOUT,
    payload: null,
  };
}

export function actLoginAsync(data) {
  return async (dispatch) => {
    try {
      const response = await userService.login(data);
      const accessToken = response.data.accessToken;
      const responseMe = await userService.fetchMe();
      const currentUser = responseMe.data;
      dispatch(actUpdateCurrentUser(currentUser));
      dispatch(actFetchMeAsync(accessToken));
      return {
        ok: true,
        currentUser: currentUser.loaiTaiKhoan.maLoaiTK
      }
    } catch (error) {
      return {
        ok: false,
        error: "Thông tin đăng nhập sai"
      }
    }
  }
}

export function actRegisterAsync(data) {

  return async (dispatch) => {
    try {
      const response = await userService.register(data);
      return ({
        ok: true,
        register: response.data.register
      })
    }
    catch (error) {
      return ({
        ok: false,
        // error: "Đăng ký thất bại "
      })
    }
  }
}

export function actFetchMeAsync(accessToken) {
  return async (dispatch) => {
    try {
      if (!accessToken) {
        accessToken = localStorage.getItem('ACCESS_TOKEN');
      } else {
        localStorage.setItem('ACCESS_TOKEN', accessToken);
      }
      const responseMe = await userService.fetchMe();
      const currentUser = responseMe.data;
      dispatch(actLogin(accessToken, currentUser));
    } catch (error) {
      dispatch(actLogout());
    }
  }
}
export function actPostsComment(data) {
  return async (dispatch) => {
    try {
      const response = await userService.postComment(data);
      return {
        ok: true
      };
    } catch (error) {
      return {
        ok: false,
        error: 'Phan hoi that bai'
      };
    }
  };
}
export function deleteJoin(sttThamGia) {
  return async (dispatch) => {
    try {
      await userService.deleteJoin(sttThamGia);
      return {
        ok: true
      };
    } catch (error) {
      return {
        ok: false,
        error: 'Xoa  that bai'
      };
    }
  }
}
export function deleteJTour(maTour) {
  return async (dispatch) => {
    try {
      await adminService.deleteTour(maTour)
      return {
        ok: true
      };
    } catch (error) {
      return {
        ok: false,
        error: 'Xoa  that bai'
      };
    }
  }
}

