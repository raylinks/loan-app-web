<template>
    <div>
        <h1 class="text-2xl font-semibold text-primary">Repayment</h1>

        <div class="mt-4 text-center w-1/2 mx-auto">
            <p class="text-primary font-bold text-4xl">You are currently owing N35200</p>
            <div class="mt-10 w-40 mx-auto">
                <Button>Pay Now</Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
export default {
    components: { Button },
};
</script>

<style></style>
