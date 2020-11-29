export const authHeader = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.data.accessToken) {
      return user.data.accessToken;
    } else {
      return {};
    }
  }