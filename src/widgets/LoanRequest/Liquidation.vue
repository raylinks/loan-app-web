<template>
    <div>
        <div class="pb-5">
            <h1 class="text-2xl font-semibold text-primary">Liquidation</h1>
        </div>
        <div class="liquidate_" style="">
            <div class="liquidate_left">
                <button @click="payWithMonnify">
                    
                    <div class="progress-card">
                        <div class="box">
                            <div class="percent">
                                <svg class="my_svg2">
                                    <title>✨ Click to Pay! ✨</title>
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
                </button>
            </div>

            <div class="liquidate_right">
                <div class="slidecontainer2">
                    <input type="range" min="0" max="365" step="1" class="slider" id="myRange" v-model="days">
                    <div class="liqui_Table">
                        <table style="width:100%">
                            <tr style="font-size: 17px;">
                                <th>Amount</th>
                                <th>Days</th>
                                <th>Will Pay</th>
                            </tr>
                            <tr>
                                <td>&#x20A6; {{loanAmount}}</td>
                                <td> {{days}} </td>
                                <td>&#x20A6; {{loanAmount + days*loanInterest}}</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        
    },

    el: ".liquidate_right",

    data() {
        return {
            // note that timeRem is days but you to make it a range of (1-100)
            loanAmount: 7000,
            loanInterest: 70,
            timeRem: 2,
            timeGiven: 14,
            days: 10,
            indexNo: 0,
        }
    },

    mounted() {
        let monnifyScript = document.createElement('script')
        monnifyScript.setAttribute('src', 'https://sdk.monnify.com/plugin/monnify.js')
        document.head.appendChild(monnifyScript)
    },

    methods: {
        payWithMonnify() {
            this.MonnifySDK.initialize({
                amount: 5000,
                currency: "NGN",
                reference: '' + Math.floor((Math.random() * 1000000000) + 1),
                customerName: "John Doe",
                customerEmail: "monnify@monnify.com",
                apiKey: "MK_TEST_SAF7HR5F3F",
                contractCode: "4934121693",
                paymentDescription: "Test Pay",
                isTestMode: true,
                metadata: {
                    "name": "Damilare",
                    "age": 45
                },
                paymentMethods: ["CARD", "ACCOUNT_TRANSFER"],
                incomeSplitConfig: [
                    {
                        "subAccountCode": "MFY_SUB_342113621921",
                        "feePercentage": 50,
                        "splitAmount": 1900,
                        "feeBearer": true
                    },
                    {
                        "subAccountCode": "MFY_SUB_342113621922",
                        "feePercentage": 50,
                        "splitAmount": 2100,
                        "feeBearer": true
                    }
                ],
                onComplete: function (response) {
                    //Implement what happens when transaction is completed.
                    console.log(response);
                },
                onClose: function (data) {
                    //Implement what should happen when the modal is closed here
                    console.log(data);
                }
            });
        },
    },
};
</script>

<style>
/* .progress-card:nth-child(2) svg.my_svg circle:nth-child(2)
{
  stroke-dashoffset:calc(440 - (440 * 50) / 100);
  stroke:#00ff43;
} */

/* I moved the 2nd circle style it to inline to help make it dynamic */

@import url('https://fonts.googleapis.com/css2?family=Monoton&display=swap');


</style>
