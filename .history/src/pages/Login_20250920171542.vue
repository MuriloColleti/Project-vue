<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Usuário:</label>
        <input type="text" id="username" v-model="username" required />
      </div>
      <div>
        <label for="password">Senha:</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <button type="submit">Entrar</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
    <router-link to="/register" class="register-link">Registrar novo usuário</router-link>
    <router-link to="/" class="home-link">Home</router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const username = ref('')
const password = ref('')
const error = ref('')

function getUsers() {
  const users = localStorage.getItem('users')
  if (users) {
    return JSON.parse(users)
  }
  // Usuário padrão caso não exista nada salvo
  return [{ id: 1, username: 'admin', email: 'admin@email.com', password: '1234' }]
}

function handleLogin() {
  const users = getUsers()
  const found = users.find((u) => u.username === username.value && u.password === password.value)
  if (found) {
    error.value = ''
    alert('Login realizado com sucesso!')
  } else {
    error.value = 'Usuário ou senha inválidos.'
  }
}
</script>

<style scoped>
.login-container {
  max-width: 350px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.login-container h2 {
  text-align: center;
  margin-bottom: 18px;
}
.login-container form > div {
  margin-bottom: 14px;
}
.login-container label {
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
}
.login-container input {
  width: 100%;
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 4px;
  box-sizing: border-box;
}
.login-container button {
  width: 100%;
  padding: 10px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.2s;
}
.login-container button:hover {
  background: #369870;
}
.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
.register-link {
  display: block;
  margin: 24px auto 0 auto;
  text-align: center;
  color: #42b983;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
