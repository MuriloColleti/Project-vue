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
</script>

<templat></templat>

<style scoped></style>
