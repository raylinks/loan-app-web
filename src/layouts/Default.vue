<template>
    <div class="grid-cols-4 xl:grid-cols-5 grid gap-10">
        <div
            :class="
                `transform duration-300 ${
                    showSideBar ? 'translate-x-0 col-span-4 md:col-span-2' : '-translate-x-full lg:translate-x-0 col-span-4 lg:col-span-1'
                }`
            "
        >
            <side-bar />
        </div>

        <div class="col-span-4 lg:col-span-3 xl:col-span-4 pt-8 px-4 md:px-10 lg:px-0">
            <!-- <div class="min-w-full text-right pb-4">
                <button v-on:click="isHidden = !isHidden" class="wd_menu_btn"><i :class=" isHidden ? 'fa fa-bars' : 'fa fa-window-close' " aria-hidden="true"></i> </button>
            </div> -->

            <div class="mb-12">
                <Balance />
            </div>
            <slot />
            <div class="h-16 lg:hidden"></div>
            <div
                class="z-50 lg:hidden fixed bottom-0 w-full h-16 bg-white border-t border-secondary left-0 px-10 flex items-center justify-between"
            >
                <router-link to="/">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.0737 0H17.4596C18.8619 0 19.9982 1.14585 19.9982 2.55996V5.97452C19.9982 7.38864 18.8619 8.53449 17.4596 8.53449H14.0737C12.6714 8.53449 11.5352 7.38864 11.5352 5.97452V2.55996C11.5352 1.14585 12.6714 0 14.0737 0Z"
                            fill="#C0CCDA"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M2.53852 0H5.92449C7.32676 0 8.46301 1.14585 8.46301 2.55996V5.97452C8.46301 7.38864 7.32676 8.53449 5.92449 8.53449H2.53852C1.13626 8.53449 0 7.38864 0 5.97452V2.55996C0 1.14585 1.13626 0 2.53852 0ZM2.53852 11.4655H5.92449C7.32676 11.4655 8.46301 12.6114 8.46301 14.0255V17.44C8.46301 18.8532 7.32676 20 5.92449 20H2.53852C1.13626 20 0 18.8532 0 17.44V14.0255C0 12.6114 1.13626 11.4655 2.53852 11.4655ZM17.4615 11.4655H14.0755C12.6732 11.4655 11.537 12.6114 11.537 14.0255V17.44C11.537 18.8532 12.6732 20 14.0755 20H17.4615C18.8637 20 20 18.8532 20 17.44V14.0255C20 12.6114 18.8637 11.4655 17.4615 11.4655Z"
                            fill="#979AA5"
                        />
                    </svg>
                </router-link>

                <router-link to="/settings">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#575A65" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.997 15.1748C7.684 15.1748 4 15.8548 4 18.5748C4 21.2958 7.661 21.9998 11.997 21.9998C16.31 21.9998 19.994 21.3208 19.994 18.5998C19.994 15.8788 16.334 15.1748 11.997 15.1748Z"
                            fill="#575A65"
                        />
                        <path
                            d="M11.9951 12.584C14.9331 12.584 17.2871 10.229 17.2871 7.292C17.2871 4.355 14.9331 2 11.9951 2C9.05812 2 6.70312 4.355 6.70312 7.292C6.70312 10.229 9.05812 12.584 11.9951 12.584Z"
                            fill="#575A65"
                        />
                    </svg>
                </router-link>

                <div>
                    <button
                        aria-label="Sidebar toggle"
                        class="stroke-group grid gap-1"
                        @click="showSideBar = !showSideBar"
                    >
                        <div class="stroke"></div>
                        <div class="stroke"></div>
                        <div class="stroke"></div>
                    </button>
                </div>
            </div>
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

    watch: {
        $route() {
            this.showSideBar = false;
        },
    },

    data() {
        return {
            showSideBar: false,
        };
    },
};
</script>

<style scoped>
.stroke-group .stroke {
    @apply bg-grey w-6 rounded-lg;

    height: 3px;
}
</style>
