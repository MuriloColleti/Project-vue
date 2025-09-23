<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h2 class="card-title text-center mb-4">Registrar Usuário</h2>
            <form @submit.prevent="handleRegister">
              <div class="mb-3">
                <label for="newUsername" class="form-label">Usuário:</label>
                <input
                  type="text"
                  id="newUsername"
                  v-model="newUsername"
                  required
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label for="newEmail" class="form-label">Email:</label>
                <input
                  type="email"
                  id="newEmail"
                  v-model="newEmail"
                  required
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label for="newPassword" class="form-label">Senha:</label>
                <input
                  type="password"
                  id="newPassword"
                  v-model="newPassword"
                  required
                  class="form-control"
                />
              </div>
              <button type="submit" class="btn btn-success w-100">Registrar</button>
            </form>
            <div v-if="registerError" class="alert alert-danger mt-3">{{ registerError }}</div>
            <div v-if="registerSuccess" class="alert alert-success mt-3">{{ registerSuccess }}</div>
            <router-link to="/login" class="btn btn-link w-100 mt-3">Voltar para login</router-link>
            <router-link to="/" class="btn btn-link w-100">Home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'UserRegister' })
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

<style scoped></style>
