<script>
import { mapActions } from 'vuex'
export default {
  name: 'Signup',
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      error: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['signup']),
    async submit() {
      try {
        await this.signup(this.form)
        this.$router.push({
          path: '/'
        })
      } catch (error) {
        this.error = error.response.data
      }
    }
  }
}
</script>

<template lang="pug">
form.signup(@submit.prevent='submit')
  label
    span.error(v-if='error.firstName') {{ error.firstName }}
    input(type='firtName', v-model='form.firstName', required, autofocus)
    span Firt Name
  label
    span.error(v-if='error.lastName') {{ error.lastName }}
    input(type='tel', v-model='form.lastName', required)
    span Last Name
  label
    span.error(v-if='error.email') {{ error.email }}
    input(type='email', v-model='form.email', required)
    span E-mail
  label
    span.error(v-if='error.password') {{ error.password }}
    input(type='password', v-model='form.password', required, minlength='6')
    span Password
  button(type='submit') Sign Up
</template>

<style lang="postcss" scoped>
.signup {
  @apply flex flex-col p-4 shadow-2xl rounded mx-auto;
}
.signup label {
  @apply mb-2 flex flex-col-reverse;
}
.signup input {
  @apply border-2 rounded px-2 py-1;
}
.signup button {
  @apply rounded bg-green-500 text-gray-50 self-start px-4 py-1;
}
.signup input:valid {
  @apply border-green-500;
}
.signup input:required ~ span:after {
  content: '*';
  @apply text-red-500 ml-1;
}
.signup .error {
  @apply text-red-500;
}
.signup .error ~ input {
  @apply border-red-500;
}
</style>
