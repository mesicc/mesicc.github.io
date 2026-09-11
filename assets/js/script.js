/* ============================================================
   Kemal Mešić — Portfolio
   Vanilla JS: language switch (EN / BS), mobile nav, rendering
   ============================================================ */

/* ---------- Icons ---------- */
const CSS_ICON =
  "data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2224%22%20height=%2224%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22%231572B6%22%20d=%22M1.5%200h21l-1.91%2021.56L11.99%2024l-8.56-2.44L1.5%200zm17.09%204.41H5.41l.24%202.66h10.5l-.24%202.66H8.62l.23%202.6h6.66l-.4%204.36-3.11.84-3.11-.84-.21-2.39H6.02l.42%204.72%205.56%201.54%205.57-1.54.76-8.48.26-2.67.4-4.46z%22/%3E%3C/svg%3E";

const ICONS = {
  react: 'https://cdn.simpleicons.org/react',
  next: 'https://cdn.simpleicons.org/nextdotjs/ededed',
  js: 'https://cdn.simpleicons.org/javascript',
  ts: 'https://cdn.simpleicons.org/typescript',
  tw: 'https://cdn.simpleicons.org/tailwindcss',
  html: 'https://cdn.simpleicons.org/html5',
  css: CSS_ICON,
  sass: 'https://cdn.simpleicons.org/sass',
  php: 'https://cdn.simpleicons.org/php',
  mysql: 'https://cdn.simpleicons.org/mysql',
};

/* ---------- Tech stack ---------- */
const TECH = [
  { name: 'React', icon: ICONS.react },
  { name: 'Next JS', icon: ICONS.next },
  { name: 'JavaScript', icon: ICONS.js },
  { name: 'TypeScript', icon: ICONS.ts },
  { name: 'Tailwind', icon: ICONS.tw },
  { name: 'HTML', icon: ICONS.html },
  { name: 'CSS', icon: ICONS.css },
  { name: 'SCSS', icon: ICONS.sass },
  { name: 'PHP', icon: ICONS.php },
  { name: 'MySQL', icon: ICONS.mysql },
];

/* ---------- Project tag styles ---------- */
const TAGS = {
  react: { name: 'React', bg: '#0b2a3a', icon: ICONS.react },
  next: { name: 'Next JS', bg: '#1a1a1a', icon: ICONS.next },
  js: { name: 'JavaScript', bg: '#2e2a12', icon: ICONS.js },
  ts: { name: 'TypeScript', bg: '#0f2540', icon: ICONS.ts },
  tw: { name: 'Tailwind', bg: '#0f2f36', icon: ICONS.tw },
  php: { name: 'PHP', bg: '#1b1c2e', icon: ICONS.php },
  mysql: { name: 'MySQL', bg: '#10222a', icon: ICONS.mysql },
  sass: { name: 'SCSS', bg: '#2a1330', icon: ICONS.sass },
  html: { name: 'HTML', bg: '#3a1a10', icon: ICONS.html },
  css: { name: 'CSS', bg: '#10203a', icon: ICONS.css },
};

/* ---------- Project data (images + links + tags) ---------- */
const PROJECTS = [
  {
    img: 'assets/images/project-veseli-fit.webp',
    w: 900,
    h: 499,
    repo: 'https://veseli.fit',
    tags: [TAGS.html, TAGS.css, TAGS.js],
  },
  {
    img: 'assets/images/project-unaavant.webp',
    w: 900,
    h: 507,
    repo: 'https://raftingbihac.ba',
    tags: [TAGS.html, TAGS.css, TAGS.js, TAGS.php, TAGS.mysql],
  },
  {
    img: 'assets/images/project-unapirates.webp',
    w: 900,
    h: 508,
    repo: 'https://unapiratesrafting.com',
    tags: [TAGS.html, TAGS.css, TAGS.js, TAGS.php, TAGS.mysql],
  },
  {
    img: 'assets/images/project-blackbox.webp',
    w: 900,
    h: 505,
    repo: 'https://blackboxbihac.ba/',
    tags: [TAGS.html, TAGS.css, TAGS.js, TAGS.php, TAGS.mysql],
  },
];

