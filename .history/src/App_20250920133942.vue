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
    },
  },
}
</script>

<template>
  <h1></h1>

  <form id="app-form">
    <input type="text" v-model="userName" placeholder="Digite seu Nome" />
    <input type="text" v-model="email" placeholder="email" />
    <input type="password" v-model="senha" placeholder="senha" />
    <input type="submit" value="Enviar" v-on:click="submitForm" />
  </form>
</template>

<style scoped></style>
