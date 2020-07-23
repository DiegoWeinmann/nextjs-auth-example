import axios from 'axios';
import { Dispatch } from './types';

export const getToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  const token: string = JSON.parse(localStorage.getItem('token'));
  return token;
};

export const setToken = (token: string) => {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem('token', JSON.stringify(token));
};

export const getCurrentUser = async (
  dispatch: Dispatch,
  url: string,
  token: string
) => {
  try {
    const response = await axios.get(url, {
      headers: { authorization: token },
    });
    dispatch({
      type: 'GET_CURRENT_USER',
      user: response.data.user,
    });
  } catch (err) {
    console.log(err);
  }
};
