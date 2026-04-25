var d = document;
var w = "https://tally.so/widgets/embed.js";
var SUPPORTED_LANGUAGES = ["es", "ca", "en"];
var DEFAULT_LANGUAGE = "en";
var LANGUAGE_STORAGE_KEY = "weekdish.language";

var TRANSLATIONS = {
  en: {
    meta: {
      title: "Weekdish - Your week of dishes, effortlessly planned",
      description:
        "Plan weekly meals with your partner and let Weekdish build your shopping list automatically. Native iOS app coming July 2026.",
      ogTitle: "Weekdish - Your week of dishes, effortlessly planned",
      ogDescription:
        "Plan meals together. Shop smarter. Native iOS, offline-first, real-time collaboration.",
      twitterTitle: "Weekdish - Your week of dishes, effortlessly planned",
      twitterDescription:
        "Plan meals together. Shop smarter. Native iOS, offline-first, real-time collaboration."
    },
    nav: {
      cta: "Join Waitlist"
    },
    hero: {
      eyebrow: "COMING SOON",
      title: "Plan your week.<br><em>Your shopping list builds itself.</em>",
      sub:
        "Stop juggling notes, recipes, and grocery lists. Weekdish turns your weekly meals into a complete shopping list - automatically. Built for couples who plan together.",
      button: "Join the Waitlist ->",
      meta: "Replaces your notes app, recipe app, and shopping list - in one place."
    },
    badges: {
      itemsReady: "24 items ready",
      weekList: "This week's list",
      mealAdded: "Em added a meal",
      justNow: "Just now"
    },
    problem: {
      label: "⚡ THE PROBLEM",
      title: "Meal planning is <em>two</em> separate, tedious tasks.",
      copy:
        "You plan meals in one place. Write your shopping list in another. Then fix it again at the store.<br><br>It's repetitive, messy, and takes way more time than it should.<br><br>Most apps solve only half of it. Weekdish connects everything.",
      cards: {
        time: {
          title: "50+ minutes every week",
          desc: "Planning meals + making the shopping list across separate apps, every single week."
        },
        apps: {
          title: "Apps that don't talk to each other",
          desc: "Your recipe app, notes app, and shopping app are all disconnected islands."
        },
        collab: {
          title: "Collaboration is an afterthought",
          desc: "Sharing a list via WhatsApp. Duplicate items. \"Did you add eggs?\" - every week."
        }
      }
    },
    features: {
      label: "✨ FEATURES",
      title: "One app. The complete flow.",
      sub: "From empty week to full fridge - without switching apps or retyping anything.",
      cards: {
        planner: {
          title: "Weekly Menu Planner",
          desc:
            "See your entire week at a glance. Plan meals in minutes, move things around effortlessly, and always know what's coming next.",
          tag: "Core Feature"
        },
        shopping: {
          title: "Smart Shopping List",
          desc:
            "Your list builds itself from your meals. Every ingredient, organized by aisle - ready when you are. No manual work."
        },
        collab: {
          title: "Real-Time Collaboration",
          desc:
            "Plan and shop together without the back-and-forth. Share your week, update in real time, and stay in sync."
        },
        ai: {
          title: "AI Recipe Images",
          desc:
            "Get meal ideas instantly and generate recipe visuals on-device. No cloud, no tracking - just helpful suggestions when you need them."
        },
        offline: {
          title: "Offline-First",
          desc:
            "Everything works without internet. Plan at the dinner table, shop in the basement. Syncs automatically when back online."
        },
        privacy: {
          title: "Privacy by Design",
          desc: "No ads. No tracking. No backend servers. Your data lives in your iCloud, encrypted end-to-end."
        }
      }
    },
    how: {
      label: "🗺️ HOW IT WORKS",
      title: "Three steps to a stress-free week",
      steps: {
        one: {
          title: "Plan your week",
          desc: "Choose your meals for the week. Drag, drop, and adjust - it takes minutes, not hours."
        },
        two: {
          title: "List generated instantly",
          desc: "Weekdish turns your meals into a complete shopping list - every ingredient, automatically organized."
        },
        three: {
          title: "Shop together",
          desc:
            "Share the list and shop together. Tick items off in real time and avoid duplicates or forgotten items."
        }
      }
    },
    proof: {
      one: "minutes saved<br>every week",
      two: "real-time sync<br>between devices",
      three: "automatic list<br>from your meals",
      four: "ads, trackers<br>or backend servers"
    },
    waitlist: {
      label: "🎁 EARLY ACCESS",
      title: "Start planning your week<br>the easy way.",
      sub:
        "Join the waitlist and get early access to Weekdish before launch. Be among the first to simplify your weekly routine.",
      iframeTitle: "Weekdish Waitlist",
      perks: {
        one: "Get access before public launch",
        two: "Help shape the product",
        three: "Exclusive early features",
        four: "No spam. Ever."
      }
    },
    success: {
      title: "You're on the list!",
      sub: "We'll send you an email as soon as Weekdish is ready."
    },
    footer: {
      launching: "LAUNCHING SOON",
      copy:
        "© 2026 Weekdish · Made with ❤️ by <a href=\"https://x.com/vcapilla\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:rgba(255,255,255,0.5); text-decoration:underline;\">@vcapilla</a> · weekdish.app",
      privacy: "Privacy Policy",
      contact: "Contact"
    }
  },
  es: {
    meta: {
      title: "Weekdish - Tu semana de platos, planificada sin esfuerzo",
      description:
        "Planifica tus comidas semanales con tu pareja y deja que Weekdish cree tu lista de la compra automáticamente. App nativa para iOS disponible en julio de 2026.",
      ogTitle: "Weekdish - Tu semana de platos, planificada sin esfuerzo",
      ogDescription:
        "Planificad comidas juntos. Comprad mejor. iOS nativo, offline-first y colaboración en tiempo real.",
      twitterTitle: "Weekdish - Tu semana de platos, planificada sin esfuerzo",
      twitterDescription:
        "Planificad comidas juntos. Comprad mejor. iOS nativo, offline-first y colaboración en tiempo real."
    },
    nav: {
      cta: "Unirme a la lista"
    },
    hero: {
      eyebrow: "PRÓXIMAMENTE",
      title: "Planifica tu semana.<br><em>Tu lista de la compra se crea sola.</em>",
      sub:
        "Deja de saltar entre notas, recetas y listas de la compra. Weekdish convierte tus comidas semanales en una lista completa - automáticamente. Diseñada para parejas que planifican juntas.",
      button: "Unirme a la lista ->",
      meta: "Sustituye tu app de notas, recetas y lista de la compra - en un solo lugar."
    },
    badges: {
      itemsReady: "24 productos listos",
      weekList: "Lista de esta semana",
      mealAdded: "Em añadió una comida",
      justNow: "Ahora mismo"
    },
    problem: {
      label: "⚡ EL PROBLEMA",
      title: "Planificar comidas son <em>dos</em> tareas tediosas y separadas.",
      copy:
        "Planificas comidas en un sitio. Escribes la lista de la compra en otro. Y luego la vuelves a corregir en la tienda.<br><br>Es repetitivo, caótico y lleva mucho más tiempo del que debería.<br><br>La mayoría de apps solo resuelven la mitad. Weekdish conecta todo.",
      cards: {
        time: {
          title: "50+ minutos cada semana",
          desc: "Planificar comidas + preparar la lista de la compra en apps separadas, semana tras semana."
        },
        apps: {
          title: "Apps que no se hablan entre sí",
          desc: "Tu app de recetas, notas y compra son islas desconectadas."
        },
        collab: {
          title: "Colaborar es un añadido tardío",
          desc: "Compartir una lista por WhatsApp. Productos duplicados. \"¿Has añadido huevos?\" - cada semana."
        }
      }
    },
    features: {
      label: "✨ FUNCIONES",
      title: "Una app. Todo el flujo completo.",
      sub: "De una semana vacía a la nevera llena - sin cambiar de app ni reescribir nada.",
      cards: {
        planner: {
          title: "Planificador semanal de menús",
          desc:
            "Ve toda tu semana de un vistazo. Planifica comidas en minutos, mueve platos fácilmente y ten siempre claro lo que viene.",
          tag: "Función principal"
        },
        shopping: {
          title: "Lista inteligente",
          desc:
            "Tu lista se crea sola a partir de tus comidas. Cada ingrediente organizado por pasillos - lista cuando tú lo estés. Sin trabajo manual."
        },
        collab: {
          title: "Colaboración en tiempo real",
          desc:
            "Planificad y comprad juntos sin idas y vueltas. Compartid la semana, actualizad en tiempo real y mantened todo sincronizado."
        },
        ai: {
          title: "Imágenes de recetas con IA",
          desc:
            "Obtén ideas de comidas al instante y genera imágenes de recetas en el dispositivo. Sin nube, sin tracking - solo sugerencias útiles cuando las necesites."
        },
        offline: {
          title: "Offline-First",
          desc:
            "Todo funciona sin internet. Planifica en la mesa, compra en el sótano. Se sincroniza automáticamente al volver a tener conexión."
        },
        privacy: {
          title: "Privacidad desde el diseño",
          desc: "Sin anuncios. Sin rastreo. Sin servidores backend. Tus datos viven en tu iCloud, cifrados de extremo a extremo."
        }
      }
    },
    how: {
      label: "🗺️ CÓMO FUNCIONA",
      title: "Tres pasos para una semana sin estrés",
      steps: {
        one: {
          title: "Planifica tu semana",
          desc: "Elige tus comidas de la semana. Arrastra, suelta y ajusta - tardas minutos, no horas."
        },
        two: {
          title: "Lista generada al instante",
          desc:
            "Weekdish convierte tus comidas en una lista completa de la compra - cada ingrediente, organizado automáticamente."
        },
        three: {
          title: "Comprad juntos",
          desc: "Comparte la lista y comprad juntos. Marca productos en tiempo real y evita duplicados u olvidos."
        }
      }
    },
    proof: {
      one: "minutos ahorrados<br>cada semana",
      two: "sincronización en tiempo real<br>entre dispositivos",
      three: "lista automática<br>desde tus comidas",
      four: "anuncios, trackers<br>o servidores backend"
    },
    waitlist: {
      label: "🎁 ACCESO ANTICIPADO",
      title: "Empieza a planificar tu semana<br>de forma fácil.",
      sub:
        "Únete a la lista de espera y consigue acceso anticipado a Weekdish antes del lanzamiento. Sé de las primeras personas en simplificar tu rutina semanal.",
      iframeTitle: "Lista de espera de Weekdish",
      perks: {
        one: "Acceso antes del lanzamiento público",
        two: "Ayuda a dar forma al producto",
        three: "Funciones exclusivas tempranas",
        four: "Sin spam. Nunca."
      }
    },
    success: {
      title: "¡Ya estás en la lista!",
      sub: "Te enviaremos un email en cuanto Weekdish esté lista."
    },
    footer: {
      launching: "LANZAMIENTO PRÓXIMO",
      copy:
        "© 2026 Weekdish · Hecho con ❤️ por <a href=\"https://x.com/vcapilla\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:rgba(255,255,255,0.5); text-decoration:underline;\">@vcapilla</a> · weekdish.app",
      privacy: "Política de privacidad",
      contact: "Contacto"
    }
  },
  ca: {
    meta: {
      title: "Weekdish - La teva setmana de plats, planificada sense esforç",
      description:
        "Planifica els àpats setmanals amb la teva parella i deixa que Weekdish creï la teva llista de la compra automàticament. App nativa per a iOS disponible al juliol de 2026.",
      ogTitle: "Weekdish - La teva setmana de plats, planificada sense esforç",
      ogDescription:
        "Planifiqueu àpats plegats. Compreu millor. iOS natiu, offline-first i col·laboració en temps real.",
      twitterTitle: "Weekdish - La teva setmana de plats, planificada sense esforç",
      twitterDescription:
        "Planifiqueu àpats plegats. Compreu millor. iOS natiu, offline-first i col·laboració en temps real."
    },
    nav: {
      cta: "Apuntar-me a la llista"
    },
    hero: {
      eyebrow: "AVIAT",
      title: "Planifica la teva setmana.<br><em>La teva llista de la compra es crea sola.</em>",
      sub:
        "Deixa de saltar entre notes, receptes i llistes de la compra. Weekdish converteix els teus àpats setmanals en una llista completa - automàticament. Dissenyada per a parelles que planifiquen plegades.",
      button: "Apuntar-me a la llista ->",
      meta: "Substitueix la teva app de notes, receptes i llista de la compra - en un únic lloc."
    },
    badges: {
      itemsReady: "24 productes a punt",
      weekList: "Llista d'aquesta setmana",
      mealAdded: "L'Em ha afegit un àpat",
      justNow: "Ara mateix"
    },
    problem: {
      label: "⚡ EL PROBLEMA",
      title: "Planificar àpats són <em>dues</em> tasques feixugues i separades.",
      copy:
        "Planifiques els àpats en un lloc. Escrius la llista de la compra en un altre. I després la tornes a corregir a la botiga.<br><br>És repetitiu, desordenat i ocupa molt més temps del que hauria.<br><br>La majoria d'apps només resolen la meitat. Weekdish ho connecta tot.",
      cards: {
        time: {
          title: "50+ minuts cada setmana",
          desc: "Planificar àpats + fer la llista de la compra en apps separades, setmana rere setmana."
        },
        apps: {
          title: "Apps que no es parlen entre elles",
          desc: "La teva app de receptes, notes i compra són illes desconnectades."
        },
        collab: {
          title: "La col·laboració és un afegit tardà",
          desc: "Compartir una llista per WhatsApp. Productes duplicats. \"Has afegit ous?\" - cada setmana."
        }
      }
    },
    features: {
      label: "✨ FUNCIONS",
      title: "Una app. Tot el flux complet.",
      sub: "D'una setmana buida a la nevera plena - sense canviar d'app ni reescriure res.",
      cards: {
        planner: {
          title: "Planificador setmanal de menús",
          desc:
            "Veu tota la setmana d'un cop d'ull. Planifica àpats en minuts, mou plats fàcilment i tingues sempre clar què ve després.",
          tag: "Funció principal"
        },
        shopping: {
          title: "Llista intel·ligent",
          desc:
            "La teva llista es crea sola a partir dels teus àpats. Cada ingredient organitzat per passadissos - llesta quan tu ho estiguis. Sense feina manual."
        },
        collab: {
          title: "Col·laboració en temps real",
          desc:
            "Planifiqueu i compreu plegats sense anar i venir. Compartiu la setmana, actualitzeu en temps real i manteniu-ho tot sincronitzat."
        },
        ai: {
          title: "Imatges de receptes amb IA",
          desc:
            "Obté idees d'àpats a l'instant i genera imatges de receptes al dispositiu. Sense núvol, sense tracking - només suggeriments útils quan els necessites."
        },
        offline: {
          title: "Offline-First",
          desc:
            "Tot funciona sense internet. Planifica a taula, compra al soterrani. Se sincronitza automàticament quan tornes a tenir connexió."
        },
        privacy: {
          title: "Privacitat des del disseny",
          desc:
            "Sense anuncis. Sense rastreig. Sense servidors backend. Les teves dades viuen al teu iCloud, xifrades d'extrem a extrem."
        }
      }
    },
    how: {
      label: "🗺️ COM FUNCIONA",
      title: "Tres passos per a una setmana sense estrès",
      steps: {
        one: {
          title: "Planifica la teva setmana",
          desc: "Tria els teus àpats de la setmana. Arrossega, deixa anar i ajusta - trigues minuts, no hores."
        },
        two: {
          title: "Llista generada a l'instant",
          desc: "Weekdish converteix els teus àpats en una llista completa de la compra - cada ingredient, organitzat automàticament."
        },
        three: {
          title: "Compreu plegats",
          desc: "Comparteix la llista i compreu plegats. Marca productes en temps real i evita duplicats o oblits."
        }
      }
    },
    proof: {
      one: "minuts estalviats<br>cada setmana",
      two: "sincronització en temps real<br>entre dispositius",
      three: "llista automàtica<br>a partir dels teus àpats",
      four: "anuncis, trackers<br>o servidors backend"
    },
    waitlist: {
      label: "🎁 ACCÉS ANTICIPAT",
      title: "Comença a planificar la teva setmana<br>de manera fàcil.",
      sub:
        "Uneix-te a la llista d'espera i aconsegueix accés anticipat a Weekdish abans del llançament. Sigues de les primeres persones a simplificar la teva rutina setmanal.",
      iframeTitle: "Llista d'espera de Weekdish",
      perks: {
        one: "Accés abans del llançament públic",
        two: "Ajuda a donar forma al producte",
        three: "Funcions exclusives primerenques",
        four: "Sense spam. Mai."
      }
    },
    success: {
      title: "Ja ets a la llista!",
      sub: "T'enviarem un correu tan aviat com Weekdish estigui a punt."
    },
    footer: {
      launching: "LLANÇAMENT AVIAT",
      copy:
        "© 2026 Weekdish · Fet amb ❤️ per <a href=\"https://x.com/vcapilla\" target=\"_blank\" rel=\"noopener noreferrer\" style=\"color:rgba(255,255,255,0.5); text-decoration:underline;\">@vcapilla</a> · weekdish.app",
      privacy: "Política de privacitat",
      contact: "Contacte"
    }
  }
};

