<template>
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-primary font-bold text-2xl">Enter Otp</h1>
            <p class="text-sm text-grey opacity-75 mt-3 px-3">
                We have sent you an email containing a unique 6 digit code. Enter it to continue
            </p>
        </div>

        <form class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-1/4 mx-auto mt-10" @submit.prevent="submit">
            <div>
                <text-input placeholder="Confirmation Code" type="number" required v-model="token" />
            </div>

            <div class="mt-6">
                <Button :loading="loading">
                    Continue
                </Button>
            </div>
        </form>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
import { verifyToken } from "@/api/auth";
export default {
    name: "Login",

    data() {
        return {
            token: "",
            loading: false,
        };
    },

    components: {
        TextInput,
        Button,
    },

    methods: {
        submit() {
            this.loading = true;
            verifyToken(this.token)
                .then((response) => {
                    this.loading = false;
                    console.log(response);
                    this.$wkToast("Account has been verified successfully");

                    setTimeout(() => {
                        this.$router.push("/");
                    }, 1500);
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
