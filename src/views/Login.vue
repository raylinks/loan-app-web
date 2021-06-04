<template>
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-white font-bold text-2xl">SIGN IN</h1>
            <p class="text-sm text-white opacity-75 mt-3">Welcome back! Good to have you here</p>
        </div>

        <form class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-1/4 mx-auto mt-10">
            <div>
                <text-input placeholder="Phone number or email" required />
            </div>
            <div class="mt-6">
                <text-input placeholder="Password" type="password" required />
            </div>
            <div class="text-right my-3">
                <router-link to="/forgot-password" class="text-grey text-xs hover:text-white"
                    >Forgot password?</router-link
                >
            </div>

            <div class="mt-6">
                <Button>
                    Continue
                </Button>
            </div>
        </form>

        <div class="text-center mt-8">
            <p class="text-white text-sm">
                You don’t have an account yet?
                <router-link to="/register" class="underline text-dark-green">Register now</router-link>
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
