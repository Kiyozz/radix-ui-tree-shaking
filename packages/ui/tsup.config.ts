import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    minify: false,
    format: 'esm',
    target: 'es2022',
    sourcemap: true,
    clean: false,
    entry: ['./src/*.{ts,tsx}', '!./src/*.d.ts'],
    outDir: 'dist',
    bundle: true,
    platform: 'browser',
    esbuildOptions(esOptions, _ctx) {
      esOptions.chunkNames = 'chunks/[name]-[hash]'
    },
    ...options,
  }
})
