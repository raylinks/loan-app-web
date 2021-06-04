<template>
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-white font-bold text-2xl">SIGN UP</h1>
            <p class="text-sm text-white opacity-75 mt-3">Lorem ipsum dolor si amet</p>
        </div>

        <form class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-1/4 mx-auto mt-10">
            <div class="grid grid-cols-2 gap-5">
                <div>
                    <text-input placeholder="First name" required />
                </div>
                <div>
                    <text-input placeholder="Last name" required />
                </div>
            </div>
            <div class="mt-6">
                <text-input placeholder="Email Address" type="email" required />
            </div>
            <div class="mt-6">
                <text-input placeholder="Date of Birth" type="date" required />
            </div>
            <div class="grid grid-cols-2 gap-5 mt-6">
                <div>
                    <text-input placeholder="Password" type="password" required />
                </div>
                <div>
                    <text-input placeholder="Confirm Password" type="password" required />
                </div>
            </div>

            <div class="mt-10">
                <Button>
                    Continue
                </Button>
            </div>
        </form>

        <div class="text-center mt-8">
            <p class="text-white text-sm">
                Already have an account?
                <router-link to="/login" class="underline text-dark-green">Login here</router-link>
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
