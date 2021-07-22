<template>
    <div class="h-full">
        <div>
            <h1 class="text-2xl font-semibold text-primary">Loan</h1>
        </div>
        <div class="mt-6 mb-6 grid grid-cols-5 gap-12 h-full">
            <div class="slide_wrap col-span-6 border-r border-secondary h-full pr-6">
                <div class="flex items-center justify-between">
                    <h2 class="text-xl font-medium text-primary">Request</h2>
                    <div>
                        <p class="text-sm text-grey">Maximum loan amount: N{{ user.eligible_amount }}</p>
                    </div>
                </div>
                <div class="slidecontainer">
                    <input type="range" min="1" max="100" class="slider" id="myRange" v-model="amount">
                </div>

                <form class="mt-6" @submit.prevent="submit">
                    <div>
                        <text-input v-model="amount" :value="amount" placeholder="Enter amount you want to borrow" required />
                    </div>
                    <div>
                        <p class="text-xs text-primary opacity-50 mt-1 ml-1">Interest Rate: 1% daily</p>
                    </div>

                    <div v-if="ineligibleAmount">
                        <p class="text-sm mt-5 text-red-default">
                            You are not eligible to loan {{ amount }}, please enter a value less than
                            {{ user.eligible_amount }}
                        </p>
                    </div>

                    <div class="mt-10 w-48 mx-auto text-center">
                        <Button :disabled="ineligibleAmount" :loading="loading">Proceed</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../../components/Button.vue";
import TextInput from "../../components/TextInput.vue";
import { submitApplication } from "@/api/loan";
import errorHandler from "@/util/errorHandler";
export default {
    components: {
        TextInput,
        Button,
    },

    el: '.slide_wrap',

    data() {
        return {
            amount: 45,
            loading: false,
        };
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem("user")) || {};
        },

        ineligibleAmount() {
            return Number(this.amount) > Number(this.user.eligible_amount);
        },
    },

    methods: {
        submit() {
            this.loading = true;
            submitApplication({ amount: this.amount })
                .then(() => {
                    this.loading = false;
                    this.$wkToast("Your loan request is been processed");
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
