<template>
    <div class="mt-6 lg:w-9/12 xl:w-7/12">
        <div class="flex items-center justify-between">
            <h1 class="text-2xl font-semibold text-primary">Loan Application</h1>
            <div>
                <p class="text-sm text-grey">Maximum loan amount: N80,000</p>
            </div>
        </div>
        <div class="mt-6 ">
            <div>
                <text-input placeholder="Enter amount you want to borrow" />
            </div>
            <div>
                <p class="text-xs text-primary opacity-50 mt-1 ml-1">Interest Rate: 1% daily</p>
            </div>

            <div class="flex items-center justify-between pt-8 mt-8 border-t border-darksecondary">
                <p class="text-xl text-primary opacity-80">Total Repayment:</p>
                <p class="text-2xl text-primary font-semibold">N100,000</p>
            </div>

            <div class="mt-10 w-48 mx-auto text-center">
                <Button>Proceed</Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
export default {
    components: {
        TextInput,
        Button,
    },
};
</script>

<style></style>
