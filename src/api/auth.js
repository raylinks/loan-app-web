import http from "@/util/http";
import axios from "axios";

export const loginUser = async (data) => {
    return await http.post("/api/login", data);
};

export async function registerUser(user) {
    return await axios.post("https://credbolt-api.herokuapp.com/api/register/", user);
}

export const verifyToken = async (token) => {
    return await http.post("/api/verify-otp", { token });
};

export const forgotPassword = async (email) => {
    return await http.post("/api/forgot-password", { email });
};

export const resetPassword = async (data) => {
    return await http.post("/api/reset-password", data);
};
