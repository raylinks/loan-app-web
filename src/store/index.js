import { createStore } from "vuex";
import createLogger from "vuex/dist/logger";
import auth from "./modules/auth";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
    },
    strict: debug,
    plugins: debug ? [createLogger()] : [],
});
