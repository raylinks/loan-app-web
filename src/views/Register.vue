<template>
    <div class="w-full">
        <div class="text-center">
            <h1 class="text-white font-bold text-2xl">Create an account</h1>
            <p class="text-sm text-white opacity-75 mt-3">Let's get to know you</p>
        </div>

        <form class="w-11/12 md:w-7/12 lg:w-5/12 xl:w-1/4 mx-auto mt-10" @submit.prevent="register">
            <div class="grid grid-cols-2 gap-5">
                <div>
                    <text-input
                        placeholder="First name"
                        type="text"
                        required
                          @input="({ target: { value } }) => (formData.lastName = value)"
                    />
                </div>
                <div>
                    <text-input
                        placeholder="Last name"
                        type="text"
                        required
                         v-model="formData.lastName"
                        @input="({ target: { value } }) => (formData.lastName = value)"
                    />
                </div>
            </div>
            <div class="mt-6">
                <text-input
                    placeholder="Email Address"
                    type="email"
                    required
                     v-model="formData.email"
                    @input="({ target: { value } }) => (formData.email = value)"
                />
            </div>
            <div class="mt-6">
                <text-input
                    placeholder="Phone Number"
                    type="text"
                    required
                     v-model="formData.phoneNumber"
                    @input="({ target: { value } }) => (formData.phoneNumber = value)"
                />
            </div>
            <div class="grid grid-cols-2 gap-5 mt-6">
                <div>
                    <text-input
                        placeholder="Password"
                        type="password"
                         v-model="formData.password"
                        @input="({ target: { value } }) => (formData.password = value)"
                        required
                    />
                </div>
                <div>
                    <text-input
                        placeholder="Confirm Password"
                        type="password"
                        @input="({ target: { value } }) => (confirmPassword = value)"
                        required
                    />
                </div>
            </div>

            <div class="mt-10">
                <Button
                 type="submit">
                    Continue
                </Button>
            </div>
        </form>

        <div class="text-center mt-8">
            <p class="text-white text-sm">
                Already have an account?
                <router-link to="/login" class="underline text-dark-green">Login here</router-link>
            </p>
        </div>
    </div>
</template>

<script>
import validator from 'validator'
//import _ from 'lodash'
import Button from "../components/Button.vue";
import TextInput from "../components/TextInput.vue";
import { isEmailAvailable , register } from '@/api/register'
export default {
    name: "Login",

    data() {
        return {
            formData: {
                firstName: "",
                lastName: "",
                email: "",
                phoneNumber: "",
                password: "",
            },

            confirmPassword: "",
        };
    },

    components: {
        TextInput,
        Button,
    },
     register () {
     //this.$root.showLoader()

      register({
        email: this.formData.email,
        first_name: this.formData.firstName,
        last_name: this.formData.lastName,
        password: this.formData.password,
        phone_number: this.phoneNumber || ''
      })
        .then(res => {
             
           console.log(res);
          // save to store for the next screen
          this.$store.dispatch('SET_USER', {
            email: this.email,
            username: this.username,
            password: this.password
          });

          this.$cookies.set('user', {
            email:this.formData.email,
            first_name: this.formData.firstName,
            last_name : this.formData.lastName,
            password: this.formData.password,
            phone_number: this.phoneNumber || ''
          });

          this.$router.push('/register/confirm')
          return false
        })
        .catch(error => {
            console.log(error);
      
        })
    },
     verifyEmail () {
      // Verify correctness here.
      if (!validator.isEmail(this.email)) return

      // Verify availablity of email from DB
      isEmailAvailable(this.email)
        .then(response => {
          const available = response.data.data.is_available
          this.isEmailTaken = !available
          this.emailState = available ? this.checkmark : this.cancel
          this.shouldEnable()
        })
        .catch(error => {
          return error
        })
    },
  
};
</script>

<style></style>
