import axios from "axios";
import userService from "./UserService";

const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    DELETE: 'DELETE',
};

const _axios = axios.create();

const configure = () => {
    _axios.interceptors.request.use((config) => {
        if (userService.isLoggedIn()) {
            const cb = () => {
                config.headers.Authorization = `Bearer ${userService.getToken()}`;
                return Promise.resolve(config);
            };
            return userService.updateToken(cb);
        }
    });
};

const getAxiosClient = () => _axios;

const HttpService = {
    HttpMethods,
    configure,
    getAxiosClient,
};

export default HttpService;
