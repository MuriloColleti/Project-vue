<script setup>
import vue from 'eslint-plugin-vue'

const users = {
  user() {
    return {
      userName: '',
      email: '',
      senha: '',
      id: '',
    }
  },
  methods: {
    submitForm(e) {
      e.preventDefault()
      console.log(user)
    },
  },
}

vue.createApp(users).mount('#app')
</script>

<templat></templat>

<style scoped></style>
