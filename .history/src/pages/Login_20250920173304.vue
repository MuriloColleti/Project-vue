<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Login</h2>
            <form @submit.prevent="handleLogin">
              <div class="mb-3">
                <label for="username" class="form-label">Usuário:</label>
                <input type="text" id="username" v-model="username" required class="form-control" />
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">Senha:</label>
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  required
                  class="form-control"
                />
              </div>
              <button type="submit" class="btn btn-primary w-100">Entrar</button>
            </form>
            <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
            <router-link to="/register" class="btn btn-link w-100 mt-3"
              >Registrar novo usuário</router-link
            >
            <router-link to="/" class="btn btn-link w-100">Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

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
    setTimeout(() => {
    router.push('/login')
  }, 1500)
  } else {
    error.value = 'Usuário ou senha inválidos.'
  }
}
</script>

<style scoped></style>
