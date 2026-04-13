// ===========================================
// main.js — Kemal Mešić Portfolio
// ===========================================

// --- Navbar scroll efekat ---
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
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

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target)) closeMobile();
});

// --- Mouse gradient ---
(function () {
  const el = document.getElementById('mouse-gradient');
  if (!el) return;
  let mx = 50, my = 50, cx = 50, cy = 50;

  window.addEventListener('mousemove', e => {
    mx = (e.clientX / window.innerWidth) * 100;
    my = (e.clientY / window.innerHeight) * 100;
  });

  (function animate() {
    cx += (mx - cx) * 0.04;
    cy += (my - cy) * 0.04;
    el.style.background = `radial-gradient(ellipse 800px 600px at ${cx}% ${cy}%, hsl(255 85% 63% / 0.07) 0%, hsl(185 90% 55% / 0.03) 40%, transparent 70%)`;
    requestAnimationFrame(animate);
  })();
})();

// --- Scroll reveal (fade-up) ---
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => revealObserver.observe(el));

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

// --- i18n ---
let currentLang = 'en';

const i18n = {
  en: {
    langLabel: 'BS', navCta: 'Work with me',
    heroTag: 'Web Developer · EE Student',
    heroL1: 'Engineering', heroL2: 'Digital', heroL3: 'Experiences.',
    heroSub: 'Based in Sarajevo, crafting robust web solutions.',
    heroCta: 'Work with me', heroProjects: 'View Projects',
  },
  bs: {
    langLabel: 'EN', navCta: 'Sarađujmo',
    heroTag: 'Web Developer · Student EE',
    heroL1: 'Inženjering', heroL2: 'Digitalnih', heroL3: 'Iskustava.',
    heroSub: 'Iz Sarajeva, kreiram robusna web rješenja.',
    heroCta: 'Sarađujmo', heroProjects: 'Pogledaj projekte',
  }
};

function toggleLang() {
  currentLang = currentLang === 'en' ? 'bs' : 'en';
  applyLang();
}

function applyLang() {
  const t = i18n[currentLang];
  const ids = {
    'lang-label': t.langLabel, 'lang-label-mobile': t.langLabel,
    'nav-cta': t.navCta, 'mobile-cta': t.navCta,
    'hero-tag': t.heroTag, 'hero-l1': t.heroL1,
    'hero-l2': t.heroL2, 'hero-l3': t.heroL3,
    'hero-sub': t.heroSub, 'hero-cta': t.heroCta,
    'hero-projects': t.heroProjects,
  };
  Object.entries(ids).forEach(([id, val]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  });
}