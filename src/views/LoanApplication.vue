<template>
    <div class="pb-16">
        <h1 class="text-2xl font-semibold text-primary">Loan Application</h1>

        <div class="mt-6 lg:w-9/12 xl:w-7/12">
            <div class="grid md:grid-cols-2 gap-6">
                <div>
                    <div>
                        <text-input placeholder="Please Select Title" />
                    </div>
                </div>
                <div class="hidden md:bloc"></div>
                <div>
                    <div>
                        <text-input placeholder="Enter Your First Name" />
                    </div>
                </div>
                <div>
                    <div>
                        <text-input placeholder="Enter Your Last Name" />
                    </div>
                </div>
                <div>
                    <div>
                        <text-input placeholder="Enter Your Phone Number" />
                    </div>
                </div>
                <div>
                    <div>
                        <text-input placeholder="Enter Your Email Address" />
                    </div>
                </div>
            </div>

            <div class="flex mt-6">
                <div>
                    <p class="text-grey text-sm">Marital status:</p>
                </div>

                <div class="ml-3 flex items-center">
                    <input type="radio" />
                    <label class="text-grey text-sm ml-1">Single </label>
                </div>
                <div class="ml-3 flex items-center">
                    <input type="radio" />
                    <label class="text-grey text-sm ml-1">Married </label>
                </div>
                <div class="ml-3 flex items-center">
                    <input type="radio" />
                    <label class="text-grey text-sm ml-1">Other </label>
                </div>
            </div>

            <div class="mt-6">
                <text-input placeholder="Enter Your Address (e.g. state, city, street etc)" />
            </div>

            <div class="mt-6">
                <p class="text-grey text-sm capitalize">How long have you lived in your given address?</p>
                <div class="mt-4 flex flex-wrap items-center">
                    <div class="ml-3 mt-2 flex items-center">
                        <input type="radio" />
                        <label class="text-grey text-sm ml-1">0-1 year </label>
                    </div>
                    <div class="ml-3 mt-2 flex items-center">
                        <input type="radio" />
                        <label class="text-grey text-sm ml-1">1-2 years </label>
                    </div>
                    <div class="ml-3 mt-2 flex items-center">
                        <input type="radio" />
                        <label class="text-grey text-sm ml-1">2-3 years </label>
                    </div>
                    <div class="ml-3 mt-2 flex items-center">
                        <input type="radio" />
                        <label class="text-grey text-sm ml-1">4-5 years </label>
                    </div>
                    <div class="ml-3 mt-2 flex items-center">
                        <input type="radio" />
                        <label class="text-grey text-sm ml-1">5+ years </label>
                    </div>
                </div>
            </div>

            <div class="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                    <text-input placeholder="Enter Your Current Employment" />
                </div>
                <div>
                    <text-input placeholder="Enter Your Occupation" />
                </div>
            </div>

            <div class="mt-6">
                <p class="text-grey text-sm capitalize">years of Employment</p>
                <div class="mt-4 flex flex-wrap items-center">
                    <div class="ml-3 mt-2 flex items-center">
                        <input type="radio" />
                        <label class="text-grey text-sm ml-1">0-1 year </label>
                    </div>
                    <div class="ml-3 mt-2 flex items-center">
                        <input type="radio" />
                        <label class="text-grey text-sm ml-1">1-2 years </label>
                    </div>
                    <div class="ml-3 mt-2 flex items-center">
                        <input type="radio" />
                        <label class="text-grey text-sm ml-1">2-3 years </label>
                    </div>
                    <div class="ml-3 mt-2 flex items-center">
                        <input type="radio" />
                        <label class="text-grey text-sm ml-1">4-5 years </label>
                    </div>
                    <div class="ml-3 mt-2 flex items-center">
                        <input type="radio" />
                        <label class="text-grey text-sm ml-1">5+ years </label>
                    </div>
                </div>
            </div>

            <div class="mt-6 grid md:grid-cols-2 gap-6">
                <div>
                    <text-input placeholder="Enter Your Monthly income" />
                </div>
                <div>
                    <text-input placeholder="Enter Down payment amount" />
                </div>
            </div>

            <div class="mt-6 flex items-center">
                <div>
                    <input type="checkbox" class="border border-grey rounded bg-grey" />
                </div>

                <div class="ml-3">
                    <p class="text-grey text-sm capitalize">
                        I hereby agree that the information given is true, accurate and complete as of the date of this
                        application submission.
                    </p>
                </div>
            </div>

            <div class="md:w-1/2 mx-auto mt-6">
                <Button>Send Application Now</Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
export default {
    components: { TextInput, Button },
};
</script>

<style></style>
