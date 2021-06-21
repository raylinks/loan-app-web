<template>
    <div>
        <div class="grid grid-cols-3 lg:grid-cols-5 gap-10 pb-10 lg:pb-0">
            <div class="col-span-3">
                <div class="flex items-center justify-between">
                    <div>
                        <h1 class="text-2xl font-semibold text-primary">Overview</h1>
                    </div>

                    <div>
                        <button class="bg-secondary px-5 rounded-full h-10 flex items-center focus:outline-none">
                            <div>
                                <p class="text-xs text-primary font-medium">This Week</p>
                            </div>

                            <div class="ml-2">
                                <svg
                                    width="13"
                                    height="9"
                                    viewBox="0 0 13 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 1L6.34286 7L1 1"
                                        stroke="#45454C"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                    />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-12 mt-8">
                    <div>
                        <div class="xl:w-10/12">
                            <profile-card />
                        </div>
                    </div>

                    <div>
                        <loan-countdown />
                    </div>

                    <div>
                        <div class="bg-secondary rounded-3xl px-5 py-6 xl:w-10/12  text-center">
                            <div class="text-center">
                                <p class="text-primary text-lg font-medium">Invite Friends</p>
                                <p class="text-sm text-primary opacity-50">
                                    You will get 20% off
                                </p>
                            </div>

                            <div class="w-24 mx-auto mt-5">
                                <img src="@/assets/images/invite-friends.png" alt="image" class="w-full" />
                            </div>

                            <button class="bg-grey rounded-full h-10 w-10/12 mx-auto mt-5 text-primary font-medium">
                                Invite now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-span-3 lg:col-span-2  lg:border-l border-darksecondary lg:pl-10">
                <Activity />
            </div>
        </div>
    </div>
</template>

<script>
import ProfileCard from "../widgets/Dashboard/ProfileCard.vue";
import LoanCountdown from "../widgets/Dashboard/LoanCountdown.vue";
import Activity from "../widgets/Dashboard/Activity.vue";
export default {
    components: {
        ProfileCard,
        LoanCountdown,
        Activity,
    },
};
</script>

<style></style>
