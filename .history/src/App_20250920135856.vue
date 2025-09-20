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

    <hr style="margin: 32px 0" />
    <h2>Registrar</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="newUsername">Novo Usuário:</label>
        <input type="text" id="newUsername" v-model="newUsername" required />
      </div>
      <div>
        <label for="newPassword">Nova Senha:</label>
        <input type="password" id="newPassword" v-model="newPassword" required />
      </div>
      <button type="submit">Registrar</button>
    </form>
    <p v-if="registerError" class="error">{{ registerError }}</p>
    <p v-if="registerSuccess" class="success">{{ registerSuccess }}</p>
  </div>
</template>
import { ref } from 'vue'

const users = ref([{ username: 'admin', password: '1234' }])

const username = ref('')
const password = ref('')
const error = ref('')

const newUsername = ref('')
const newPassword = ref('')
const registerError = ref('')
const registerSuccess = ref('')

function handleLogin() {
  const found = users.value.find(
    (u) => u.username === username.value && u.password === password.value,
  )
  if (found) {
    alert('Login realizado com sucesso!')
    error.value = ''
  } else {
    error.value = 'Usuário ou senha inválidos.'
  }
}

function handleRegister() {
  if (!newUsername.value || !newPassword.value) {
    registerError.value = 'Preencha todos os campos.'
    registerSuccess.value = ''
    return
  }
  if (users.value.some((u) => u.username === newUsername.value)) {
    registerError.value = 'Usuário já existe.'
    registerSuccess.value = ''
    return
  }
  users.value.push({ username: newUsername.value, password: newPassword.value })
  registerSuccess.value = 'Usuário registrado com sucesso!'
  registerError.value = ''
  newUsername.value = ''
  newPassword.value = ''
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
     .register-link {
       display: block;
       margin: 24px auto 0 auto;
       text-align: center;
       color: #42b983;
       font-weight: bold;
       text-decoration: underline;
       cursor: pointer;
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
.success {
  color: green;
  margin-top: 10px;
  text-align: center;
}
</style>
