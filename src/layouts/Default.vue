<template>
    <div class="grid-cols-4 xl:grid-cols-5 grid gap-10">
        <div class="col-span-1 xl:col-span-1 hidden lg:block">
            <side-bar />
        </div>
        <div class="col-span-4 lg:col-span-3 xl:col-span-4 pt-8 px-4 md:px-10 lg:px-0">
            <div class="mb-12">
                <Balance />
            </div>
            <slot />
        </div>
    </div>
</template>

<script>
import Balance from "./includes/Balance.vue";
import SideBar from "./includes/SideBar.vue";
export default {
    name: "DefaultLayout",
    components: {
        SideBar,
        Balance,
    },
};
</script>

<style></style>