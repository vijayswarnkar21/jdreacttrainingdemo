import axios from "axios";
import { config } from "../configs";

const API_URL = config.baseUrl;;

const authenticate = (username, password) => {
    return axios
      .post(API_URL + "auth/signin", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
  
        return response.data;
      });
  };
  
  const logout = () => {
    localStorage.removeItem("user");
  };


  export default {
    authenticate,
    logout,
  };