import axios from "axios";
import authHeader from "./auth-header";
import { config } from "../configs";

const API_URL = config.baseUrl;


const getUsers = () => {
    return axios.get(API_URL + "users", { headers: authHeader() });
};

const updateUser = (user) => {
    return axios.put(API_URL + "user", { headers: authHeader(),
    data: user});
};

const createUser = (user) => {
    return axios.post(API_URL + "user", { headers: authHeader(),
    data: user });
};

export default {
    getUsers,
    updateUser,
    createUser
};