import axios from "axios";
import { authHeader } from "./auth-header";
import { config } from "../configs";

const API_URL = config.baseUrl;


const getUsers = () => {
    return axios.get(API_URL + "users", {
        headers: {
            "authorization": authHeader()
        }
    });
};

const updateUser = (user) => {
    return axios.put(API_URL + `user/${user.id}`, { user }, {
        headers: {
            "authorization": authHeader()
        }

    });
};

const createUser = (user) => {
    return axios.post(API_URL + "user", { user }, {
        headers: {
            "authorization": authHeader()
        }

    });
};

export default {
    getUsers,
    updateUser,
    createUser
};