<template>
    <div class="">
        <div class="tab flex items-center">
            <button
                @click="activeTab = 'atm-cards'"
                :class="[
                    `w-1/2 text-center h-12 flex justify-center items-center individual-tab focus:outline-none`,
                    activeTab === 'atm-cards' && 'active',
                ]"
            >
                <p class="text-xl text-grey font-medium opacity-75">ATM CARDS</p>
            </button>
            <button
                @click="activeTab = 'bank-accounts'"
                :class="[
                    `w-1/2 text-center h-12 flex justify-center items-center individual-tab focus:outline-none`,
                    activeTab === 'bank-accounts' && 'active',
                ]"
            >
                <p class="text-xl text-grey font-medium opacity-75">BANK ACCOUNTS</p>
            </button>
        </div>

        <div class="mt-8">
            <keep-alive>
                <component :is="activeTab" />
            </keep-alive>
        </div>
    </div>
</template>

<script>
import AtmCards from "@/widgets/Account/AtmCards";
import BankAccounts from "@/widgets/Account/BankAccounts";
export default {
    components: {
        AtmCards,
        BankAccounts,
    },

    data() {
        return {
            activeTab: "atm-cards",
        };
    },
};
</script>

<style scoped>
.tab {
    max-width: 630px;
    width: 100%;
}

.individual-tab {
    border-color: rgba(0, 0, 0, 0.25);
    border-bottom-width: 3px;
}

.active {
    border-color: #7d7d7d;
}

.active p {
    opacity: 1;
}
</style>
