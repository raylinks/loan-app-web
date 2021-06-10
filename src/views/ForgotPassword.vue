<template>
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-primary font-bold text-2xl">Reset Password</h1>
            <p class="text-sm text-grey opacity-75 mt-3">A link would be sent to your email to complete the process</p>
        </div>

        <form class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-1/4 mx-auto mt-10" @submit.prevent="submitForm">
            <div>
                <text-input placeholder="Email address" type="email" required v-model="email" />
            </div>

            <div class="mt-6">
                <Button>
                    Continue
                </Button>
            </div>
        </form>

        <div class="text-center mt-8">
            <p class="text-grey text-sm">
                Go back to login?
                <router-link to="/login" class="underline text-red-secondary">Click here</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
import { forgotPassword } from "@/api/auth";
export default {
    name: "ForgotPassword",

    data() {
        return {
            email: "",
            loading: false,
        };
    },

    components: {
        TextInput,
        Button,
    },

    methods: {
        submitForm() {

           // alert('here');
            this.loading = true;
            forgotPassword(this.email)
                .then((response) => {
                              console.log(response);
                    this.loading = false;
                    this.$wkToast(response.data.message || "Successful, please check your mail");
                })
                .catch((error) => {
                    this.loading = false;
                    this.$wkToast(
                        error.data.message || "Something went wrong. Do not fret, we are looking into it already",
                        {
                            className: ["wk-alert"],
                        }
                    );
                });
        },
    },
};
</script>

<style></style>
