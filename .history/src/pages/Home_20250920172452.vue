<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card shadow">
          <div class="card-body text-center">
            <h1 class="card-title mb-3">Bem-vindo</h1>
            <p class="mb-4">Esta é a página inicial do aplicativo.</p>
            <P class="mb-3">Esse um projeto criando para praticar o vue 3, buscando a pratica e aprimoramento.</P>

            <router-link to="/login" class="btn btn-primary mx-2">Ir para Login</router-link>
            <router-link to="/register" class="btn btn-success mx-2"
              >Registrar Novo Usuário</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
