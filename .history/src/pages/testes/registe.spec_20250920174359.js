import { mount } from "@vue/test-utils";
import Register from "../Register.vue";

describe("Register.vue", async async async async () => {
  localStorage.clear();

  const wrapper = mount(Register);
  await wrapper.find(#newUsername).setValue("testuser");
  await wrapper.find(#newPassword).setValue("password123");
  await wrapper.find(#newEmail).setValue("testuser.@example.com");
  await wrapper.find("form").trigger("submit.prevent");


});
