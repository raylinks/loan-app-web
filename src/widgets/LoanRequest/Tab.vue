<template>
    <div>
        <div class="tab-container mb-6 px-5 py-2 flex items-center w-auto">
            <button
                v-for="tab in tabs"
                :key="tab"
                :class="[
                    'flex items-center justify-between rounded-lg px-5 h-full mr-4 focus:outline-none',
                    currentTab === tab && 'bg-white',
                ]"
                @click="$emit('select', tab)"
            >
                <p :class="['text-primary text-sm ', currentTab === tab && 'font-semibold']">
                    {{ tab }}
                </p>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["currentTab"],
    data() {
        return {
            tabs: ["Request", "Liquidation"],
        };
    },
};
</script>

<style scoped>
.tab-container {
    height: 56px;
    border-radius: 8px;
    background-color: #eff2f7;
}
</style>