/* ---------- Translations ---------- */
const STRINGS = {
  en: {
    langLabel: 'EN',
    language: 'LANGUAGE',
    navProjects: 'Projects',
    navTech: 'Tech Stack',
    navContact: 'Contact',
    navAbout: 'About Me',
    heroLine1: "Hey, I'm Kemal. I'm a Full Stack",
    heroLine2: 'Developer.',
    openToWork: 'Open to work',
    location: 'Sarajevo, Bosnia and Herzegovina.',
    projectsHeading: 'PROJECTS',
    techHeading: 'TECH STACK',
    aboutHeading: 'ABOUT ME',
    aboutText:
      'My name is Kemal Mešić, a Full Stack Developer based in Sarajevo. I work as a freelancer, building fast and well-designed web applications with React, Next.js, TypeScript and Tailwind. I enjoy taking projects from the first idea all the way to a finished product.',
    contactTagline: "Let's build something together.",
    contactHeading: 'Contact',
    metaDescription:
      'Full Stack Developer from Sarajevo, Bosnia and Herzegovina. I build fast, well-designed web apps with React, Next.js, TypeScript, Tailwind and MySQL.',
    projects: [
      {
        title: 'VESELI FIT',
        desc: 'A website for a personal trainer from Banja Luka — training programs, client transformations and online purchase of a coaching plan.',
      },
      {
        title: 'UNA AVANT RAFTING',
        desc: 'A web app for a rafting agency — full offer and online booking. The admin gets a complete overview, and clients receive an automated thank-you email after the trip.',
      },
      {
        title: 'UNA PIRATES RAFTING',
        desc: 'A web app for a rafting agency — bookings, a gallery and a 2D route map. The admin panel gives monthly and yearly revenue reports, and clients get a thank-you email after the trip.',
      },
      {
        title: 'BLACKBOX BIHAĆ',
        desc: 'A web app for a gym — member sign-up and class booking, plus an admin panel for revenue, attendance and goals. Home page with locations, contacts and a gallery.',
      },
    ],
  },
  bs: {
    langLabel: 'BS',
    language: 'JEZIK',
    navProjects: 'Projekti',
    navTech: 'Tehnologije',
    navContact: 'Kontakt',
    navAbout: 'O meni',
    heroLine1: 'Hej, ja sam Kemal. Full Stack',
    heroLine2: 'Developer.',
    openToWork: 'Otvoren za posao',
    location: 'Sarajevo, Bosna i Hercegovina.',
    projectsHeading: 'PROJEKTI',
    techHeading: 'TEHNOLOGIJE',
    aboutHeading: 'O MENI',
    aboutText:
      'Zovem se Kemal Mešić, Full Stack Developer iz Sarajeva. Radim kao freelancer, gradim brze i dobro dizajnirane web aplikacije koristeći React, Next.js, TypeScript i Tailwind. Volim raditi na projektima od ideje do gotovog proizvoda.',
    contactTagline: 'Napravimo nešto zajedno.',
    contactHeading: 'Kontakt',
    metaDescription:
      'Full Stack Developer iz Sarajeva, Bosna i Hercegovina. Gradim brze i dobro dizajnirane web aplikacije s React, Next.js, TypeScript, Tailwind i MySQL.',
    projects: [
      {
        title: 'VESELI FIT',
        desc: 'Web stranica za personalnog trenera iz Banje Luke — programi treninga, transformacije klijenata i online narudžba plana.',
      },
      {
        title: 'UNA AVANT RAFTING',
        desc: 'Web aplikacija za rafting agenciju — kompletna ponuda i online rezervacija. Admin ima puni pregled, a nakon ture klijentu automatski stiže zahvalnica na mail.',
      },
      {
        title: 'UNA PIRATES RAFTING',
        desc: 'Web aplikacija za rafting agenciju — rezervacije, galerija i 2D mapa ruta. Admin panel daje mjesečne i godišnje izvještaje o zaradi, a klijentu nakon ture ide zahvalnica na mail.',
      },
      {
        title: 'BLACKBOX BIHAĆ',
        desc: 'Web aplikacija za teretanu — prijava članova i rezervacija termina, uz admin panel za zaradu, prisustvo i ciljeve. Na početnoj su lokacije, kontakti i galerija.',
      },
    ],
  },
};

