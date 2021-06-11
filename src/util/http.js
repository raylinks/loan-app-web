import axios from "axios";
import router from "@/router";

// This is the base URL where requests comes from
const http = axios.create({
    baseURL: "http://127.0.0.1:8000",
    proxyHeaders: false,
    credentials: false,
    timeout: 90000,
});

/*
 * The interceptor here ensures that we check for the token in local storage every time an http request is made
 */
http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const { status } = error.response;

        if (status === 401) {
            localStorage.clear();
            router.push("/login");
        } else {
            return Promise.reject(error.response);
        }
    }
);

export default http;
