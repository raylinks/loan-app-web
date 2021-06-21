<template>
    <div>
        <div class="card flex justify-between items-center px-2 text-left focus:outline-none">
            <div class="flex items-center">
                <div class="w-20">
                    <img src="@/assets/images/gt-bank.png" alt="Bank" class="w-full" />
                </div>
                <div class="ml-3 py-3">
                    <p class="text-grey text-lg font-medium">Bank</p>
                    <p class="text-grey font-medium opacity-75">GTBank Plc</p>
                </div>
            </div>

            <div class="text-right py-3 mr-2">
                <p class="text-grey text-lg font-medium">Account Number</p>
                <p class="text-grey font-medium opacity-75">012345678</p>
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
</style>
