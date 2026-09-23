/**
 * AVIALAS S.A. — Landing Page
 * JavaScript vanilla mínimo: menú móvil, botón "volver arriba" y año del footer.
 */
(function () {
  'use strict';

  /* Menú de navegación móvil */
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    });

    /* Cerrar el menú al elegir un enlace (mobile) */
    mainNav.querySelectorAll('.main-nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
      });
    });
  }

  /* Botón "volver arriba" */
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* Año actual en el footer */
  var anioActual = document.getElementById('anio-actual');
  if (anioActual) {
    anioActual.textContent = String(new Date().getFullYear());
  }
})();
