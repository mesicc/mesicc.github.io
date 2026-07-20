/* =========================================================
   HERO SEKCIJA — Kemal Mešić
   script.js — hamburger meni (otvaranje/zatvaranje na mobilnom)
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  if (!navToggle || !navLinks) return;

  const closeMenu = () => {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-active');
    navToggle.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  };

  // Klik na hamburger dugme otvara/zatvara meni
  navToggle.addEventListener('click', toggleMenu);

  // Klik na bilo koji link zatvara meni (korisno na mobilnom)
  navLinks.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  // Zatvori meni ako se ekran vrati na desktop širinu
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });

  // Zatvori meni na klik van njega
  document.addEventListener('click', (e) => {
    const isClickInside = navLinks.contains(e.target) || navToggle.contains(e.target);
    if (!isClickInside && navLinks.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Zatvori meni na taster Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
      closeMenu();
    }
  });

});