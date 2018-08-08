export default {
  getToken(cookies: string) {
    cookies.split(';').filter((item) => {
      if (item.split('=')[0].trim() === 'token') {
        return item.split('=')[1];
      } else {
        return '';
      }
    });
  },

  tokenIsset(cookies: string) {
    let exists = false;
    cookies.split(';').forEach((item) => {
      if (item.split('=')[0].trim() === 'token' && item.split('=')[1].trim() !== '') {
        exists = true;
      }
    });
    return exists;
  },

  setToken (token: string) {
      console.log(token);
      document.cookie = 'token=' + token + ';Path=/;';
  },

  deleteToken(){
    document.cookie = 'token=;Path=/;Expired=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
};
