<template>
  <div class="register-container">
    <h2>Registrar Usuário</h2>
    <form @submit.prevent="handleRegister">
      <div>
        <label for="newUsername">Usuário:</label>
        <input type="text" id="newUsername" v-model="newUsername" required />
      </div>
      <div>
        <label for="newEmail">Email:</label>
        <input type="email" id="newEmail" v-model="newEmail" required />
      </div>
      <div>
        <label for="newPassword">Senha:</label>
        <input type="password" id="newPassword" v-model="newPassword" required />
      </div>
      <button type="submit">Registrar</button>
    </form>
    <p v-if="registerError" class="error">{{ registerError }}</p>
    <p v-if="registerSuccess" class="success">{{ registerSuccess }}</p>
    <router-link to="/login" class="login-link">Voltar para login</router-link>
    <h3>Usuários Registrados</h3>
    <ul>
    <console class="log"></console>
    <console class="log"></console>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const users = ref([])
let nextId = ref(1)

const newUsername = ref('')
const newEmail = ref('')
const newPassword = ref('')
const registerError = ref('')
const registerSuccess = ref('')
const router = useRouter()

function loadUsers() {
  const saved = localStorage.getItem('users')
  if (saved) {
    users.value = JSON.parse(saved)
    nextId.value = users.value.length > 0 ? Math.max(...users.value.map((u) => u.id)) + 1 : 1
  } else {
    users.value = [{ id: 1, username: 'admin', email: 'admin@email.com', password: '1234' }]
    nextId.value = 2
    localStorage.setItem('users', JSON.stringify(users.value))
  }
}

onMounted(loadUsers)

function handleRegister() {
  if (!newUsername.value || !newEmail.value || !newPassword.value) {
    registerError.value = 'Preencha todos os campos.'
    registerSuccess.value = ''
    return
  }
  if (users.value.some((u) => u.username === newUsername.value)) {
    registerError.value = 'Usuário já existe.'
    registerSuccess.value = ''
    return
  }
  users.value.push({
    id: nextId.value++,
    username: newUsername.value,
    email: newEmail.value,
    password: newPassword.value,
  })
  localStorage.setItem('users', JSON.stringify(users.value))
  registerSuccess.value = `Bem-vindo, ${newUsername.value}! Usuário registrado com sucesso.`
  registerError.value = ''
  setTimeout(() => {
    router.push('/login')
  }, 1500)
  newUsername.value = ''
  newEmail.value = ''
  newPassword.value = ''
}
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 24px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background: #fafafa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.register-container h2 {
  text-align: center;
  margin-bottom: 18px;
}
.register-container form > div {
  margin-bottom: 14px;
}
.register-container label {
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
}
.register-container input {
  width: 100%;
  padding: 8px;
  border: 1px solid #bbb;
  border-radius: 4px;
  box-sizing: border-box;
}
.register-container button {
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
.register-container button:hover {
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
.login-link {
  display: block;
  margin: 24px auto 0 auto;
  text-align: center;
  color: #42b983;
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
</style>
