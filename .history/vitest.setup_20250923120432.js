import { vi } from 'vitest'
import '@testing-library/jest-dom'

// Mock do localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
  removeItem: vi.fn(),
}
global.localStorage = localStorageMock

// Mock do window para eventos do DOM
global.window = {
  ...global.window,
  scrollTo: () => {},
}