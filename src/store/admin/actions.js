import adminService from '../../services/adminService';

export const ADD_TOUR = 'ADD_TOUR';

export function actAddTourAsync(data) {
  return async dispatch => {
    try {
      const response = await adminService.addTour(data);
      console.log(response.data);
      return {
        ok: true
      };
    } catch (error) {
      return {
        ok: false,
        error: 'Thêm thất bại'
      };
    }
  };
}
