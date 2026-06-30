(function () {
  const APP_STORE = {
    en: "https://apps.apple.com/jp/app/symptomtrack/id6751636595?l=en-US",
    es: "https://apps.apple.com/jp/app/symptomtrack/id6751636595?l=es-ES",
  };

  const STRINGS = {
    en: {
      metaDescription:
        "Babenberg — external memory for symptoms and medications. Low friction, private, built for neurodivergent minds.",
      tagline:
        "Babenberg is a health diary on iPhone that helps you record with little effort the intensity of what you feel, the specific moments of the day, your medication, and your sleep, so you have a clear history when you visit the doctor and rely less on memory.",
      sub: "Free for daily tracking · Premium for PDF export, health card, and profiles",
      download: "Download on the App Store",
      whatTitle: "What you can do",
      f1: "Log symptoms with sliders and quick buttons",
      f2: "Track medications, intakes, and reminders",
      f3: "Review history and spot patterns over time",
      f4: "Notes, sleep, and temperature in one place",
      f5: "Your health data stays on your device",
      shotsTitle: "Screenshots",
      shotsHint: "Swipe horizontally to see more",
      whoTitle: "Who is it for?",
      whoBody:
        "Built with neurodivergent users in mind (ADHD, autism, and similar needs) but useful for everyone. Built with simplicity, continuity, less friction.",
      tiersTitle: "Free vs Premium",
      freeTitle: "Free",
      free1: "Symptoms, medications, and alarms",
      free2: "History, charts, and daily tracking",
      free3: "User profile and health info — no full-app lock",
      premiumTitle: "Premium",
      premium1: "Export activity history (PDF)",
      premium2: "User health card: view, PDF, and QR",
      premium3: "Multiple profiles (up to 6)",
      tierNote: "No subscription required to keep using Babenberg every day.",
      videoTitle: "Video",
      helpTitle: "Help & manual",
      helpBody: "User guide will be published here.",
      legalPrivacy: "Privacy & Terms",
      contact: "Contact",
      disclaimer:
        "Babenberg does not provide medical advice. Always consult a healthcare professional.",
      copyright: "© Babenberg Studies",
    },
    es: {
      metaDescription:
        "Babenberg — memoria externa para síntomas y medicación. Poca fricción, privada, pensada para mentes neurodivergentes.",
      tagline:
        "Babenberg es un diario de salud en el iPhone que te ayuda a registrar con poco esfuerzo la intensidad de lo que sientes, los momentos concretos del día, la medicación y el sueño, para que tengas un historial claro cuando visites al médico y no dependas tanto de la memoria.",
      sub: "Gratis para el día a día · Premium para PDF, ficha de salud y perfiles",
      download: "Descargar en App Store",
      whatTitle: "Qué puedes hacer",
      f1: "Registrar síntomas con sliders y botones rápidos",
      f2: "Llevar medicación, tomas y recordatorios",
      f3: "Revisar historial y ver patrones en el tiempo",
      f4: "Notas, sueño y temperatura en un solo sitio",
      f5: "Tus datos de salud permanecen en tu dispositivo",
      shotsTitle: "Capturas",
      shotsHint: "Desliza horizontalmente para ver más",
      whoTitle: "Para quién es",
      whoBody:
        "Pensada para personas neurodivergentes (TDAH, autismo y necesidades similares) pero útil para todos los usuarios. Construida para simplicidad, continuidad, y menos puntos de fricción.",
      tiersTitle: "Gratis vs Premium",
      freeTitle: "Gratis",
      free1: "Síntomas, medicación y alarmas",
      free2: "Historial, gráficos y seguimiento diario",
      free3: "Perfil de usuario e info de salud — sin bloqueo de la app",
      premiumTitle: "Premium",
      premium1: "Exportar historial de actividad (PDF)",
      premium2: "Ficha de salud: ver, PDF y QR",
      premium3: "Varios perfiles (hasta 6)",
      tierNote: "No hace falta suscripción para seguir usando Babenberg cada día.",
      videoTitle: "Vídeo",
      helpTitle: "Ayuda y manual",
      helpBody: "La guía de usuario se publicará aquí.",
      legalPrivacy: "Privacidad y términos",
      contact: "Contacto",
      disclaimer:
        "Babenberg no ofrece consejo médico. Consulta siempre con un profesional sanitario.",
      copyright: "© Babenberg Studies",
    },
  };

  const SCREENSHOT_COUNT = 10;

  const LEGAL_URL = "https://rvbservices.wixsite.com/babenberg-studies/legal";
  const CONTACT_EMAIL = "contact@babenberg-studies.com";

  const stored = localStorage.getItem("st-lang");
  let lang =
    stored === "en" || stored === "es"
      ? stored
      : navigator.language.startsWith("es")
        ? "es"
        : "en";

  function t(key) {
    return STRINGS[lang][key] || STRINGS.en[key] || "";
  }

  function renderShots() {
    const gallery = document.getElementById("shots-gallery");
    if (!gallery) return;
    gallery.innerHTML = "";
    gallery.setAttribute("aria-label", t("shotsTitle"));
    for (let i = 1; i <= SCREENSHOT_COUNT; i += 1) {
      const num = String(i).padStart(2, "0");
      const wrap = document.createElement("div");
      wrap.className = "shot";
      wrap.setAttribute("role", "group");
      wrap.setAttribute("aria-label", `${i} / ${SCREENSHOT_COUNT}`);
      const img = document.createElement("img");
      img.src = `assets/screenshots/${lang}/${num}.png`;
      img.alt = `Babenberg screenshot ${i}`;
      img.loading = i <= 2 ? "eager" : "lazy";
      wrap.appendChild(img);
      gallery.appendChild(wrap);
    }
    gallery.scrollLeft = 0;
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = "Babenberg";
    document.querySelector('meta[name="description"]')?.setAttribute("content", t("metaDescription"));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key) el.textContent = t(key);
    });

    document.querySelectorAll(".btn-app-store").forEach((a) => {
      a.href = APP_STORE[lang];
    });

    document.getElementById("btn-en")?.classList.toggle("active", lang === "en");
    document.getElementById("btn-es")?.classList.toggle("active", lang === "es");

    renderShots();
  }

  document.getElementById("btn-en")?.addEventListener("click", () => {
    lang = "en";
    localStorage.setItem("st-lang", lang);
    applyLang();
  });

  document.getElementById("btn-es")?.addEventListener("click", () => {
    lang = "es";
    localStorage.setItem("st-lang", lang);
    applyLang();
  });

  const legal = document.getElementById("legal-link");
  if (legal) legal.href = LEGAL_URL;

  const contact = document.getElementById("contact-link");
  if (contact) contact.href = "mailto:" + CONTACT_EMAIL;

  applyLang();
})();
