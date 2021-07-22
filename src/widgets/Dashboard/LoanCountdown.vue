<template>
    <div>
        <p class="text-primary text-xl font-semibold">Loan Countdown</p>
        <p class="text-xs text-primary opacity-50 w-6/12 mt-1">This shows your current outstanding loan days left</p>

        <div class="mt-8">
            <div class="lc-grey-round">
                <div class="lc-red-round" style="width:65%">
                    <p class="text-2xl font-medium text-primary">₦{{user.eligible_amount}}</p>
                    <p class="text-primary text-sm">14 Days Left</p>
                </div>
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

<style>

</style>
