<template>
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-white font-bold text-2xl">Reset Password</h1>
            <p class="text-sm text-white opacity-75 mt-3">A link would be sent to your email to complete the process</p>
        </div>

        <form class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-1/4 mx-auto mt-10">
            <div>
                <text-input placeholder="Phone number or email" required />
            </div>

            <div class="mt-6">
                <Button>
                    Continue
                </Button>
            </div>
        </form>

        <div class="text-center mt-8">
            <p class="text-white text-sm">
                Go back to login?
                <router-link to="/login" class="underline text-dark-green">Click here</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
export default {
    name: "Login",

    components: {
        TextInput,
        Button,
    },
};
</script>

<style></style>
