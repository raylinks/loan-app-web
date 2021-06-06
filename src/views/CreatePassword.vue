<template>
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-white font-bold text-2xl">Enter your new password</h1>
            <p class="text-sm text-white opacity-75 mt-3 px-3">
                Create your new secure password here
            </p>
        </div>

        <form class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-1/4 mx-auto mt-10">
            <div>
                <text-input placeholder="New Password" required />
            </div>

            <div class="mt-6">
                <text-input placeholder="Confirm Password" required />
            </div>

            <div class="mt-6">
                <Button>
                    Continue
                </Button>
            </div>
        </form>
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
