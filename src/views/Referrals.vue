<template>
    <div class="pb-20">
        <div class="flex items-center uppercase text-2xl font-semibold">
            <p class="">
                <span class="text-green underline">Invite Friends</span>
                <span class="underline text-primary"> freinds And MORE BONUS WAITING FOR YOU TO PICK</span>
            </p>
        </div>

        <div class="md:flex items-center lg:w-11/12 xl:w-8/12 mt-16 md:mt-32">
            <div class="md:w-1/2">
                <div class="refer-card relative pt-12 text-center">
                    <div class="main-text">
                        20%
                    </div>

                    <p class="capitalize text-white text-xl w-8/12 mx-auto text-center">
                        you can get up to 20% of the <span class="text-green100 font-semibold">loan amount</span> for
                        each friend you invite
                    </p>

                    <button class="refer-btn w-10/12 mx-auto text-center text-white mt-3">
                        REFER FRIENDS NOW
                    </button>
                </div>
            </div>

            <div class="md:w-1/2 mt-20 md:mt-0 md:ml-5">
                <div class="invited-card relative pt-16 text-center">
                    <div class="main-text">
                        0
                    </div>

                    <p class="capitalize text-white text-xl w-8/12 mx-auto text-center">
                        you have invite 0 users in total
                    </p>

                    <div class="flex items-center w-10/12 mx-auto 2xl:mt-12 mt-6">
                        <div class="w-1/2">
                            <button class="light-btn w-full py-2 rounded-full text-sm text-white">
                                Invited Record
                            </button>
                        </div>
                        <div class="w-1/2 ml-4">
                            <button class="dark-btn w-full py-2 rounded-full text-sm text-white">
                                My Bonus
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.refer-card {
    background: linear-gradient(180deg, #979595 0%, rgba(196, 196, 196, 0.4) 100%);
    border-radius: 20px;
    height: 206px;
    width: 100%;
}

.main-text {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    letter-spacing: 0.08em;
    font-weight: bold;
    font-size: 70px;
    line-height: 105px;
    color: theme("colors.primary");
    position: absolute;
    top: -25%;
    text-align: center;
    width: 100%;
}

.refer-btn {
    background: rgba(0, 0, 0, 0.45);
    border-radius: 20px;
    height: 41px;
}

.invited-card {
    background: linear-gradient(180deg, #ffaeae 0%, rgba(241, 33, 33, 0.4) 100%);
    border-radius: 20px;
    height: 206px;
    width: 100%;
}

.light-btn {
    background: rgba(196, 196, 196, 0.2);
    border: 1.5px solid #a6abb3;
}

.dark-btn {
    background: rgba(0, 0, 0, 0.45);
    border-radius: 20px;
}
</style>
