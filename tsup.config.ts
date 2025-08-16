import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'], // ESM-формат
  outExtension: () => ({ js: '.js' }), // Важно: меняем .mjs на .js
  dts: true,
  clean: true,
})
