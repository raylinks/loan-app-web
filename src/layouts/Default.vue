<template>
    <div class="grid-cols-4 xl:grid-cols-5 grid gap-10">
        <div :class=" isHidden ? 'hidden col-span-1 xl:col-span-1 lg:block' : 'col-span-1 xl:col-span-1 lg:block'">
            <side-bar />
        </div>


        <div class="col-span-4 lg:col-span-3 xl:col-span-4 pt-8 px-4 md:px-10 lg:px-0">
            <div class="min-w-full text-right pb-4">
                <button v-on:click="isHidden = !isHidden" class="wd_menu_btn"><i :class=" isHidden ? 'fa fa-bars' : 'fa fa-window-close' " aria-hidden="true"></i> </button>
            </div>

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
    data() {
        return {
            isHidden : true,
        }
    }
};
</script>

<style></style>