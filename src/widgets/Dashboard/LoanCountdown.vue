<template>
    <div>
        <p class="text-primary text-xl font-semibold">Loan Countdown</p>
        <p class="text-xs text-primary opacity-50 w-6/12 mt-1">This shows your current outstanding loan days left</p>

        <div class="mt-8">
            <div class="countdown rounded-3xl flex items-center px-5 relative" coundown="50%">
                <div class="relative z-40">
                    <p class="text-2xl font-medium text-primary">₦{{user.eligible_amount}}</p>
                    <p class="text-primary opacity-50 text-sm">14 Days Left</p>
                </div>

                <div class="countdown-display" style="width: 60%"></div>
            </div>
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

<style scoped>
.countdown {
    background-color: rgba(233, 235, 236, 0.5);
    height: 109px;
    width: 100%;
}

.countdown-display {
    position: absolute;
    top: 0;
    height: 100%;
    background-color: #e17e83;
    left: 0;
    content: "";
    border-radius: 25px;
}
</style>
