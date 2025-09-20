import { mount } from '@vue/test-utils'
import Register from '../Register.vue'
// If using Jest, expect is available globally. If not, import it:
// import { expect } from '@jest/globals'

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
    expect(users).toEqual([
      { username: 'testuser', password: 'password123', email: 'testuser.@example.com' },
    ])
  })
})
