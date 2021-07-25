<template>
    <div class="h-screen md:flex items-center px-3 w-full side-bar fixed">
        <div class="side_fixer">
            <div class="flex items-center pt-5">
                <div class="w-16">
                    <img src="@/assets/images/image-placeholder.png" alt="image" class="w-full" />
                </div>
                <div class="ml-2">
                    <p class="text-lg text-primary font-medium">{{ user.first_name || "User" }}</p>
                    <router-link to="#" class="text-sm text-bold">My Profile</router-link>
                </div>
            </div>

            <nav class="grid gap-6 xl:ml-6 mt-8 w-full">
                <router-link
                    v-for="route in routes"
                    :key="route.text"
                    :to="route.link"
                    class="text-primary py-2 pl-8 rounded-xl"
                    >{{ route.text }}</router-link
                >
            <div class="sign_out">
                <button @click="signOutBtn()" class="">Sign Out</button>
            </div>
            </nav>

            <div class="absolute bottom-0 mb-8 w-10/12 mx-auto inset-x-0">
                <div class="w-full relative">
                    <input class="input px-5" placeholder="Search" />

                    <div class="h-full absolute top-0 flex items-center pr-5 right-0">
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25 25L19.5696 19.5599L25 25ZM22.5789 12.2895C22.5789 15.0184 21.4949 17.6356 19.5652 19.5652C17.6356 21.4949 15.0184 22.5789 12.2895 22.5789C9.56054 22.5789 6.94337 21.4949 5.01372 19.5652C3.08407 17.6356 2 15.0184 2 12.2895C2 9.56054 3.08407 6.94337 5.01372 5.01372C6.94337 3.08407 9.56054 2 12.2895 2C15.0184 2 17.6356 3.08407 19.5652 5.01372C21.4949 6.94337 22.5789 9.56054 22.5789 12.2895V12.2895Z"
                                stroke="#A6ABB2"
                                stroke-width="2.5"
                                stroke-linecap="round"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    computed: {
        user() {
            const user = localStorage.getItem("user");
            if (user) {
                return JSON.parse(user);
            }

            return {};
        },
    },

    data() {
        return {
            routes: [
                {
                    link: "/",
                    text: "Overview",
                },
                // {
                //     link: "/account",
                //     text: "Account",
                // },
                // {
                //     link: "/coupons",
                //     text: "Coupons",
                // },
                // {
                //     link: "/repayment",
                //     text: "Repayment",
                // },
                {
                    link: "/loan-request",
                    text: "Loan Request",
                },
                {
                    link: "/transaction-page",
                    text: "Transaction Page",
                },
                {
                    link: "/settings",
                    text: "Settings",
                },
                {
                    link: "/help",
                    text: "Help/FAQ",
                },
            ],
        };
    },

    methods:{
        signOutBtn(){
            localStorage.removeItem("token")
            this.$wkToast("Signout successful");
            this.$router.push('/login'); 
    }
  }
};
</script>

<style scoped>
.router-link-exact-active {
    @apply bg-secondary font-bold;
}

.input {
    background: theme("colors.secondary");
    box-shadow: 0px 4px 4px rgba(255, 0, 0, 0.1);
    border-radius: 20px;
    height: 50px;
    width: 100%;
}

.side-bar {
    max-width: 250px;
    background-color: rgb(255, 188, 188);
    z-index: 999;
}
</style>
