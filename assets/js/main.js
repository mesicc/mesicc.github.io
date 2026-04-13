// ===========================================
// main.js — Kemal Mešić Portfolio
// ===========================================

// --- Navbar scroll efekat ---
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// --- Mobile menu ---
function toggleMobile() {
  const menu = document.getElementById('mobile-menu');
  const isOpen = menu.classList.contains('open');

  if (isOpen) {
    closeMobile();
  } else {
    menu.classList.add('open');
    navbar.classList.add('menu-open');
  }
}

function closeMobile() {
  document.getElementById('mobile-menu').classList.remove('open');
  navbar.classList.remove('menu-open');
}

// Zatvori meni klikom izvan njega
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) {
    closeMobile();
  }
});

// --- i18n ---
let currentLang = 'en';

const i18n = {
  en: {
    langLabel: 'BS',
    navCta: 'Work with me',
  },
  bs: {
    langLabel: 'EN',
    navCta: 'Sarađujmo',
  }
};

function toggleLang() {
  currentLang = currentLang === 'en' ? 'bs' : 'en';
  applyLang();
}

function applyLang() {
  const t = i18n[currentLang];

  // Lang label (desktop + mobile)
  const desktopLabel = document.getElementById('lang-label');
  const mobileLabel  = document.getElementById('lang-label-mobile');
  if (desktopLabel) desktopLabel.textContent = t.langLabel;
  if (mobileLabel)  mobileLabel.textContent  = t.langLabel;

  // CTA
  const navCta    = document.getElementById('nav-cta');
  const mobileCta = document.getElementById('mobile-cta');
  if (navCta)    navCta.textContent    = t.navCta;
  if (mobileCta) mobileCta.textContent = t.navCta;
}

// --- Smooth scroll ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});