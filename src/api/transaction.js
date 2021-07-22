import http from "@/util/http";

export const listTransactions = async (formData) => {
    return await http.get("/api/transactions", formData);
};
