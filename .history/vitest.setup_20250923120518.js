import { vi } from 'vitest'
import '@testing-library/jest-dom'

// Mock do localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  clear: vi.fn(),
  removeItem: vi.fn(),
}

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

// Mock do window para eventos do DOM
Object.defineProperty(window, 'scrollTo', {
  value: () => {},
  writable: true
})