
import axiosInstance from '@/utils/axiosInstance';


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const logout = () => ({
  type: LOGOUT,
});


export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.get(
        `https://jsonplaceholder.typicode.com/users?email=${email}`
      );
      const users = response.data;

      if (users.length > 0 && users[0].email === email) {
        dispatch(loginSuccess(users[0]));
      } else {
        dispatch(loginFailure('Invalid email or password'));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
};