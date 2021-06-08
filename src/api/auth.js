import http from "@/util/http";
// import axios from "axios";

export const loginUser = async (data) => {
    return await http.post("/login", data);
};
