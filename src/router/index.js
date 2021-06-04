import { createRouter, createWebHistory } from "vue-router";
import routes from "./paths";

const router = createRouter({
    mode: "history",
    history: createWebHistory(),
    routes,
});

export default router;
