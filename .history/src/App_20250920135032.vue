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
      console.log('form enviado')
    },
  },
}

vue.createApp(users).mount('#app')
</script>

<templa>
  
</templa>

<style scoped></style>
