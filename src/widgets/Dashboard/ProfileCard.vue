<template>
    <div class="bg-secondary rounded-3xl px-4 py-8">
        <div class="w-32 mx-auto">
            <img src="@/assets/images/placeholder-2.png" alt="image" class="w-full" />
        </div>

        <div class="mt-8 mb-3 text-center">
            <p class="text-lg font-semibold text-primary text-center">{{user.first_name}}</p>

            <div class="bg-grey px-10 py-2 rounded-full h-10 w-10/12 mx-auto mt-5 text-primary font-medium">
                    <router-link to="/transaction-page" tag="button">
                       <p> Information</p>
                    </router-link>
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

<style></style>
