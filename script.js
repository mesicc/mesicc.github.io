// ===== i18n Translations =====
const translations = {
  en: {
    navAbout: "About", navProjects: "Projects", navContact: "Contact", navCta: "Work with me",
    heroTag: "Web Developer · EE Student",
    heroLine1: "Engineering", heroLine2: "Digital", heroLine3: "Experiences.",
    heroSub: "Based in Sarajevo, crafting robust web solutions.",
    heroCta: "Work with me", heroProjects: "View Projects",
    aboutLabel: "About", aboutTitle1: "Who I ", aboutTitle2: "Am",
    aboutBio: "I'm a Web Developer and Electrical Engineering student at the Faculty of Electrical Engineering (ETF), University of Sarajevo. I focus on building scalable, high-performance web applications with modern technologies. My engineering background gives me a systematic approach to problem-solving, ensuring every project is built with precision and purpose.",
    aboutEtf: "Faculty of Electrical Engineering (ETF), University of Sarajevo",
    projectsLabel: "Work", projectsTitle1: "Featured ", projectsTitle2: "Projects",
    project1Title: "Una Pirates Rafting",
    project1Desc: "A full-featured adventure booking platform for rafting on the Una river. Multi-language support, route booking, and accommodation management.",
    project2Title: "Black Box Bihać",
    project2Desc: "A premium CrossFit gym showcase with dark-mode design, program listings, gallery, and membership registration.",
    visitSite: "Visit Site",
    contactLabel: "Contact", contactTitle1: "Let's ", contactTitle2: "Talk",
    contactIntro: "Have a project in mind or want to collaborate? Feel free to reach out — I'd love to hear from you.",
    contactPhone: "Phone", contactEmail: "Email",
    formName: "Name", formNamePlaceholder: "Your name",
    formEmail: "Email", formEmailPlaceholder: "your@email.com",
    formMessage: "Message", formMessagePlaceholder: "Tell me about your project...",
    formSend: "Send Message", formSending: "Sending...",
    formSuccess: "Message sent! I'll get back to you soon.",
    footerRights: "All rights reserved.", footerBuilt: "precision",
  },
  bs: {
    navAbout: "O meni", navProjects: "Projekti", navContact: "Kontakt", navCta: "Sarađujmo",
    heroTag: "Web Developer · Student EE",
    heroLine1: "Inženjering", heroLine2: "Digitalnih", heroLine3: "Iskustava.",
    heroSub: "Iz Sarajeva, kreiram robusna web rješenja.",
    heroCta: "Sarađujmo", heroProjects: "Pogledaj projekte",
    aboutLabel: "O meni", aboutTitle1: "Ko sam ", aboutTitle2: "Ja",
    aboutBio: "Ja sam Web Developer i student Elektrotehničkog fakulteta (ETF) Univerziteta u Sarajevu. Fokusiram se na izradu skalabilnih, visokoperformansnih web aplikacija koristeći moderne tehnologije. Moje inženjersko obrazovanje mi daje sistematičan pristup rješavanju problema, osiguravajući da svaki projekat bude izgrađen s preciznošću i svrhom.",
    aboutEtf: "Elektrotehnički fakultet (ETF), Univerzitet u Sarajevu",
    projectsLabel: "Rad", projectsTitle1: "Istaknuti ", projectsTitle2: "Projekti",
    project1Title: "Una Pirates Rafting",
    project1Desc: "Kompletna platforma za rezervaciju avanturističkog raftinga na rijeci Uni. Višejezična podrška, rezervacija ruta i upravljanje smještajem.",
    project2Title: "Black Box Bihać",
    project2Desc: "Premium prikaz CrossFit teretane sa tamnim dizajnom, listingom programa, galerijom i registracijom članstva.",
    visitSite: "Posjeti stranicu",
    contactLabel: "Kontakt", contactTitle1: "Hajmo ", contactTitle2: "Razgovarati",
    contactIntro: "Imate projekat na umu ili želite sarađivati? Slobodno me kontaktirajte — rado bih čuo od vas.",
    contactPhone: "Telefon", contactEmail: "Email",
    formName: "Ime", formNamePlaceholder: "Vaše ime",
    formEmail: "Email", formEmailPlaceholder: "vaš@email.com",
    formMessage: "Poruka", formMessagePlaceholder: "Recite mi o vašem projektu...",
    formSend: "Pošalji poruku", formSending: "Šaljem...",
    formSuccess: "Poruka poslana! Javit ću vam se uskoro.",
    footerRights: "Sva prava zadržana.", footerBuilt: "preciznošću",
  }
};

