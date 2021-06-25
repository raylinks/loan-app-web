<template>
    <div>
        <p class="text-primary text-lg font-semibold mt-4">Update your profile</p>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <div>
                    <text-input placeholder="First name" />
                </div>
            </div>
            <div>
                <div>
                    <text-input placeholder="Last name" />
                </div>
            </div>
            <div>
                <div>
                    <text-input placeholder="Gender" />
                </div>
            </div>
            <div>
                <div>
                    <text-input placeholder="Phone Number" />
                </div>
            </div>
            <div class="md:col-span-2">
                <div>
                    <text-input placeholder="Email Address" />
                </div>
            </div>
            <div class="md:col-span-2">
                <div>
                    <text-input placeholder="Date of birth" />
                </div>
            </div>
        </div>
        <div class="mt-6">
            <Button>Save</Button>
        </div>
    </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import Button from "@/components/Button.vue";
export default {
    components: {
        TextInput,
        Button
    },
};
</script>

<style></style>
