<template>
    <div class="md:flex items-center">
        <div class="bg-primary rounded-3xl p-5 card flex flex-col justify-between">
            <div>
                <p class="text-grey font-semibold text-lg">Transactions</p>
            </div>
            <div class="flex items-center justify-between w-full">
                <div>
                    <div class="flex items-center">
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.6343 5.53114H1.4436M1.4436 5.53114L5.44357 1.34631M1.4436 5.53114L5.44357 9.71596"
                                stroke="#A6ABB3"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                            <!-- this is sign for naira &#x20A6;-->
                        <p class="text-grey text-sm font-medium ml-2">&#x20A6;0.00</p>
                    </div>
                    <div class="flex items-center mt-2">
                        <svg
                            width="15"
                            height="11"
                            viewBox="0 0 15 11"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            class="transform rotate-180"
                        >
                            <path
                                d="M13.6343 5.53114H1.4436M1.4436 5.53114L5.44357 1.34631M1.4436 5.53114L5.44357 9.71596"
                                stroke="#A6ABB3"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>

                        <p class="text-grey text-sm font-medium ml-2">&#x20A6;{{transactions}}</p>
                    </div>
                </div>

                <div>
                    <div class="h-10 w-10 bg-grey rounded-full flex items-center justify-center">
                        <img src="@/assets/svg/recycle.svg" alt="reload" />
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-red-abstract mt-8 md:mt-0 md:ml-12 rounded-3xl p-5 card flex flex-col justify-between">
            <div>
                <p class="text-white font-semibold text-lg">Loans</p>
            </div>
            <div class="flex items-center justify-between w-full">
                <div>
                    <div class="flex items-center">
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.5 1.25C4.05375 1.25 1.25 4.05375 1.25 7.5C1.25 10.9462 4.05375 13.75 7.5 13.75C10.9462 13.75 13.75 10.9462 13.75 7.5C13.75 4.05375 10.9462 1.25 7.5 1.25ZM7.5 12.5C4.74313 12.5 2.5 10.2569 2.5 7.5C2.5 4.74313 4.74313 2.5 7.5 2.5C10.2569 2.5 12.5 4.74313 12.5 7.5C12.5 10.2569 10.2569 12.5 7.5 12.5Z"
                                fill="black"
                            />
                            <path d="M8.125 4.375H6.875V8.125H10.625V6.875H8.125V4.375Z" fill="black" />
                        </svg>

                        <p class="text-black text-sm font-medium ml-1">&#x20A6;{{ user.eligible_amount }}</p>
                    </div>
                    <div class="flex items-center mt-2">
                        <p class="text-black text-2xs">20.05.2021</p>
                    </div>
                </div>

                <div>
                    <div class="h-10 w-10 bg-green100 shadow-btn rounded-full flex items-center justify-center">
                        <img src="@/assets/svg/download.svg" alt="download" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { outgoingTransaction } from "@/api/dashboard";
import errorHandler from "@/util/errorHandler";
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
      created() {
         this.loading = false;
            outgoingTransaction()
                .then((response) => {
                    console.log(response);
                    // this.loading = false;
                     this.transactions = response.data.data;
                 
                })
                .catch((error) => {
                    console.log(error);
                    this.loading = false;
                    errorHandler(error, true);
                });
        
    },
    
};
</script>

<style scoped>
.card {
    min-width: 241px;
    height: 146px;
    max-width: 350px;
}

.text-2xs {
    font-size: 9px;
}

.shadow-btn {
    box-shadow: 0px 1px 9px #4fcb5e;
}
</style>
