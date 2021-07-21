import http from "@/util/http";

export const outgoingTransaction = async () => {
    return await http.get("/api/outgoing/transactions");
};
