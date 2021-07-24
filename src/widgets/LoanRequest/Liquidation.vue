<template>
    <div>
        <div class="col-span-2">
            <div class="pb-5">
                <h1 class="text-2xl font-semibold text-primary">Liquidation</h1>
            </div>

            <div class="progress-card">
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
                    <h2 class="text"> &#x20A6;{{loanAmount + loanInterest * (timeGiven - timeRem)}} <br> Left to Pay</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        
    },
    data() {
        return {
            // note that timeRem is days but you to make it a range of (1-100)
            loanAmount: 7000,
            loanInterest: 70,
            timeRem: 4,
            timeGiven: 14,
        }
    }
};
</script>

<style>
/* .progress-card:nth-child(2) svg.my_svg circle:nth-child(2)
{
  stroke-dashoffset:calc(440 - (440 * 50) / 100);
  stroke:#00ff43;
} */

/* I moved the 2nd circle style it to inline to help make it dynamic */

</style>
