<template>
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-primary font-bold text-2xl">Create an account</h1>
            <p class="text-sm text-grey opacity-75 mt-3">Let's get to know you</p>
        </div>

        <form class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-1/4 mx-auto mt-10" @submit.prevent="submitForm">
            <div class="grid grid-cols-2 gap-5">
                <div>
                    <text-input placeholder="First name" type="text" required v-model="formData.firstName" />
                </div>
                <div>
                    <text-input placeholder="Last name" type="text" required v-model="formData.lastName" />
                </div>
            </div>
            <div class="mt-6">
                <text-input placeholder="Email Address" type="email" required v-model="formData.email" />
            </div>
            <div class="mt-6">
                <text-input placeholder="Phone Number" type="number" required v-model="formData.phoneNumber" />
            </div>
            <div class="grid grid-cols-2 gap-5 mt-6">
                <div>
                    <text-input placeholder="Password" type="password" required v-model="formData.password" />
                </div>
                <div>
                    <text-input placeholder="Confirm Password" type="password" required v-model="confirmPassword" />
                </div>
            </div>

            <div class="mt-10">
                <Button :loading="loading">
                    Continue
                </Button>
            </div>
        </form>

        <div class="text-center mt-8">
            <p class="text-grey text-sm">
                Already have an account?
                <router-link to="/login" class="underline text-red-secondary">Login here</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
import { registerUser } from "@/api/auth";
import errorHandler from "@/util/errorHandler";
export default {
    name: "Login",

    data() {
        return {
            formData: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                password: "",
            },
            loading: false,
            confirmPassword: "",
        };
    },

    components: {
        TextInput,
        Button,
    },

    methods: {
        submitForm() {
            this.loading = true;

            registerUser({
                email: this.formData.email,
                firstname: this.formData.firstName,
                lastname: this.formData.lastName,
                password: this.formData.password,
                phone_number: this.formData.phoneNumber || "",
                password_confirmation: this.confirmPassword,
                callback_url: "http://localhost:8081",
            })
                .then((res) => {
                    console.log(res);
                    this.loading = false;
                    // save to store for the next screen
                    // this.$store.dispatch("SET_USER", {
                    //     email: this.email,
                    //     username: this.username,
                    //     password: this.password,
                    // });

                    this.$cookies.set("user", {
                        email: this.formData.email,
                        first_name: this.formData.firstName,
                        last_name: this.formData.lastName,
                        password: this.formData.password,
                        phone_number: this.phoneNumber || "",
                    });

                    this.$wkToast("Account Created successfully");

                    setTimeout(() => {
                        this.$router.push("/verify-email");
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
