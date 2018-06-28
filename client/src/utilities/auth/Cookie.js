export default {
  getToken (cookies) {
    cookies.split(';').filter((item) => {
      if (item.split('=')[0].trim() === 'token') {
        return item.split('=')[1];
      } else {
        return '';
      }
    });
  },

  tokenIsset (cookies) {
    let exists = false;
    cookies.split(';').forEach((item) => {
      if (item.split('=')[0].trim() === 'token') {
        exists = true;
      }
    });
    return exists;
  }
};
