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

// --- Project cards touch toggle (mobile) ---
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', function (e) {
    if (e.target.closest('.project-visit')) return;
    this.classList.toggle('touch-active');
    document.querySelectorAll('.project-card').forEach(other => {
      if (other !== this) other.classList.remove('touch-active');
    });
  });
});

// --- Contact forma submit ---
function handleContactSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('form-submit');
  const t = i18n[currentLang];
  btn.textContent = t.formSending;
  btn.disabled = true;

  setTimeout(() => {
    alert(t.formSuccess);
    e.target.reset();
    btn.innerHTML = `${t.formSend} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`;
    btn.disabled = false;
  }, 1000);
}

// --- i18n ---
let currentLang = 'en';

const i18n = {
  en: {
    // Navbar
    langLabel:      'BS',
    navAbout:       'About',
    navProjects:    'Projects',
    navContact:     'Contact',
    navCta:         'Work with me',

    // Hero
    heroTag:        'Web Developer · Electrical Engineering Student',
    heroL1:         'Building',
    heroL2:         'Robust',
    heroL3:         'Applications.',
    heroSub:        'Based in Sarajevo — precision, quality, results.',
    heroCta:        'Work with me',
    heroProjects:   'View Projects',

    // About
    aboutLabel:     'About',
    aboutTitle:     'Get to Know',
    aboutTitleGrad: 'Me',
    bioRole:        'Web Developer',
    bioText:        `I'm a Web Developer and Electrical Engineering student at the <a href="https://etf.unsa.ba" target="_blank" class="bio-highlight">Faculty of Electrical Engineering (ETF), University of Sarajevo</a>. I focus on building scalable, high-performance web applications with modern technologies. My engineering background gives me a systematic approach to problem-solving, ensuring every project is built with precision and purpose.`,
    eduLabel:       'Education',
    eduName:        'ETF Sarajevo',
    eduSub:         'Electrical Engineering Student',
    workLabel:      'Work',
    workName:       'Freelance Web Developer',
    workSub:        'November 2025 – Present',
    skillsTitle:    'Skills & Technologies',

    // Projects
    projectsLabel:  'Work',
    projectsTitle:  'Featured',
    projectsTitleGrad: 'Projects',
    p1Name:         'Una Pirates Rafting',
    p1Desc:         'A full-featured adventure booking platform for rafting on the Una river. Multi-language support, route booking, and accommodation management.',
    p2Name:         'Black Box Bihać',
    p2Desc:         'A premium CrossFit gym showcase with dark-mode design, program listings, gallery, and membership registration.',
    visitSite:      'Visit Site',

    // Contact
    contactLabel:   'Contact',
    contactTitle:   "Let's",
    contactTitleGrad: 'Talk',
    contactIntro:   "Have a project in mind or want to collaborate? Feel free to reach out — I'd love to hear from you.",
    phoneLabel:     'Phone',
    emailLabel:     'Email',
    formNameLabel:  'Name',
    formNamePh:     'Your name',
    formEmailLabel: 'Email',
    formEmailPh:    'your@email.com',
    formMsgLabel:   'Message',
    formMsgPh:      'Tell me about your project...',
    formSend:       'Send Message',
    formSending:    'Sending...',
    formSuccess:    "Message sent! I'll get back to you soon.",

    // Footer
    footerRights:   'All rights reserved.',
    footerBuilt:    'precision',
  },

  bs: {
    // Navbar
    langLabel:      'EN',
    navAbout:       'O meni',
    navProjects:    'Projekti',
    navContact:     'Kontakt',
    navCta:         'Sarađujmo',

    // Hero
    heroTag:        'Web Developer · Student Elektrotehnike',
    heroL1:         'Razvoj',
    heroL2:         'Pouzdanih',
    heroL3:         'Aplikacija.',
    heroSub:        'Iz Sarajeva — preciznost, kvalitet, rezultati.',
    heroCta:        'Sarađujmo',
    heroProjects:   'Pogledaj projekte',

    // About
    aboutLabel:     'O meni',
    aboutTitle:     'Upoznajte',
    aboutTitleGrad: 'Me',
    bioRole:        'Web Developer',
    bioText:        `Ja sam Web Developer i student Elektrotehnike na <a href="https://etf.unsa.ba" target="_blank" class="bio-highlight">Elektrotehničkom fakultetu (ETF), Univerziteta u Sarajevu</a>. Fokusiram se na izradu skalabilnih, visoko-performantnih web aplikacija modernim tehnologijama. Moje inženjersko obrazovanje mi daje sistematičan pristup rješavanju problema, osiguravajući da svaki projekat bude izgrađen s preciznošću i svrhom.`,
    eduLabel:       'Obrazovanje',
    eduName:        'ETF Sarajevo',
    eduSub:         'Student Elektrotehnike',
    workLabel:      'Posao',
    workName:       'Freelance Web Developer',
    workSub:        'Novembar 2025 – Danas',
    skillsTitle:    'Vještine i Tehnologije',

    // Projects
    projectsLabel:  'Rad',
    projectsTitle:  'Istaknuti',
    projectsTitleGrad: 'Projekti',
    p1Name:         'Una Pirates Rafting',
    p1Desc:         'Kompletna platforma za rezervaciju avanturističkog raftinga na rijeci Uni. Višejezična podrška, rezervacija ruta i upravljanje smještajem.',
    p2Name:         'Black Box Bihać',
    p2Desc:         'Premium prikaz CrossFit teretane sa tamnim dizajnom, listingom programa, galerijom i registracijom članstva.',
    visitSite:      'Posjeti stranicu',

    // Contact
    contactLabel:   'Kontakt',
    contactTitle:   'Hajmo',
    contactTitleGrad: 'Razgovarati',
    contactIntro:   'Imate projekat na umu ili želite sarađivati? Slobodno me kontaktirajte — rado bih čuo od vas.',
    phoneLabel:     'Telefon',
    emailLabel:     'Email',
    formNameLabel:  'Ime',
    formNamePh:     'Vaše ime',
    formEmailLabel: 'Email',
    formEmailPh:    'vaš@email.com',
    formMsgLabel:   'Poruka',
    formMsgPh:      'Recite mi o vašem projektu...',
    formSend:       'Pošalji poruku',
    formSending:    'Šaljem...',
    formSuccess:    'Poruka poslana! Javit ću vam se uskoro.',

    // Footer
    footerRights:   'Sva prava zadržana.',
    footerBuilt:    'preciznošću',
  }
};

