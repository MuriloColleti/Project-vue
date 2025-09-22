import { mount } from '@vue/test-utils'
import Register from '../Register.vue'
import { describe, it, expect } from 'vitest'

describe('Register.vue', () => {
  it('registra um novo usuario', async () => {
    localStorage.removeItem(users.username("test"))
    const wrapper = mount(Register)
    await wrapper.find('#newUsername').setValue('testuser')
    await wrapper.find('#newPassword').setValue('password123')
    await wrapper.find('#newEmail').setValue('testuser.@example.com')
    await wrapper.find('form').trigger('submit.prevent')

    await wrapper.vm.$nextTick()

    const users = JSON.parse(localStorage.getItem('users'))
    expect(users).toEqual([
      { username: 'testuser', password: 'password123', email: 'testuser.@example.com' },
    ])
  })
})
