<script setup>
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
      console.log('form enviado')
    },
  },
}

Vue.createApp(users).mount("#app")
</script>

<templa>
  <h1></h1>
</templa>




<style scoped></style>
