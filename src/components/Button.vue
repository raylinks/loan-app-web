<template>
    <button
        class="h-12 bg-red-default hover:bg-red-secondary duration-500 rounded-2xl w-full text-white flex items-center justify-center"
        :disabled="loading"
        :data-loading="loading"
        v-bind="$attrs"
    >
        <template v-if="!loading">
            <slot />
        </template>
        <template v-else>
            <Loader />
        </template>
    </button>
</template>

<script>
import Loader from "./Icons/Loader.vue";
export default {
    components: { Loader },
    props: {
        loading: Boolean,
    },
};
</script>

<style scoped>
button[data-loading="true"] {
    cursor: progress !important;
}
</style>
