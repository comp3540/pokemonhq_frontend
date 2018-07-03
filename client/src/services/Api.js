import axios from 'axios';
export default () => {
  let token = '';
  document.cookie.split(';').filter((item) => {
    if (item.split('=')[0].trim() === 'token') {
      token = item.split('=')[1];
    } else {
      token = '';
    }
  });
  return axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
