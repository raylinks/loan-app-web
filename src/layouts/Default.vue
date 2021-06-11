<template>
    <div class="grid-cols-5 grid">
        <div class="col-span-1">
            <side-bar />
        </div>
        <div class="col-span-4">
            <slot />
        </div>
    </div>
</template>

<script>
import SideBar from "./includes/SideBar.vue";
export default {
    name: "DefaultLayout",
    components: {
        SideBar,
    },
};
</script>

<style></style>
