import { mount } from '@vue/test-utils'
import Register from '../Register.vue'
import { describe, it, expect } from 'vitest'

globalThis.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null
  },
  setItem(key, value) {
    this.store[key] = value.toString()
  },
  removeItem(key) {
    delete this.store[key]
  },
  clear() {
    this.store = {}
  },
}

describe('Register.vue', () => {
  it('registra um novo usuario', async () => {
    localStorage.clear()

    const wrapper = mount(Register)
    await wrapper.find('#newUsername').setValue('testuser')
    await wrapper.find('#newPassword').setValue('password123')
    await wrapper.find('#newEmail').setValue('testuser.@example.com')
    await wrapper.find('form').trigger('submit.prevent')

    await wrapper.vm.$nextTick()

    const users = JSON.parse(localStorage.getItem('users'))

    expect(
      users.some(
        (u) =>
          u.username === 'testuser' &&
          u.password === 'password123' &&
          u.email === 'testuser.@example.com',
      ),
    ).toBe(true)
  })
})
