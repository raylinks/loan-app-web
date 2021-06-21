<template>
    <div>
        <div class="md:flex">
            <button class="card flex items-center justify-between px-6 text-left focus:outline-none">
                <div class="w-8/12 flex items-center">
                    <div class="w-20">
                        <img src="@/assets/images/visa.png" class="w-full" />
                    </div>
                    <div class="ml-3 w-9/12">
                        <p class="truncate capitalize text-grey text-xl font-medium">Babatunde udunewu fassdjb</p>
                        <p class="text-grey opacity-75">Ending in ***** 6789</p>
                    </div>
                </div>
                <div>
                    <svg
                        width="16"
                        height="19"
                        class="opacity-75"
                        viewBox="0 0 10 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0.999999 1L8 6.65714L1 12" stroke="#A6ABB2" stroke-width="1" stroke-linecap="round" />
                    </svg>
                </div>
            </button>

            <button class="add-card md:ml-4 text-center flex items-center justify-center focus:outline-none mt-4 md:mt-0">
                <div>
                    <p class="text-6xl text-grey">+</p>
                    <p class="text-grey">ADD ATM CARD</p>
                </div>
            </button>
        </div>

        <div class="advert mt-8 flex items-center px-4">
            <div class="w-24">
                <img src="@/assets/images/refer.png" alt="illustration" />
            </div>

            <div class="ml-3">
                <p class="capitalize text-xl font-medium text-white">earn and give up to $500 to your friends</p>
                <router-link class="capitalize underline font-medium mt-1" to="/referrals" style="color: rgba(25, 24, 71, 0.9);"
                    >invite friends</router-link
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
    max-width: 508px;
    width: 100%;
    height: 106px;
    background: rgba(166, 171, 179, 0.2);
    border: 1px solid #e5e5e5;
    border-radius: 15px;
}

.add-card {
    background: rgba(166, 171, 179, 0.1);
    border: 1px dashed #9399a1;
    box-sizing: border-box;
    border-radius: 15px;
    width: 149px;
}

.advert {
    background: linear-gradient(180deg, #5c63ab -52.58%, #ffffff 135.57%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 15px;
    max-width: 508px;
    width: 100%;
    height: 106px;
}
</style>
