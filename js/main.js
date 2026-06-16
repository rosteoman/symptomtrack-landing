(function () {
  const APP_STORE = {
    en: "https://apps.apple.com/jp/app/symptomtrack/id6751636595?l=en-US",
    es: "https://apps.apple.com/jp/app/symptomtrack/id6751636595?l=es-ES",
  };

  const STRINGS = {
    en: {
      metaDescription:
        "SymptomTrack — external memory for symptoms and medications. Low friction, private, built for neurodivergent minds.",
      tagline:
        "Your external memory for health. Track symptoms and medications with low friction.",
      sub: "Free for daily use · Premium for export and multiple profiles",
      download: "Download on the App Store",
      whatTitle: "What you can do",
      f1: "Log symptoms with sliders and quick buttons",
      f2: "Track medications, intakes, and reminders",
      f3: "Review history and spot patterns over time",
      f4: "Notes, sleep, and temperature in one place",
      f5: "Your health data stays on your device",
      shotsTitle: "Screenshots",
      shotCaption: "SymptomTrack on iPhone — add your App Store screenshots here",
      whoTitle: "Who it's for",
      whoBody:
        "Built with neurodivergent users in mind (ADHD, autism, and similar needs): simplicity, continuity, less cognitive load. Anyone who wants a clear record for their doctor can use it too.",
      whoCredit: "Created from lived experience — not a generic wellness app.",
      tiersTitle: "Free vs Premium",
      freeTitle: "Free",
      free1: "Symptoms, medications, alarms",
      free2: "History and daily tracking",
      free3: "No full-app lock",
      premiumTitle: "Premium",
      premium1: "Export history (MD, TXT, PDF)",
      premium2: "Multiple profiles (up to 6)",
      tierNote: "No subscription required to keep using SymptomTrack every day.",
      videoTitle: "Video",
      videoSoon: "Tutorial video coming soon.",
      helpTitle: "Help & manual",
      helpBody: "User guide will be published here.",
      legalPrivacy: "Privacy & Terms",
      contact: "Contact",
      disclaimer:
        "SymptomTrack does not provide medical advice. Always consult a healthcare professional.",
      copyright: "© Babenberg Studies",
    },
    es: {
      metaDescription:
        "SymptomTrack — memoria externa para síntomas y medicación. Poca fricción, privada, pensada para mentes neurodivergentes.",
      tagline:
        "Tu memoria externa de salud. Registra síntomas y medicación con poca fricción.",
      sub: "Gratis para el uso diario · Premium para exportar y perfiles",
      download: "Descargar en App Store",
      whatTitle: "Qué puedes hacer",
      f1: "Registrar síntomas con sliders y botones rápidos",
      f2: "Llevar medicación, tomas y recordatorios",
      f3: "Revisar historial y ver patrones en el tiempo",
      f4: "Notas, sueño y temperatura en un solo sitio",
      f5: "Tus datos de salud permanecen en tu dispositivo",
      shotsTitle: "Capturas",
      shotCaption: "SymptomTrack en iPhone — añade aquí tus capturas de App Store",
      whoTitle: "Para quién es",
      whoBody:
        "Pensada para personas neurodivergentes (TDAH, autismo y necesidades similares): simplicidad, continuidad, menos carga cognitiva. También sirve a quien quiera un registro claro para el médico.",
      whoCredit: "Creada desde experiencia vivida — no es una app genérica de bienestar.",
      tiersTitle: "Gratis vs Premium",
      freeTitle: "Gratis",
      free1: "Síntomas, medicación, alarmas",
      free2: "Historial y seguimiento diario",
      free3: "Sin bloqueo de la app",
      premiumTitle: "Premium",
      premium1: "Exportar historial (MD, TXT, PDF)",
      premium2: "Varios perfiles (hasta 6)",
      tierNote: "No hace falta suscripción para seguir usando SymptomTrack cada día.",
      videoTitle: "Vídeo",
      videoSoon: "Vídeo tutorial próximamente.",
      helpTitle: "Ayuda y manual",
      helpBody: "La guía de usuario se publicará aquí.",
      legalPrivacy: "Privacidad y términos",
      contact: "Contacto",
      disclaimer:
        "SymptomTrack no ofrece consejo médico. Consulta siempre con un profesional sanitario.",
      copyright: "© Babenberg Studies",
    },
  };

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

  function applyLang() {
    document.documentElement.lang = lang;
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
