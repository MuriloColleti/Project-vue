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
</script>

<templa>
  <h1></h1>

  <form id="app-form">
    <input type="text" v-model="userName" placeholder="Digite seu Nome" />
    <input type="text" v-model="email" placeholder="email" />
    <input type="password" v-model="senha" placeholder="senha" />
    <input type="submit" value="Enviar" v-on:click="submitForm" />
  </form>
</templa

<style scoped></style>