function getNestedTranslation(language, keyPath) {
  var current = TRANSLATIONS[language];
  var keys = keyPath.split(".");
  for (var i = 0; i < keys.length; i += 1) {
    if (!current || typeof current !== "object") {
      return null;
    }
    current = current[keys[i]];
  }
  return typeof current === "string" ? current : null;
}

function detectPreferredLanguage() {
  var browserLanguage = (navigator.language || "").toLowerCase();
  if (browserLanguage.indexOf("es") === 0) {
    return "es";
  }
  if (browserLanguage.indexOf("ca") === 0) {
    return "ca";
  }
  return DEFAULT_LANGUAGE;
}

function getInitialLanguage() {
  try {
    var storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage && SUPPORTED_LANGUAGES.indexOf(storedLanguage) !== -1) {
      return storedLanguage;
    }
  } catch (error) {
    // Ignore storage access issues and fall back to browser language.
  }
  return detectPreferredLanguage();
}

function setMetaTag(selector, content) {
  var node = document.querySelector(selector);
  if (node && content) {
    node.setAttribute("content", content);
  }
}

function applyTranslations(language) {
  var safeLanguage = SUPPORTED_LANGUAGES.indexOf(language) !== -1 ? language : DEFAULT_LANGUAGE;
  var dictionary = TRANSLATIONS[safeLanguage];

  if (!dictionary) {
    return;
  }

  document.documentElement.lang = safeLanguage;

  if (dictionary.meta) {
    document.title = dictionary.meta.title;
    setMetaTag('meta[name="description"]', dictionary.meta.description);
    setMetaTag('meta[property="og:title"]', dictionary.meta.ogTitle);
    setMetaTag('meta[property="og:description"]', dictionary.meta.ogDescription);
    setMetaTag('meta[name="twitter:title"]', dictionary.meta.twitterTitle);
    setMetaTag('meta[name="twitter:description"]', dictionary.meta.twitterDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach(function (element) {
    var key = element.getAttribute("data-i18n");
    var value = getNestedTranslation(safeLanguage, key);
    if (value) {
      element.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach(function (element) {
    var key = element.getAttribute("data-i18n-html");
    var value = getNestedTranslation(safeLanguage, key);
    if (value) {
      element.innerHTML = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(function (element) {
    var raw = element.getAttribute("data-i18n-attr");
    if (!raw) {
      return;
    }

    raw.split(";").forEach(function (pair) {
      var trimmedPair = pair.trim();
      if (!trimmedPair) {
        return;
      }

      var separatorIndex = trimmedPair.indexOf(":");
      if (separatorIndex === -1) {
        return;
      }

      var attrName = trimmedPair.slice(0, separatorIndex).trim();
      var key = trimmedPair.slice(separatorIndex + 1).trim();
      var value = getNestedTranslation(safeLanguage, key);

      if (attrName && value) {
        element.setAttribute(attrName, value);
      }
    });
  });

  var languageSwitcher = document.getElementById("language-switcher");
  if (languageSwitcher) {
    languageSwitcher.value = safeLanguage;
  }

  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, safeLanguage);
  } catch (error) {
    // Ignore storage access issues.
  }
}

var loadTallyEmbeds = function () {
  if (typeof Tally !== "undefined") {
    Tally.loadEmbeds();
  } else {
    d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach(function (el) {
      el.src = el.dataset.tallySrc;
    });
  }
};

if (typeof Tally !== "undefined") {
  loadTallyEmbeds();
} else if (d.querySelector('script[src="' + w + '"]') == null) {
  var s = d.createElement("script");
  s.src = w;
  s.onload = loadTallyEmbeds;
  s.onerror = loadTallyEmbeds;
  d.body.appendChild(s);
}

function showSuccess() {
  document.getElementById("waitlist-form-block").style.display = "none";
  document.getElementById("success-msg").classList.add("show");
}

var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll(".reveal").forEach(function (el) {
  observer.observe(el);
});

window.addEventListener("scroll", function () {
  document.getElementById("navbar").style.boxShadow =
    window.scrollY > 20 ? "0 4px 24px rgba(28,26,23,0.08)" : "none";
});

var initialLanguage = getInitialLanguage();
applyTranslations(initialLanguage);

var languageSwitcher = document.getElementById("language-switcher");
if (languageSwitcher) {
  languageSwitcher.addEventListener("change", function (event) {
    applyTranslations(event.target.value);
  });
}
