<template>
    <div>
        <p class="text-primary text-lg font-semibold mt-4">Update your profile</p>
         <form class="w-11/12  mx-auto mt-10" @submit.prevent="save">
        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
                <div>
                    <text-input placeholder="Title" v-model="formData.title"  />
                </div>
            </div>
            <div>
                <div>
                    <text-input placeholder="occupation" v-model="formData.occupation" />
                </div>
            </div>
            <div>
                <div>
                    <text-input placeholder="marital_status" v-model="formData.marital_status"  />
                </div>
            </div>
            <div>
                <div>
                    <text-input placeholder="current_employment" v-model="formData.current_employment" />
                </div>
            </div>
              <div>
                <div>
                    <text-input placeholder="years_of_employment" v-model="formData.years_of_employment"  />
                </div>
            </div>
            <div>
                <div>
                    <text-input placeholder="monthly_income" v-model="formData.monthly_income" />
                </div>
            </div>
            <div class="md:col-span-2">
                <div>
                    <text-input placeholder="address" v-model="formData.address"  />
                </div>
            </div>
            <div class="md:col-span-2">
                <div>
                    <text-input placeholder="date_of_birth" v-model="formData.date_of_birth"  type="date" />
                </div>
            </div>
        </div>
        <div class="mt-6 buttonWidth">
            <Button :loading="loading">Save</Button>
        </div>
         </form>
    </div>
</template>

<script>
import TextInput from "@/components/TextInput.vue";
import Button from "@/components/Button.vue";
import { updateProfile } from "@/api/profile";
import errorHandler from "@/util/errorHandler";
export default {
    name: "Profile",
    components: {
        TextInput,
        Button,
    },

    data() {
        return {
            loading: false,
            formData: {
                title: "",
                occupation: "",
                marital_status: "",
                current_employment: "",
                years_of_employment: "",
                monthly_income:"",
                address:"",
                dob: "",
            },
        };
    },

    // computed: {
    //     user() {
    //         return JSON.parse(localStorage.getItem("user")) || {};
    //     },

    //     firstName: {
    //         get() {
    //             return this.formData.first_name || this.user.first_name;
    //         },

    //         set(value) {
    //             this.formData.first_name = value;
    //         },
    //     },
    //     lastName: {
    //         get() {
    //             return this.formData.last_name || this.user.last_name;
    //         },

    //         set(value) {
    //             this.formData.last_name = value;
    //         },
    //     },
    //     gender: {
    //         get() {
    //             return this.formData.gender || this.user.gender;
    //         },

    //         set(value) {
    //             this.formData.gender = value;
    //         },
    //     },
    //     email: {
    //         get() {
    //             return this.formData.email || this.user.email;
    //         },

    //         set(value) {
    //             this.formData.email = value;
    //         },
    //     },
    //     phoneNumber: {
    //         get() {
    //             return this.formData.phone_number || this.user.phone_number;
    //         },

    //         set(value) {
    //             this.formData.phone_number = value;
    //         },
    //     },
    //     dob: {
    //         get() {
    //             return this.formData.dob || this.user.dob;
    //         },

    //         set(value) {
    //             this.formData.dob = value;
    //         },
    //     },
    // },

    methods: {
        save() {
            this.loading = true;
            updateProfile({
                 title: this.formData.title,
                 occupation: this.formData.occupation,
                 marital_status: this.formData.marital_status,
                 current_employment: this.formData.current_employment,
                 years_of_employment: this.formData.years_of_employment,
                 monthly_income: this.formData.monthly_income,
                 address: this.formData.address,
                 dob: this.formData.dob
            })
                .then((response) => {
                    console.log(response);
                    this.loading = false;
                    this.$wkToast("Profile Updated successfully");
                })
                .catch((error) => {
                    console.log(error);
                    this.loading = false;
                    errorHandler(error, true);
                });
        },
    },
};
</script>

<style>
.buttonWidth {
    max-width: 250px;
}
</style>