const EXTERNAL_SVG =
  '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#ededed" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>';

/* ---------- Rendering ---------- */
function renderTech() {
  const grid = document.getElementById('techGrid');
  grid.innerHTML = TECH.map(
    (t) => `
    <div class="tech-card">
      <div class="icon"><img src="${t.icon}" alt="" width="26" height="26" loading="lazy" decoding="async"></div>
      <span>${t.name}</span>
    </div>`
  ).join('');
}

function renderProjects(lang) {
  const s = STRINGS[lang];
  const grid = document.getElementById('projectsGrid');

  grid.innerHTML = PROJECTS.map((p, i) => {
    const copy = s.projects[i];
    const tags = p.tags
      .map(
        (t) => `
        <span class="tag" style="background:${t.bg}">
          <i style="background-image:url(&quot;${t.icon}&quot;)"></i>${t.name}
        </span>`
      )
      .join('');

    // Projekti bez linka (repo: '#') ostaju bez klika - da se ne otvara prazan tab.
    const url = p.repo && p.repo !== '#' ? p.repo : null;
    const img = `<img src="${p.img}" alt="${copy.title}" width="${p.w}" height="${p.h}" loading="lazy" decoding="async">`;
    const media = url
      ? `<a class="project-media-link" href="${url}" target="_blank" rel="noopener">${img}</a>
          <a class="project-link" href="${url}" target="_blank" rel="noopener" aria-label="${copy.title}">${EXTERNAL_SVG}</a>`
      : img;

    return `
      <div class="project">
        <div class="project-media">
          ${media}
        </div>
        <h3 class="project-title">${copy.title}</h3>
        <p class="project-desc">${copy.desc}</p>
        <div class="project-tags">${tags}</div>
      </div>`;
  }).join('');
}

/* ---------- SEO meta (drzi opise u skladu s jezikom) ---------- */
function updateMeta(s, lang) {
  const set = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute('content', value);
  };

  set('meta[name="description"]', s.metaDescription);
  set('meta[property="og:description"]', s.metaDescription);
  set('meta[name="twitter:description"]', s.metaDescription);
  set('meta[property="og:locale"]', lang === 'bs' ? 'bs_BA' : 'en_US');
  set('meta[property="og:locale:alternate"]', lang === 'bs' ? 'en_US' : 'bs_BA');
}

/* ---------- Language ---------- */
function applyLang(lang) {
  const s = STRINGS[lang] || STRINGS.en;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (s[key] !== undefined) el.textContent = s[key];
  });

  document.querySelectorAll('.mobile-lang-row button').forEach((b) => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  updateMeta(s, lang);
  renderProjects(lang);

  try {
    localStorage.setItem('km-portfolio-lang', lang);
  } catch (e) {
    /* storage unavailable */
  }
}

function initLang() {
  let lang = 'en';
  try {
    const saved = localStorage.getItem('km-portfolio-lang');
    if (saved === 'bs' || saved === 'en') lang = saved;
  } catch (e) {
    /* ignore */
  }

  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');

  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = langMenu.classList.toggle('open');
    langBtn.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-wrap')) {
      langMenu.classList.remove('open');
      langBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    btn.addEventListener('click', () => {
      applyLang(btn.dataset.lang);
      langMenu.classList.remove('open');
      closeMobileMenu();
    });
  });

  applyLang(lang);
}

/* ---------- Mobile nav ---------- */
const mobileMenu = () => document.getElementById('mobileMenu');
const backdrop = () => document.getElementById('mobileBackdrop');

function openMobileMenu() {
  mobileMenu().classList.add('open');
  backdrop().classList.add('open');
}

function closeMobileMenu() {
  mobileMenu().classList.remove('open');
  backdrop().classList.remove('open');
}

function initNav() {
  document.getElementById('hamburgerBtn').addEventListener('click', openMobileMenu);
  document.getElementById('closeBtn').addEventListener('click', closeMobileMenu);
  document.getElementById('mobileBackdrop').addEventListener('click', closeMobileMenu);

  document.querySelectorAll('.mobile-menu a').forEach((a) => {
    a.addEventListener('click', closeMobileMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileMenu();
  });
}

/* ---------- Init ---------- */
renderTech();
initNav();
initLang();
