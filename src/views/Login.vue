<template>
    <div class="wd_contact_wrapper wd-fixer">
        <!-- <div class="wd_overlay"></div> -->
        <div class="wd_form">
            <div class="wd_layer">
                <div class="text-center">
                    <h1 class="text-primary font-bold text-2xl">SIGN IN</h1>
                    <p class="text-sm text-black mt-3">Welcome back! Good to have you here</p>
                </div>

                <form class="w-11/12  mx-auto mt-10" @submit.prevent="submitForm">
                    <div>
                        <text-input placeholder="Email address" type="email" required v-model="email" />
                    </div>
                    <div class="mt-6">
                        <text-input placeholder="Password" type="password" required v-model="password" />
                    </div>
                    <div class="text-right my-3">
                        <router-link to="/forgot-password" class="text-black text-xs">Forgot password?</router-link>
                    </div>

                    <div class="mt-6">
                        <Button :loading="loading">
                            Continue
                        </Button>
                    </div>
                </form>

                <div class="text-center mt-8">
                    <p class="text-black text-sm">
                        You don’t have an account yet?
                        <router-link to="/register" class="underline text-red-secondary">Register now</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
import { loginUser } from "@/api/auth";
import errorHandler from "@/util/errorHandler";
export default {
    name: "Login",

    data() {
        return {
            email: "",
            password: "",
            loading: false,
        };
    },

    components: {
        TextInput,
        Button,
    },

    methods: {
        submitForm() {
            this.loading = true;
            const { email, password } = this;

            loginUser({ email, password })
                .then((response) => {
                    this.loading = false;
                    const res = response.data.data
                    console.log(response);
                    localStorage.setItem("user", JSON.stringify(res.user));
                    localStorage.setItem("token", res.token);
                    this.$wkToast("Logged in successfully");

                    setTimeout(() => {
                        this.$router.push("/");
                    }, 1500);
                })
                .catch((error) => {
                    this.loading = false;
                    errorHandler(error, true);
                });
        },
    },
};
</script>

<style></style>
