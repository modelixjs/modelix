import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'], // входные файлы
  format: ['esm', 'cjs'],  // форматы сборки
  dts: true,               // генерировать типы
  sourcemap: true,         // sourcemap для отладки
  clean: true,             // очищать dist перед сборкой
  minify: true,            // минификация
  target: 'esnext',        // цель (es2020, es2019 и т.д.)
  outDir: 'dist',          // папка для сборки
  splitting: true,         // code splitting (для esm)
  treeshake: true,         // удаление неиспользуемого кода
  shims: true              // polyfill для ESM/CJS
})
