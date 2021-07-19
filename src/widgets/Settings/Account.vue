<template>
    <div>
        <div class="mt-4">
            <p class="text-primary text-lg font-semibold">Account Settings</p>

            <form class="relative" @submit.prevent="handleBvnVerify">
                <div class="mt-4">
                    <text-input
                        maxlength="11"
                        v-model="bvn"
                        required
                        placeholder="Enter your Bank Verification Number"
                    />
                </div>

                <!-- This button here will only show if bvn has not been verified or bvn is changed -->
                <div class="absolute top-0 right-0 w-24 ml-10">
                    <Button>Verify</Button>
                </div>
            </form>

            <div class="mt-10 border-t border-darksecondary">
                <div class="mt-6">
                    <bank-accounts />
                </div>
                <template v-if="enterAccountDetails">
                    <div class="grid gap-6 mt-8">
                        <div>
                            <select class="w-full bg-secondary h-12 rounded-lg px-4 text-grey">
                                <option>
                                    Select Bank Name
                                </option>
                                <option>
                                    Access Bank
                                </option>
                            </select>
                        </div>

                        <div>
                            <text-input placeholder="Enter Account Number" />
                            <!-- Show block below when account has been verified and name has been retireved from api -->
                            <p class="text-sm text-primary opacity-40 mt-4">OLAWALE AHMED JONATHAN</p>
                        </div>

                        <div class="mt-5 buttonWidth">
                            <Button>Save Account Details</Button>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../../components/Button.vue";
import TextInput from "../../components/TextInput.vue";
import BankAccounts from "../Account/BankAccounts.vue";
import { verifyBvn } from "@/api/profile";
import errorHandler from "@/util/errorHandler";
export default {
    data() {
        return {
            enterAccountDetails: true,
            loading: false,
            bvn: "",
        };
    },

    components: {
        TextInput,
        Button,
        BankAccounts,
    },

    methods: {
        handleBvnVerify() {
            if (this.bvn.length < 11) {
                this.loading = true;
                verifyBvn({ bvn: this.bvn })
                    .then((response) => {
                        console.log(response);
                        this.loading = false;
                    })
                    .catch((error) => {
                        this.loading = false;
                        errorHandler(error, true);
                    });
            } else {
                this.$wkToast("Please enter a valid bvn", {
                    className: ["wk-alert"],
                });
            }
        },
    },
};
</script>

<style>
.buttonWidth {
    max-width: 250px;
}
</style>
