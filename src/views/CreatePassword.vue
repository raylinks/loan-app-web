<template>
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-primary font-bold text-2xl">Enter your new password</h1>
            <p class="text-sm text-grey opacity-75 mt-3 px-3">
                Create your new secure password here
            </p>
        </div>

        <form class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-1/4 mx-auto mt-10" @submit.prevent="submit">
            <div>
                <text-input placeholder="New Password" required v-model="password" />
            </div>

            <div class="mt-6">
                <text-input placeholder="Confirm Password" required v-model="confirmPassword" />
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
import { resetPassword } from "@/api/auth";
import errorHandler from "@/util/errorHandler";
export default {
    name: "CreatePassword",

    data() {
        return {
            password: "",
            confirmPassword: "",
            loading: false,
        };
    },

    components: {
        TextInput,
        Button,
    },

    created() {
        if (!this.$route.query.token) {
            this.$router.push("/login");
        }
    },

    methods: {
        submit() {
            const { password, confirmPassword } = this;
            if (password !== confirmPassword && (password || confirmPassword)) {
                this.$wkToast("Passwords do not match", {
                    className: ["wk-warn"],
                });

                return;
            }

            this.loading = true;
            resetPassword({ password, token: this.$route.query.token })
                .then((response) => {
                    this.loading = false;
                    console.log(response);
                    this.$wkToast("Password changed successfully, redirecting to login");
                    setTimeout(() => {
                        this.$router.push("/login");
                    }, 1500);
                })
                .catch((error) => {
                    this.loading = false;
                    console.dir(error);
                    errorHandler(error, true);
                });
        },
    },
};
</script>

<style></style>
