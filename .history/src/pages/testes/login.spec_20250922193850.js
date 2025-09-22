import { mount } from '@vue/test-utils'
import Login from '../Login.vue'
import { describe, it, expect } from 'vitest'

// Mock do localStorage para ambiente de teste
globalThis.localStorage = {
  store: {},
  getItem(key) { return this.store[key] || null },
  setItem(key, value) { this.store[key] = value.toString() },
  removeItem(key) { delete this.store[key] },
  clear() { this.store = {} }
}

describe('Login.vue', () => {
  it('realiza login com usuário válido', async () => {
    // Prepara um usuário válido no localStorage
    localStorage.setItem('users', JSON.stringify([
      { id: 1, username: 'admin', password: '1234', email: 'admin@email.com' }
    ]))

    const wrapper = mount(Login)
    await wrapper.find('#username').setValue('admin')
    await wrapper.find('#password').setValue('1234')
    await wrapper.find('form').trigger('submit.prevent')

    await wrapper.vm.$nextTick()

    // Verifica se não há mensagem de erro
    expect(wrapper.text()).not.toContain('Usuário ou senha inválidos.')
  })

  it('exibe erro para login inválido', async () => {
    localStorage.setItem('users', JSON.stringify([
      { id: 1, username: 'admin', password: '1234', email: 'admin@email.com' }
    ]))

    const wrapper = mount(Login)
    await wrapper.find('#username').setValue('usuarioErrado')
    await wrapper.find('#password').setValue('senhaErrada')
    await wrapper.find('form').trigger('submit.prevent')

    await wrapper.vm.$nextTick()

    // Verifica se a mensagem de erro aparece
    expect(wrapper.text()).toContain('Usuário ou senha inválidos.')
  })
})
