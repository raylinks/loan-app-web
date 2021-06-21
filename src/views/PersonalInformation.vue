<template>
    <div>
        <h1 class="text-2xl font-semibold text-primary">My Profile</h1>

        <div class="w-4/12 mt-6 grid gap-3">
            <div>
                <label class="text-primary text-sm font-medium mb-2">Gender</label>
                <br />
                <div class="mt-1">
                    <text-input placeholder="Select your gender" />
                </div>
            </div>
            <div>
                <label class="text-primary text-sm font-medium mb-2">Birthday</label>
                <br />
                <div class="mt-1">
                    <text-input placeholder="Enter your birthday" />
                </div>
            </div>
            <div>
                <label class="text-primary text-sm font-medium mb-2">Bank Verification Number </label>
                <br />
                <div class="mt-1">
                    <text-input placeholder="Enter your BVN" />
                </div>
            </div>

            <div class="mt-2">
                <Button>Save</Button>
            </div>
        </div>
    </div>
</template>

<script>
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
export default {
    components: { TextInput, Button },
};
</script>

<style></style>
