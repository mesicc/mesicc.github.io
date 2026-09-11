/* ============================================================
   Kemal Mešić — Portfolio
   Vanilla JS: language switch (EN / BS), mobile nav, rendering
   ============================================================ */

/* ---------- Icons ---------- */
const CSS_ICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%231572B6' d='M1.5 0h21l-1.91 21.56L11.99 24l-8.56-2.44L1.5 0zm17.09 4.41H5.41l.24 2.66h10.5l-.24 2.66H8.62l.23 2.6h6.66l-.4 4.36-3.11.84-3.11-.84-.21-2.39H6.02l.42 4.72 5.56 1.54 5.57-1.54.76-8.48.26-2.67.4-4.46z'/%3E%3C/svg%3E";

const ICONS = {
  react: 'https://cdn.simpleicons.org/react',
  next: 'https://cdn.simpleicons.org/nextdotjs/ededed',
  js: 'https://cdn.simpleicons.org/javascript',
  ts: 'https://cdn.simpleicons.org/typescript',
  tw: 'https://cdn.simpleicons.org/tailwindcss',
  html: 'https://cdn.simpleicons.org/html5',
  css: CSS_ICON,
  sass: 'https://cdn.simpleicons.org/sass',
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
  { name: 'MySQL', icon: ICONS.mysql },
];

/* ---------- Project tag styles ---------- */
const TAGS = {
  react: { name: 'React', bg: '#0b2a3a', icon: ICONS.react },
  next: { name: 'Next JS', bg: '#1a1a1a', icon: ICONS.next },
  ts: { name: 'TypeScript', bg: '#0f2540', icon: ICONS.ts },
  tw: { name: 'Tailwind', bg: '#0f2f36', icon: ICONS.tw },
  mysql: { name: 'MySQL', bg: '#10222a', icon: ICONS.mysql },
  sass: { name: 'SCSS', bg: '#2a1330', icon: ICONS.sass },
  html: { name: 'HTML', bg: '#3a1a10', icon: ICONS.html },
  css: { name: 'CSS', bg: '#10203a', icon: ICONS.css },
};

/* ---------- Project data (images + links + tags) ---------- */
const PROJECTS = [
  {
    img: 'assets/images/project-coming-soon.webp',
    w: 900,
    h: 551,
    repo: '#',
    video: '#',
    tags: [TAGS.react, TAGS.ts, TAGS.tw],
  },
  {
    img: 'assets/images/project-blackbox.webp',
    w: 900,
    h: 508,
    repo: '#',
    video: '#',
    tags: [TAGS.next, TAGS.mysql, TAGS.sass],
  },
  {
    img: 'assets/images/project-unaavant.webp',
    w: 900,
    h: 507,
    repo: '#',
    video: '#',
    tags: [TAGS.react, TAGS.html, TAGS.css],
  },
  {
    img: 'assets/images/project-unapirates.webp',
    w: 900,
    h: 508,
    repo: '#',
    video: '#',
    tags: [TAGS.next, TAGS.ts, TAGS.mysql],
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
    sourceCode: 'SOURCE CODE',
    watchVideo: 'WATCH VIDEO',
    aboutText:
      'My name is Kemal Mešić, a Full Stack Developer based in Sarajevo. I work as a freelancer, building fast and well-designed web applications with React, Next.js, TypeScript and Tailwind. I enjoy taking projects from the first idea all the way to a finished product.',
    contactTagline: "Let's build something together.",
    contactHeading: 'Contact',
    metaDescription:
      'Full Stack Developer from Sarajevo, Bosnia and Herzegovina. I build fast, well-designed web apps with React, Next.js, TypeScript, Tailwind and MySQL.',
    projects: [
      {
        title: 'COMING SOON',
        desc: 'A landing page announcing a new project — a minimal design focused on the brand and the upcoming launch.',
      },
      {
        title: 'BLACKBOX BIHAĆ',
        desc: 'A website for a CrossFit and fitness gym — program overview, the team, and training sign-ups.',
      },
      {
        title: 'UNAAVANT',
        desc: 'A site for a rafting agency on the Una river — routes, skippers, gallery and online booking.',
      },
      {
        title: 'RAFTING ON THE UNA — UNA PIRATES',
        desc: 'A website for the Una Pirates rafting agency — routes, team-building packages and online reservations.',
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
    sourceCode: 'IZVORNI KOD',
    watchVideo: 'POGLEDAJ VIDEO',
    aboutText:
      'Zovem se Kemal Mešić, Full Stack Developer iz Sarajeva. Radim kao freelancer, gradim brze i dobro dizajnirane web aplikacije koristeći React, Next.js, TypeScript i Tailwind. Volim raditi na projektima od ideje do gotovog proizvoda.',
    contactTagline: 'Napravimo nešto zajedno.',
    contactHeading: 'Kontakt',
    metaDescription:
      'Full Stack Developer iz Sarajeva, Bosna i Hercegovina. Gradim brze i dobro dizajnirane web aplikacije s React, Next.js, TypeScript, Tailwind i MySQL.',
    projects: [
      {
        title: 'COMING SOON',
        desc: 'Landing stranica za najavu novog projekta — minimalan dizajn u fokusu na brend i najavu lansiranja.',
      },
      {
        title: 'BLACKBOX BIHAĆ',
        desc: 'Web stranica za CrossFit i fitness teretanu — prezentacija programa, tim i prijava na treninge.',
      },
      {
        title: 'UNAAVANT',
        desc: 'Stranica za rafting agenciju na rijeci Uni — rute, skiperi, galerija i online rezervacije.',
      },
      {
        title: 'RAFTING NA UNI — UNA PIRATES',
        desc: 'Web stranica za rafting agenciju Una Pirates — rute, team building ponuda i online rezervacija.',
      },
    ],
  },
};

const GITHUB_SVG =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="#ededed"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05a9.3 9.3 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.81-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>';

const PLAY_SVG =
  '<svg width="16" height="16" viewBox="0 0 24 24" fill="#ededed"><path d="M8 5v14l11-7z"/></svg>';

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
          <i style="background-image:url(${t.icon})"></i>${t.name}
        </span>`
      )
      .join('');

    return `
      <div class="project">
        <div class="project-media">
          <img src="${p.img}" alt="${copy.title}" width="${p.w}" height="${p.h}" loading="lazy" decoding="async">
          <a class="project-link" href="${p.repo}" target="_blank" rel="noopener">${EXTERNAL_SVG}</a>
        </div>
        <h3 class="project-title">${copy.title}</h3>
        <p class="project-desc">${copy.desc}</p>
        <div class="project-tags">${tags}</div>
        <div class="project-actions">
          <a class="btn" href="${p.repo}" target="_blank" rel="noopener">${GITHUB_SVG}${s.sourceCode}</a>
          <a class="btn" href="${p.video}" target="_blank" rel="noopener">${PLAY_SVG}${s.watchVideo}</a>
        </div>
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
