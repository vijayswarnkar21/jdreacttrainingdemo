     // return the token from the session storage
  export const getToken = () => {
    return localStorage.getItem('user') || null;
  }

  