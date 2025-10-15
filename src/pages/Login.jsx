import React, { useEffect } from 'react'
import '../assets/css/styles.css'

        export default function Login() {
          useEffect(() => {
    import('../assets/js/scripts.js');

          }, []);
          return <div dangerouslySetInnerHTML={ { __html: `<!-- HEADER -->
  <header>
    <div class="container header-inner">
      <h1 class="logo neon-title">Streaming Lab</h1>
      <nav>
        <ul class="nav-list">
          <li><a href="index.html">Inicio</a></li>
          <li><a href="register.html">Registro</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- LOGIN FORM -->
  <main class="container">
    <section class="card auth-card">
      <h2>Iniciar sesión</h2>
      <form id="loginForm" novalidate>
        <label for="email">Correo electrónico</label>
        <input id="email" name="email" type="email" required autocomplete="email" />
        <small class="error" id="emailError"></small>

        <label for="password">Contraseña</label>
        <input id="password" name="password" type="password" required autocomplete="current-password" minlength="6" />
        <small class="error" id="passwordError"></small>

        <button class="btn primary" type="submit">Entrar</button>
      </form>
      <p>¿No tienes cuenta? <a href="register.html">Regístrate</a></p>
    </section>
  </main>

  <!-- FOOTER -->
  <footer>
    <p>&copy; 2025 Streaming Lab</p>
  </footer>

  <script src="js/scripts.js"></script>` } } />
        }
