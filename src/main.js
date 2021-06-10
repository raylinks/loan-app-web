import { createApp } from "vue";
import Default from "@/layouts/Default";
import Authentication from "@/layouts/Authentication";
import VueCookies from "vue3-cookies";
import Toast from "vue3-toast-single";

import App from "./App.vue";
import store from "./store";
import router from "./router";

import "@/assets/css/tailwind.css";
import "@/assets/css/font.css";
import "@/assets/css/global.css";
import "vue3-toast-single/dist/toast.css";

const app = createApp(App);

app.component("default-layout", Default);
app.component("authentication-layout", Authentication);

app.use(VueCookies, {
    expireTimes: "30d",
    path: "/",
    domain: "",
    secure: true,
    sameSite: "None",
});

app.use(Toast, {
    verticalPosition: "top",
    horizontalPosition: "right",
    transition: "slide-right",
    duration: 5000,
    closeable: true,
    className: ["toast"],
});

app.use(router);
app.use(store);

export default app.mount("#app");
