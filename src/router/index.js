import { createRouter, createWebHistory } from "vue-router";
import routes from "./paths";

const router = createRouter({
    mode: "history",
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, _, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.

        if (localStorage.getItem("token") === null) {
            next({ name: "Login" });
        } else {
            next();
        }
    } else {
        next();
    }
    next();
});

export default router;
