<template>
    <div class="lg:w-9/12 xl:w-8/12 mb-10">
        <h1 class="text-2xl font-semibold text-primary">Settings</h1>

        <div class="mt-5 w-auto flex">
            <Tab :currentTab="currentTab" @select="(val) => (currentTab = val)"></Tab>
        </div>

        <keep-alive>
            <component :is="currentTab" />
        </keep-alive>
    </div>
</template>

<script>
import Tab from "../widgets/Settings/Tab.vue";
import Profile from "../widgets/Settings/Profile.vue";
import Account from "../widgets/Settings/Account.vue";

export default {
    components: { Tab, Profile, Account },
    data() {
        return {
            currentTab: "Profile",
        };
    },
};
</script>

<style></style>
