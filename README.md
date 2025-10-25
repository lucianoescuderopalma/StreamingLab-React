# Pruebas de Bootstrap en StreamingLab

Este README proporciona un tutorial completo para realizar pruebas en los componentes de **Bootstrap** dentro del proyecto **StreamingLab**, incluyendo configuración del entorno, pruebas unitarias, integración y verificación visual en la instancia EC2.

Antes de realizar pruebas, asegúrate de contar con Node.js v20.x o superior, npm v10.x o superior, proyecto **StreamingLab** desplegado localmente o en EC2, Bootstrap y react-bootstrap instalados con `npm install react-bootstrap bootstrap`, editor de código (VS Code, nano, vim, etc.) y navegador moderno (Chrome, Firefox).

Navega al directorio del proyecto con `cd ~/StreamingLab-React-main` y verifica que Bootstrap esté importado en `src/index.js` con `import 'bootstrap/dist/css/bootstrap.min.css';`. Revisa que los componentes de Bootstrap estén en `src/components/`, incluyendo `Navbar.js`, `ProductList.js`, `ShoppingCart.js` y `RegistrationForm.js`.

Para pruebas de UI y componentes, instala las herramientas necesarias con `npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest`. Si se utilizan Karma y Jasmine, ejecuta `npm install --save-dev karma karma-jasmine karma-chrome-launcher karma-coverage karma-vite`.

Configura Karma y Jasmine creando o editando `karma.conf.js` con el siguiente contenido:  

```javascript
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      'src/**/*.test.js'
    ],
    preprocessors: {
      'src/**/*.test.js': ['vite']
    },
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};

