<template>
<div class="overflow-x-auto">
        <div class="min-w-screen min-h-screen items-center justify-center">
            <div class="w-full lg:w-5/6">
                <div class="bg-white shadow-md rounded my-6">
                    <table class="min-w-max w-full table-auto">
                        <thead class="bg-gray-600">
                            <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                                style="color:#ED6D6D">
                                <th class="py-3 px-6 text-left">Reference</th>
                                <th class="py-3 px-6 text-left">Type</th>
                                <th class="py-3 px-6 text-center">Amount</th>
                                <th class="py-3 px-6 text-center">Status</th>
                                <th class="py-3 px-6 text-center">Date</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 text-sm font-light">
                           
                            
                            
                            <tr v-for="(transaction) in transactions" :key="transaction" class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span class="font-medium">{{transaction.reference}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-left">
                                    <div class="flex items-center">
                                        <span>{{transaction.type}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex items-center justify-center">
                                        <span class="font-medium">{{transaction.loan.amount}}</span>
                                    </div>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <span class="flex items-center justify-center">{{transaction.status}} </span>
                                </td>
                                <td class="py-3 px-6 text-center">
                                    <div class="flex item-center justify-center">
                                        <span class="font-medium">{{transaction.created_at}}</span>
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { listTransactions } from "@/api/transaction";
import errorHandler from "@/util/errorHandler";
export default {
    // Change data with value from api
    components: {  },

    data(){
      return {
       
        transactions : []
         
        
      }
    },
      created() {
         this.loading = false;
            listTransactions()
                .then((response) => {
                
                    this.loading = false;
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

<style></style>
