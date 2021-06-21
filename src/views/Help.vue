<template>
    <div class="pb-20">
        <h1 class="text-2xl font-semibold text-primary">Help &amp; Feedback</h1>

        <div class="flex flex-wrap justify-between md:justify-start">
            <div
                v-for="{ title, image } in categories"
                :key="title"
                class="card mt-5 mr-6 py-2 px-2 flex items-center justify-center flex-col"
            >
                <div class="w-12 mx-auto mb-3">
                    <img :src="require(`@/assets/images/${image}.png`)" :alt="title" />
                </div>

                <p class="text-sm font-medium text-primary text-center capitalize">{{ title }}</p>
            </div>
        </div>

        <div class="mt-12">
            <p class="text-2xl font-semibold text-primary capitalize">frequently asked questions</p>

            <div class="mt-8 grid gap-4 lg:w-8/12 xl:w-7/12">
                <div
                    v-for="faq in faqs"
                    :key="faq.title"
                    class="rounded-2xl bg-secondary h-12 flex items-center justify-between px-4 cursor-pointer"
                >
                    <div>
                        <p class="text-sm text-primary font-medium capitalize">Q: {{ faq.title }}</p>
                    </div>

                    <div>
                        <svg width="13" height="9" viewBox="0 0 13 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 1L6.34286 7L1 1" stroke="#A6ABB2" stroke-width="2" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                {
                    title: "authentication questions",
                    image: "auth",
                },
                {
                    title: "credit limit questions",
                    image: "limit",
                },
                {
                    title: "loan questions",
                    image: "loan",
                },
                {
                    title: "repayment questions",
                    image: "repayment",
                },
                {
                    title: "overdue questions",
                    image: "overdue",
                },
                {
                    title: "Other questions",
                    image: "others",
                },
            ],

            faqs: [
                {
                    title: "how should i repay ?",
                },
                {
                    title: "when does ### report to the credit inestigation bureau?",
                },
                {
                    title: "can credit record be deleted? how long can it be eliminated?",
                },
                {
                    title: "what information should i supply to apply from a loan?",
                },
                {
                    title: "how much can i borrow?",
                },
            ],
        };
    },
};
</script>

<style scoped>
.card {
    width: 135px;
    min-height: 135px;
    background: rgba(196, 196, 196, 0.1);
    border-radius: 15px;
}
</style>
