import http from "@/util/http";

export const verifyBvn = async (data) => {
    return await http.post("/api/verify-bvn", data);
};

export const updateProfile = async (data) => {
    return await http.post("/api/create-profile", data);
};
