/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    test: {
        environment: 'happy-dom',
        coverage: {
            reporter: ['text', 'json', 'html'],
            reportsDirectory: 'coverage',
            thresholds: {
                lines: 80,
                functions: 80,
                branches: 80,
                statements: 80,
            },
        },
    },
})
