<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      error: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['login']),
    async submit() {
      try {
        await this.login(this.form)
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
form.login(@submit.prevent='submit')
  label
    span.error(v-if='error.email') {{ error.email }}
    input(type='email', v-model='form.email', required, autofocus)
    span E-mail
  label
    span.error(v-if='error.password') {{ error.password }}
    input(type='password', v-model='form.password', required, minlength='6')
    span Password
  button(type='submit') Login
</template>

<style lang="postcss" scoped>
.login {
  @apply flex flex-col p-4 shadow-2xl rounded mx-auto;
}
.login label {
  @apply mb-2 flex flex-col-reverse;
}
.login input {
  @apply border-2 rounded px-2 py-1;
}
.login button {
  @apply rounded bg-green-400 text-gray-50 self-start px-4 py-1;
}
.login input:valid {
  @apply border-green-500;
}
.login input:required ~ span:after {
  content: '*';
  @apply text-red-500 ml-1;
}
.login .error {
  @apply text-red-500;
}
.login .error ~ input {
  @apply border-red-500;
}
</style>
