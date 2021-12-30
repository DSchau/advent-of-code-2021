import { defineConfig } from 'vite'

export default defineConfig({
  test: {
    testTimeout: 2000,
    coverage: {
      reporter: ['text', 'html'],
    },
  },
})
