export default [
    { path: "/", component: () => import("@/views/Login"), meta: { layout: "authentication" } },
    { path: "/login", component: () => import("@/views/Login"), meta: { layout: "authentication" } },
    { path: "/register", component: () => import("@/views/Register"), meta: { layout: "authentication" } },
    { path: "/forgot-password", component: () => import("@/views/ForgotPassword"), meta: { layout: "authentication" } },
];
