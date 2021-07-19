<template>
    <input
        class="h-12 bg-secondary rounded-2xl w-full text-sm text-primary placeholder-black px-5 focus:outline-none focus:border-red-default border border-black-default"
        v-bind="$attrs"
        @input="$emit('update:modelValue', $event.target.value)"
    />
</template>

<script>
export default {
    name: "TextInput",
    props: {
        modelValue: [String, Number],
    },
};
</script>

<style></style>
