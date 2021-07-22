<template>
    <div>
        <p class="text-4xl font-semibold text-red-default">₦0,000.00</p>
        <p class="text-xs text-primary font-medium opacity-75 mt-2">...</p>

        <p class="text-sm font-medium text-primary mt-5">Today’s Coupons</p>

        <div class="grid gap-10 mt-5 w-10/12">
            <button class="flex items-center justify-between text-left">
                <div class="flex items-center">
                    <div class="w-16 mr-3">
                        <img src="@/assets/images/coupon.png" alt="coupon" />
                    </div>
                    <div>
                        <p class="text-primary font-medium">Coupon #1</p>
                        <p class="text-primary font-medium opacity-50 text-xs mt-1">52164266224976524 46851</p>
                    </div>
                </div>

                <div>
                    <svg width="10" height="13" viewBox="0 0 10 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.999999 1L8 6.65714L1 12" stroke="#A6ABB2" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
            </button>
        </div>

        <div class="mt-10">
            <button
                class="bg-secondary rounded-full h-12 w-full md:w-8/12 mx-auto mt-5 text-primary font-medium hover:bg-red-default duration-300 hover:text-white"
            >
                Invite now
            </button>
        </div>
    </div>
</template>


<script>

export default {
     components: { },

    data(){
      return {
        amount: "",
        transactions : []
         
        
      }
    },
     computed: {
        user() {
            return JSON.parse(localStorage.getItem("user")) || {};
        },

        ineligibleAmount() {
            return Number(this.amount) > Number(this.user.eligible_amount);
        },
    },
    
};
</script>


<style></style>
