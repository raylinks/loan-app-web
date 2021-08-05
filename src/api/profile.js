import http from "@/util/http";

export const verifyBvn = async (data) => {
    // return await http.post("/api/verify-bvn", data);
    return await http.post("/api/search-with-bvn", data);
};

export const updateProfile = async (data) => {
    return await http.post("/api/create-profile", data);
};

export const getAllBanks = async (data) => {
    return await http.get("/api/banks", data);
};

