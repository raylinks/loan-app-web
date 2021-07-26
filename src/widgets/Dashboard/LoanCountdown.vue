<template>
    <div>
        <p class="text-primary text-xl font-semibold">Loan Countdown</p>
        <p class="text-xs text-primary opacity-50 mt-1">This shows your current outstanding loan days left</p>

        <button @click="goToLiquidation()" class="mt-8">
            <!-- <div class="lc-grey-round">
                <div class="lc-red-round" style="width:65%">
                    <p class="text-2xl font-medium text-primary">₦{{user.eligible_amount}}</p>
                    <p class="text-primary text-sm">14 Days Left</p>
                </div>
            </div> -->
           
            <div class="progress-card" 
            style="max-height:250px; max-width:250px; border-radius:14px;">
                <div class="box">
                    <div class="percent">
                        <svg class="my_svg">
                            <circle cx="70" cy="70" r="70"></circle>
                            <circle :style="`
                                    stroke-dashoffset: calc(440 - (440 * ${timeRem*100/timeGiven}) / 100);
                                    stroke: ${ (timeRem*100/timeGiven) < 25 ? '#cc0000' : '#00ff43'};`"
                                cx="70" cy="70" r="70">
                            </circle>
                        </svg>
                        <div class="num">
                            <h2>{{timeRem}}<span> {{ timeRem == 1 ? 'Day' : 'Days'}} </span></h2>
                        </div>
                    </div>
                    <!-- <h2 class="text"> &#x20A6;{{loanAmount + loanInterest * (timeGiven - timeRem)}} <br> Left to Pay</h2> -->
                </div>
            </div>

        </button>
    </div>
</template>

<script>

export default {
     components: { },

    data(){
      return {
        amount: "",
        transactions : [],
        loanAmount: 7000,
        loanInterest: 70,
        timeRem: 4,
        timeGiven: 14,
         
        
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

    methods:{
        goToLiquidation(){
            this.$router.push('/loan-request2'); 
        }
    },

    
};
</script>

<style>

</style>
