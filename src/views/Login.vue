<template>
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-primary font-bold text-2xl">SIGN IN</h1>
            <p class="text-sm text-grey opacity-75 mt-3">Welcome back! Good to have you here</p>
        </div>

        <form class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-1/4 mx-auto mt-10" @submit.prevent="submitForm">
            <div>
                <text-input placeholder="Email address" type="email" required v-model="email" />
            </div>
            <div class="mt-6">
                <text-input placeholder="Password" type="password" required v-model="password" />
            </div>
            <div class="text-right my-3">
                <router-link to="/forgot-password" class="text-grey text-xs hover:text-primary duration-500"
                    >Forgot password?</router-link
                >
            </div>

            <div class="mt-6">
                <Button :loading="loading">
                    Continue
                </Button>
            </div>
        </form>

        <div class="text-center mt-8">
            <p class="text-grey text-sm">
                You don’t have an account yet?
                <router-link to="/register" class="underline text-red-secondary">Register now</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
import { loginUser } from "@/api/auth";
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
                    console.log(response);
                })
                .catch((error) => {
                    this.loading = false;
                    console.dir(error);
                    this.$wkToast(error.data.message, {
                        className: ["wk-alert"],
                    });
                });
        },
    },
};
</script>

<style></style>
