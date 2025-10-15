import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // o 'build', dependiendo de lo que quieras subir
  },
  base: './', // importante para que Amplify pueda servir los archivos con rutas relativas
});
