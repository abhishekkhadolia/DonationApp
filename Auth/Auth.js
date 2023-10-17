import axios from 'axios';
import {baseUrl, getUser} from '../assets/Api';

const login = (email, password) => {
  return axios
    .post(baseUrl + getUser, {
      email,
      password,
    })
    .then(response => {
      return response.data;
    });
};
const registerUser = (fullName, email, password) => {
  return axios
    .post(baseUrl + getUser, {
      fullName,
      email,
      password,
    })
    .then(response => {
      return response.data;
    });
};
const AuthService = {
  login,
  registerUser,
};

export default AuthService;
