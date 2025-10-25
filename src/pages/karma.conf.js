import path from 'node:path';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function (config) {
  config.set({
    basePath: path.resolve(__dirname),

    frameworks: ['vite', 'jasmine'],

    files: [
      { pattern: 'src/components/**/*.test.jsx', type: 'module' },
    ],

    preprocessors: {},

    // Configuración de Vite
    vite: {
      plugins: [react()],
      root: path.resolve(__dirname, 'src'),
      publicDir: false,
      server: {
        fs: {
          allow: [
            path.resolve(__dirname),
            path.resolve(__dirname, 'src'),
          ],
        },
      },
    },

    plugins: [
      'karma-vite',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage',
    ],

    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },

    browsers: ['ChromeHeadless'],
    singleRun: false,

    client: {
      jasmine: {
        random: false, 
      },
    },
  });
}
