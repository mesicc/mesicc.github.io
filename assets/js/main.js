/* =========================================================
   KEMAL MEŠIĆ — PORTFOLIO
   main.js — hamburger meni + fallback za slike projekata
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Hamburger meni (mobilni/tablet) ---------- */
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileBackdrop = document.getElementById('mobileBackdrop');
  const mobileMenuClose = document.getElementById('mobileMenuClose');

  const openMenu = () => {
    mobileMenu.classList.add('open');
    mobileBackdrop.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  };

  if (hamburgerBtn && mobileMenu && mobileBackdrop) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('open');
      isOpen ? closeMenu() : openMenu();
    });

    mobileMenuClose.addEventListener('click', closeMenu);
    mobileBackdrop.addEventListener('click', closeMenu);

    // Zatvori meni klikom na bilo koji link
    mobileMenu.querySelectorAll('.mobile-menu__link').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    // Zatvori meni na Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeMenu();
    });

    // Zatvori meni ako se prozor vrati na desktop širinu
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1200) closeMenu();
    });
  }

  /* ---------- Fallback za slike projekata koje još nisu dodate ----------
     Dok ne dodaš prave screenshotove (assets/project-*.png), umesto
     slomljene slike prikazuje se uredan placeholder sa naslovom projekta. */
  document.querySelectorAll('.project__image').forEach((img) => {
    img.addEventListener('error', () => {
      const title = img.closest('.project')?.querySelector('.project__title')?.textContent || 'COMING SOON';
      const placeholder = document.createElement('div');
      placeholder.className = 'project__image project__image--fallback';
      placeholder.style.height = img.offsetHeight ? img.offsetHeight + 'px' : '220px';
      placeholder.textContent = title;
      img.replaceWith(placeholder);
    }, { once: true });
  });

});