let currentLang = "en";

function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Update placeholders
  document.querySelectorAll("[data-placeholder-i18n]").forEach(el => {
    const key = el.getAttribute("data-placeholder-i18n");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Update about bio with highlighted ETF text
  const bioEl = document.getElementById("about-bio-text");
  if (bioEl) {
    const bio = t.aboutBio;
    const etf = t.aboutEtf;
    const parts = bio.split(etf);
    if (parts.length === 2) {
      bioEl.innerHTML = parts[0] + '<span class="text-accent">' + etf + '</span>' + parts[1];
    } else {
      bioEl.textContent = bio;
    }
  }

  // Update lang button labels
  const label = lang === "en" ? "BS" : "EN";
  document.getElementById("lang-label-desktop").textContent = label;
  document.getElementById("lang-label-mobile").textContent = label;
}

function toggleLang() {
  setLanguage(currentLang === "en" ? "bs" : "en");
}

// ===== Mouse Gradient =====
(function() {
  const el = document.getElementById("mouse-gradient");
  if (!el) return;
  let mx = 50, my = 50, cx = 50, cy = 50;

  window.addEventListener("mousemove", e => {
    mx = (e.clientX / window.innerWidth) * 100;
    my = (e.clientY / window.innerHeight) * 100;
  });

  function animate() {
    cx += (mx - cx) * 0.04;
    cy += (my - cy) * 0.04;
    el.style.background = `radial-gradient(ellipse 800px 600px at ${cx}% ${cy}%, hsl(255 85% 63% / 0.07) 0%, hsl(185 90% 55% / 0.03) 40%, transparent 70%)`;
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})();

// ===== Scroll-triggered fade-up animations =====
(function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "-50px" });

  document.querySelectorAll(".fade-up").forEach(el => observer.observe(el));
})();

// ===== Navbar scroll effect =====
(function() {
  const nav = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  });
})();

// ===== Mobile menu =====
(function() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const iconMenu = document.getElementById("icon-menu");
  const iconClose = document.getElementById("icon-close");
  let open = false;

  btn.addEventListener("click", () => {
    open = !open;
    menu.style.display = open ? "flex" : "none";
    iconMenu.style.display = open ? "none" : "block";
    iconClose.style.display = open ? "block" : "none";
  });

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      open = false;
      menu.style.display = "none";
      iconMenu.style.display = "block";
      iconClose.style.display = "none";
    });
  });
})();

// ===== Language toggle buttons =====
document.getElementById("lang-toggle-desktop").addEventListener("click", toggleLang);
document.getElementById("lang-toggle-mobile").addEventListener("click", toggleLang);

// ===== Contact form =====
(function() {
  const form = document.getElementById("contact-form");
  const submitBtn = form.querySelector("button[type='submit']");

  form.addEventListener("submit", e => {
    e.preventDefault();
    const t = translations[currentLang];
    submitBtn.disabled = true;
    submitBtn.innerHTML = t.formSending + ' <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4z"/><path d="m22 2-11 11"/></svg>';

    setTimeout(() => {
      // Show toast
      const toast = document.getElementById("toast");
      toast.textContent = t.formSuccess;
      toast.style.display = "block";
      setTimeout(() => { toast.style.display = "none"; }, 3000);

      // Reset form
      form.reset();
      submitBtn.disabled = false;
      submitBtn.innerHTML = t.formSend + ' <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4z"/><path d="m22 2-11 11"/></svg>';
    }, 1000);
  });
})();

// ===== Footer year =====
document.getElementById("footer-year").textContent = new Date().getFullYear();
