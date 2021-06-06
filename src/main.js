import { createApp } from "vue";
import Default from "@/layouts/Default";
import Authentication from "@/layouts/Authentication";
import VueCookies from "vue3-cookies";

import App from "./App.vue";

import store from "./store";
import "@/assets/css/tailwind.css";
import "@/assets/css/font.css";
import "@/assets/css/global.css";
import router from "./router";

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

app.use(router);
app.use(store);

app.mount("#app");

