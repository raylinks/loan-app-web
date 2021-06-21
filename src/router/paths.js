export default [
    { path: "/", component: () => import("@/views/Dashboard"), meta: { layout: "default" } },
    { path: "/account", component: () => import("@/views/Account"), meta: { layout: "default" } },
    { path: "/referrals", component: () => import("@/views/Referrals"), meta: { layout: "default" } },
    { path: "/loan-application", component: () => import("@/views/LoanApplication"), meta: { layout: "default" } },
    { path: "/help", component: () => import("@/views/Help"), meta: { layout: "default" } },
    {
        path: "/personal-information",
        component: () => import("@/views/PersonalInformation"),
        meta: { layout: "default" },
    },
    { path: "/login", component: () => import("@/views/Login"), meta: { layout: "authentication" } },
    { path: "/register", component: () => import("@/views/Register"), meta: { layout: "authentication" } },
    { path: "/forgot-password", component: () => import("@/views/ForgotPassword"), meta: { layout: "authentication" } },
    { path: "/verify-email", component: () => import("@/views/VerifyEmail"), meta: { layout: "authentication" } },
    { path: "/reset-password", component: () => import("@/views/CreatePassword"), meta: { layout: "authentication" } },
];
