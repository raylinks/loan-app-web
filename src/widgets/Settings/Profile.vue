<template>
    <div>
        <p class="text-primary text-lg font-semibold mt-4">Update your profile</p>
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <div>
                    <text-input placeholder="First name" v-model="firstName" :defaultValue="firstName" />
                </div>
            </div>
            <div>
                <div>
                    <text-input placeholder="Last name" v-model="lastName" :defaultValue="lastName" />
                </div>
            </div>
            <div>
                <div>
                    <text-input placeholder="Gender" v-model="gender" :defaultValue="gender" />
                </div>
            </div>
            <div>
                <div>
                    <text-input placeholder="Phone Number" v-model="phoneNumber" :defaultValue="phoneNumber" />
                </div>
            </div>
            <div class="md:col-span-2">
                <div>
                    <text-input placeholder="Email Address" v-model="email" :defaultValue="email" />
                </div>
            </div>
            <div class="md:col-span-2">
                <div>
                    <text-input placeholder="Date of birth" v-model="dob" :defaultValue="dob" type="date" />
                </div>
            </div>
        </div>
        <div class="mt-6">
            <Button @click="save" :loading="loading">Save</Button>
        </div>
    </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import Button from "@/components/Button.vue";
import { updateProfile } from "@/api/profile";
import errorHandler from "@/util/errorHandler";
export default {
    components: {
        TextInput,
        Button,
    },

    data() {
        return {
            loading: false,
            formData: {
                first_name: "",
                last_name: "",
                gender: "",
                phone_number: "",
                email: "",
                dob: "",
            },
        };
    },

    computed: {
        user() {
            return JSON.parse(localStorage.getItem("user")) || {};
        },

        firstName: {
            get() {
                return this.formData.first_name || this.user.first_name;
            },

            set(value) {
                this.formData.first_name = value;
            },
        },
        lastName: {
            get() {
                return this.formData.last_name || this.user.last_name;
            },

            set(value) {
                this.formData.last_name = value;
            },
        },
        gender: {
            get() {
                return this.formData.gender || this.user.gender;
            },

            set(value) {
                this.formData.gender = value;
            },
        },
        email: {
            get() {
                return this.formData.email || this.user.email;
            },

            set(value) {
                this.formData.email = value;
            },
        },
        phoneNumber: {
            get() {
                return this.formData.phone_number || this.user.phone_number;
            },

            set(value) {
                this.formData.phone_number = value;
            },
        },
        dob: {
            get() {
                return this.formData.dob || this.user.dob;
            },

            set(value) {
                this.formData.dob = value;
            },
        },
    },

    methods: {
        save() {
            this.loading = true;
            updateProfile()
                .then((response) => {
                    console.log(response);
                    this.loading = false;
                    this.$wkToast("Profile Updated successfully");
                })
                .catch((error) => {
                    this.loading = false;
                    errorHandler(error, true);
                });
        },
    },
};
</script>

<style></style>
