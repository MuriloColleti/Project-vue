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
  <h1>Welcon</h1>
  <p>
  </p>
</template>

<style scoped></style>
