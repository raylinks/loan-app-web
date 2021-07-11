import http from "@/util/http";

export const submitApplication = async (formData) => {
    return await http.post("/api/loan-request", formData);
};
