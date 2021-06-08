<template>
    <div class="h-screen w-full bg-white flex items-center justify-center">
        <div class="absolute top-0 left-0 pt-8 pl-10">
            <!-- <p class="text-2xl font-bold text-white">CREDBOLT</p> -->
            <img src="@/assets/images/logo.png" alt="logo" class="w-32" />
        </div>

        <main class="w-full">
            <slot />
        </main>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
