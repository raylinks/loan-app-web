export default [
    { path: "/", component: () => import("@/views/Login"), meta: { layout: "authentication" } },
    { path: "/login", component: () => import("@/views/Login"), meta: { layout: "authentication" } },
    { path: "/register", component: () => import("@/views/Register"), meta: { layout: "authentication" } },
    { path: "/forgot-password", component: () => import("@/views/ForgotPassword"), meta: { layout: "authentication" } },
    { path: "/verify-email", component: () => import("@/views/VerifyEmail"), meta: { layout: "authentication" } },
    { path: "/reset-password", component: () => import("@/views/CreatePassword"), meta: { layout: "authentication" } },
];
