<template>
    <div class="lg:w-11/12 xl:w-11/12 mb-10">
        <h1 class="text-2xl font-semibold text-primary">Loan Request & Liquidation</h1>

        <div class="mt-5 w-auto flex">
            <Tab :currentTab="currentTab" @select="(val) => (currentTab = val)"></Tab>
        </div>

        <keep-alive>
            <component :is="currentTab" />
        </keep-alive>
    </div>
</template>

<script>
import Tab from "../widgets/LoanRequest/Tab.vue";
import Request from "../widgets/LoanRequest/Request.vue";
import Liquidation from "../widgets/LoanRequest/Liquidation.vue";

export default {
    components: { Tab, Request, Liquidation },
    data() {
        return {
            currentTab: "Liquidation",
        };
    },
};
</script>

<style></style>
