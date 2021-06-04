import { createApp } from "vue";

import Default from "@/layouts/Default";
import Authentication from "@/layouts/Authentication";

import App from "./App.vue";
import "@/assets/css/tailwind.css";
import "@/assets/css/font.css";
import "@/assets/css/global.css";
import router from "./router";

const app = createApp(App);

app.component("default-layout", Default);
app.component("authentication-layout", Authentication);

app.use(router);

app.mount("#app");