function toggleLang() {
  currentLang = currentLang === 'en' ? 'bs' : 'en';
  applyLang();
}

function applyLang() {
  const t = i18n[currentLang];

  // Helper
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setHTML = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };
  const setAttr = (id, attr, val) => { const el = document.getElementById(id); if (el) el.setAttribute(attr, val); };

  // Navbar
  set('lang-label', t.langLabel);
  set('lang-label-mobile', t.langLabel);
  set('nav-cta', t.navCta);
  set('mobile-cta', t.navCta);

  // Nav links (desktop + mobile)
  document.querySelectorAll('.nav-link').forEach((link, i) => {
    link.textContent = [t.navAbout, t.navProjects, t.navContact][i] ?? link.textContent;
  });
  document.querySelectorAll('.nav-mobile-link').forEach((link, i) => {
    link.textContent = [t.navAbout, t.navProjects, t.navContact][i] ?? link.textContent;
  });

  // Hero
  set('hero-tag', t.heroTag);
  set('hero-l1', t.heroL1);
  set('hero-l2', t.heroL2);
  set('hero-l3', t.heroL3);
  set('hero-sub', t.heroSub);
  set('hero-cta', t.heroCta);
  set('hero-projects', t.heroProjects);

  // About
  set('about-label', t.aboutLabel);
  set('about-title-text', t.aboutTitle);
  set('about-title-grad', t.aboutTitleGrad);
  set('bio-role', t.bioRole);
  setHTML('bio-text', t.bioText);
  set('edu-label', t.eduLabel);
  set('edu-name', t.eduName);
  set('edu-sub', t.eduSub);
  set('work-label', t.workLabel);
  set('work-name', t.workName);
  set('work-sub', t.workSub);
  set('skills-title', t.skillsTitle);

  // Projects
  set('projects-label', t.projectsLabel);
  set('projects-title-text', t.projectsTitle);
  set('projects-title-grad', t.projectsTitleGrad);
  set('p1-name', t.p1Name);
  set('p1-name-overlay', t.p1Name);
  set('p1-desc', t.p1Desc);
  set('p2-name', t.p2Name);
  set('p2-name-overlay', t.p2Name);
  set('p2-desc', t.p2Desc);
  document.querySelectorAll('.project-visit').forEach(el => {
    el.childNodes[0].textContent = t.visitSite + ' ';
  });

  // Contact
  set('contact-label', t.contactLabel);
  set('contact-title-text', t.contactTitle);
  set('contact-title-grad', t.contactTitleGrad);
  set('contact-intro', t.contactIntro);
  set('phone-label', t.phoneLabel);
  set('email-label', t.emailLabel);
  set('form-name-label', t.formNameLabel);
  setAttr('form-name', 'placeholder', t.formNamePh);
  set('form-email-label', t.formEmailLabel);
  setAttr('form-email', 'placeholder', t.formEmailPh);
  set('form-msg-label', t.formMsgLabel);
  setAttr('form-message', 'placeholder', t.formMsgPh);
  set('form-submit-text', t.formSend);

  // Footer
  set('footer-rights', t.footerRights);
  set('footer-built', t.footerBuilt);

  // HTML lang atribut
  document.documentElement.lang = currentLang;
}