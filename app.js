// ---------- СПИСОК ДОСТУПНЫХ ЯЗЫКОВ ----------
const LANGUAGES = {
  ru: { name: "Русский", flag: "🇷🇺", tesseract: "rus" },
  es: { name: "Español", flag: "🇪🇸", tesseract: "spa" },
  en: { name: "English", flag: "🇬🇧", tesseract: "eng" },
  fr: { name: "Français", flag: "🇫🇷", tesseract: "fra" },
  de: { name: "Deutsch", flag: "🇩🇪", tesseract: "deu" },
  it: { name: "Italiano", flag: "🇮🇹", tesseract: "ita" },
  pt: { name: "Português", flag: "🇵🇹", tesseract: "por" },
  zh: { name: "中文", flag: "🇨🇳", tesseract: "chi_sim" },
  ja: { name: "日本語", flag: "🇯🇵", tesseract: "jpn" },
  ar: { name: "العربية", flag: "🇸🇦", tesseract: "ara" },
};

// ---------- ЛОКАЛИЗАЦИЯ ИНТЕРФЕЙСА ----------
const UI_TRANSLATIONS = {
  ru: {
    title: "🌍 Переводчик",
    sub: "Введите текст в любой карточке",
    footer: "Ввод в любом поле → перевод в остальные",
    addBtn: "➕ Добавить язык",
    clear: "✖️ Очистить",
    remove: "🗑 Удалить",
    placeholder: "Введите текст...",
    photoBtn: "📷 Загрузить фото для перевода",
    cameraBtn: "📹 Живой перевод (камера)",
    cameraLoading: "Загружаю модель распознавания...",
    cameraReady: "Наведите камеру на текст",
    cameraScanning: "Распознаю текст...",
    cameraTranslating: "Перевожу...",
    cameraPaused: "Пауза",
    cameraError: "Не удалось получить доступ к камере",
    cameraNeedHttps: "Камера доступна только по https или на localhost",
    cameraNoText: "Текст не найден",
    ocrProcessing: "Распознаём текст...",
    ocrDone: "Текст распознан",
    ocrError: "Ошибка распознавания",
    copy: "📋 Копировать",
    copied: "✅ Скопировано",
    speak: "🔊 Озвучить",
    listen: "🎤 Диктовать",
    listening: "🎤 Слушаю...",
    noSpeech: "Речь не распознана",
    swap: "⇄ Поменять",
    noText: "Нет текста для копирования",
  },
  es: {
    title: "🌍 Traductor",
    sub: "Introduce texto en cualquier tarjeta",
    footer: "Entrada en cualquier campo → traducción en los demás",
    addBtn: "➕ Añadir idioma",
    clear: "✖️ Limpiar",
    remove: "🗑 Eliminar",
    placeholder: "Escribe texto...",
    photoBtn: "📷 Cargar foto para traducir",
    ocrProcessing: "Reconociendo texto...",
    ocrDone: "Texto reconocido",
    ocrError: "Error de reconocimiento",
    copy: "📋 Copiar",
    copied: "✅ Copiado",
    speak: "🔊 Escuchar",
    listen: "🎤 Dictar",
    listening: "🎤 Escuchando...",
    noSpeech: "No se reconoció el habla",
    swap: "⇄ Intercambiar",
    noText: "No hay texto para copiar",
  },
  en: {
    title: "🌍 Translator",
    sub: "Enter text in any card",
    footer: "Input in any field → translation in the others",
    addBtn: "➕ Add language",
    clear: "✖️ Clear",
    remove: "🗑 Remove",
    placeholder: "Type text...",
    photoBtn: "📷 Upload photo to translate",
    cameraBtn: "📹 Live translate (camera)",
    cameraLoading: "Loading recognition model...",
    cameraReady: "Point the camera at text",
    cameraScanning: "Recognizing text...",
    cameraTranslating: "Translating...",
    cameraPaused: "Paused",
    cameraError: "Could not access the camera",
    cameraNeedHttps: "Camera is available only over https or on localhost",
    cameraNoText: "No text found",
    ocrProcessing: "Recognizing text...",
    ocrDone: "Text recognized",
    ocrError: "Recognition error",
    copy: "📋 Copy",
    copied: "✅ Copied",
    speak: "🔊 Speak",
    listen: "🎤 Dictate",
    listening: "🎤 Listening...",
    noSpeech: "No speech recognized",
    swap: "⇄ Swap",
    noText: "No text to copy",
  },
  fr: {
    title: "🌍 Traducteur",
    sub: "Saisissez du texte dans n'importe quelle carte",
    footer: "Saisie dans un champ → traduction dans les autres",
    addBtn: "➕ Ajouter une langue",
    clear: "✖️ Effacer",
    remove: "🗑 Supprimer",
    placeholder: "Saisissez du texte...",
    photoBtn: "📷 Charger une photo à traduire",
    ocrProcessing: "Reconnaissance du texte...",
    ocrDone: "Texte reconnu",
    ocrError: "Erreur de reconnaissance",
    copy: "📋 Copier",
    copied: "✅ Copié",
    speak: "🔊 Écouter",
    listen: "🎤 Dicter",
    listening: "🎤 Écoute...",
    noSpeech: "Aucune parole reconnue",
    swap: "⇄ Échanger",
    noText: "Aucun texte à copier",
  },
  de: {
    title: "🌍 Übersetzer",
    sub: "Geben Sie Text in eine beliebige Karte ein",
    footer: "Eingabe in ein Feld → Übersetzung in die anderen",
    addBtn: "➕ Sprache hinzufügen",
    clear: "✖️ Löschen",
    remove: "🗑 Entfernen",
    placeholder: "Text eingeben...",
    photoBtn: "📷 Foto zum Übersetzen hochladen",
    ocrProcessing: "Text wird erkannt...",
    ocrDone: "Text erkannt",
    ocrError: "Fehler bei der Erkennung",
    copy: "📋 Kopieren",
    copied: "✅ Kopiert",
    speak: "🔊 Vorlesen",
    listen: "🎤 Diktieren",
    listening: "🎤 Höre zu...",
    noSpeech: "Keine Sprache erkannt",
    swap: "⇄ Tauschen",
    noText: "Kein Text zum Kopieren",
  },
  it: {
    title: "🌍 Traduttore",
    sub: "Inserisci il testo in qualsiasi scheda",
    footer: "Inserimento in qualsiasi campo → traduzione negli altri",
    addBtn: "➕ Aggiungi lingua",
    clear: "✖️ Cancella",
    remove: "🗑 Rimuovi",
    placeholder: "Inserisci testo...",
    photoBtn: "📷 Carica foto per tradurre",
    ocrProcessing: "Riconoscimento del testo...",
    ocrDone: "Testo riconosciuto",
    ocrError: "Errore di riconoscimento",
    copy: "📋 Copia",
    copied: "✅ Copiato",
    speak: "🔊 Ascolta",
    listen: "🎤 Dettatura",
    listening: "🎤 In ascolto...",
    noSpeech: "Nessun discorso riconosciuto",
    swap: "⇄ Scambia",
    noText: "Nessun testo da copiare",
  },
  pt: {
    title: "🌍 Tradutor",
    sub: "Digite texto em qualquer cartão",
    footer: "Entrada em qualquer campo → tradução nos outros",
    addBtn: "➕ Adicionar idioma",
    clear: "✖️ Limpar",
    remove: "🗑 Remover",
    placeholder: "Digite o texto...",
    photoBtn: "📷 Carregar foto para traduzir",
    ocrProcessing: "Reconhecendo texto...",
    ocrDone: "Texto reconhecido",
    ocrError: "Erro de reconhecimento",
    copy: "📋 Copiar",
    copied: "✅ Copiado",
    speak: "🔊 Ouvir",
    listen: "🎤 Ditar",
    listening: "🎤 Ouvindo...",
    noSpeech: "Nenhum discurso reconhecido",
    swap: "⇄ Trocar",
    noText: "Nenhum texto para copiar",
  },
  zh: {
    title: "🌍 翻译器",
    sub: "在任何卡片中输入文本",
    footer: "任何字段输入 → 其他字段翻译",
    addBtn: "➕ 添加语言",
    clear: "✖️ 清除",
    remove: "🗑 删除",
    placeholder: "输入文本...",
    photoBtn: "📷 上传照片进行翻译",
    ocrProcessing: "正在识别文本...",
    ocrDone: "文本已识别",
    ocrError: "识别错误",
    copy: "📋 复制",
    copied: "✅ 已复制",
    speak: "🔊 朗读",
    listen: "🎤 语音输入",
    listening: "🎤 聆听中...",
    noSpeech: "未识别到语音",
    swap: "⇄ 交换",
    noText: "没有可复制的文本",
  },
  ja: {
    title: "🌍 翻訳者",
    sub: "任意のカードにテキストを入力",
    footer: "任意のフィールド入力 → 他フィールド翻訳",
    addBtn: "➕ 言語を追加",
    clear: "✖️ クリア",
    remove: "🗑 削除",
    placeholder: "テキストを入力...",
    photoBtn: "📷 写真をアップロードして翻訳",
    ocrProcessing: "テキストを認識中...",
    ocrDone: "テキスト認識完了",
    ocrError: "認識エラー",
    copy: "📋 コピー",
    copied: "✅ コピー済み",
    speak: "🔊 音声再生",
    listen: "🎤 音声入力",
    listening: "🎤 聞いています...",
    noSpeech: "音声が認識されませんでした",
    swap: "⇄ 入れ替え",
    noText: "コピーするテキストがありません",
  },
  ar: {
    title: "🌍 مترجم",
    sub: "أدخل النص في أي بطاقة",
    footer: "إدخال في أي حقل → ترجمة في البقية",
    addBtn: "➕ إضافة لغة",
    clear: "✖️ مسح",
    remove: "🗑 حذف",
    placeholder: "أدخل النص...",
    photoBtn: "📷 تحميل صورة للترجمة",
    ocrProcessing: "جاري التعرف على النص...",
    ocrDone: "تم التعرف على النص",
    ocrError: "خطأ في التعرف",
    copy: "📋 نسخ",
    copied: "✅ تم النسخ",
    speak: "🔊 استمع",
    listen: "🎤 إملاء",
    listening: "🎤 جاري الاستماع...",
    noSpeech: "لم يتم التعرف على الكلام",
    swap: "⇄ تبديل",
    noText: "لا يوجد نص للنسخ",
  },
};

// ---------- СОСТОЯНИЕ ----------
let activeLanguages = ["ru", "es", "en"];
let currentUILang = "ru";
let sourceLang = "ru";
let isUpdating = false;
let timeoutId = null;
let translationCache = {};

// ---------- DOM ЭЛЕМЕНТЫ ----------
const cardsContainer = document.getElementById("cardsContainer");
const addLangSelect = document.getElementById("addLanguageSelect");
const addLangBtn = document.getElementById("addLangBtn");
const photoBtn = document.getElementById("photoBtn");
const cameraBtn = document.getElementById("cameraBtn");
const imageInput = document.getElementById("imageInput");
const ocrStatus = document.getElementById("ocrStatus");

const loadingIndicator = document.createElement("div");
loadingIndicator.className = "loading-indicator";
loadingIndicator.id = "loadingIndicator";
loadingIndicator.textContent = "🔄 Перевод...";
document.body.appendChild(loadingIndicator);

const uiElements = {
  title: document.getElementById("appTitle"),
  sub: document.getElementById("appSub"),
  footer: document.getElementById("appFooter"),
  addBtn: addLangBtn,
};

// ---------- ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ----------
function showLoading() {
  loadingIndicator.style.display = "block";
  setTimeout(() => (loadingIndicator.style.display = "none"), 600);
}

function getLanguageName(code) {
  return LANGUAGES[code]?.name || code;
}

function getFlag(code) {
  return LANGUAGES[code]?.flag || "🏳️";
}

function getUILang() {
  return currentUILang;
}

function getUI() {
  return { ...UI_TRANSLATIONS.en, ...(UI_TRANSLATIONS[currentUILang] || {}) };
}

function loadState() {
  try {
    const saved = localStorage.getItem("myTranslatorState");
    if (saved) {
      const state = JSON.parse(saved);
      if (Array.isArray(state.activeLanguages) && state.activeLanguages.length >= 2) {
        activeLanguages = state.activeLanguages;
      }
      if (UI_TRANSLATIONS[state.currentUILang]) {
        currentUILang = state.currentUILang;
      }
      if (state.sourceLang && LANGUAGES[state.sourceLang]) {
        sourceLang = state.sourceLang;
      }
    }
  } catch (e) {
    console.warn("Не удалось загрузить состояние", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(
      "myTranslatorState",
      JSON.stringify({
        activeLanguages,
        currentUILang,
        sourceLang,
      })
    );
  } catch (e) {
    console.warn("Не удалось сохранить состояние", e);
  }
}

// ---------- ПЕРЕВОД (БЕЗ КЛЮЧА) ----------
// Пытаемся сначала MyMemory, потом Lingva
async function translateWithMyMemory(text, from, to) {
  if (from === to) return text;
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("mymemory failed");
  const data = await res.json();
  if (data && data.responseData && data.responseData.translatedText) {
    return data.responseData.translatedText;
  }
  throw new Error("mymemory empty");
}

async function translateWithLingva(text, from, to) {
  if (from === to) return text;
  // Пробуем несколько публичных инстансов
  const instances = [
    "https://lingva.ml",
    "https://translate.plausibility.cloud",
    "https://lingva.pussthecat.org",
  ];
  for (const instance of instances) {
    try {
      const url = `${instance}/api/v1/${from}/${to}/${encodeURIComponent(text)}`;
      const res = await fetch(url);
      if (!res.ok) continue;
      const data = await res.json();
      if (data && data.translation) return data.translation;
    } catch (e) {
      continue;
    }
  }
  throw new Error("lingva failed");
}

async function translateText(text, sourceLangCode, targetLangCode) {
  if (!text.trim()) return "";
  if (sourceLangCode === targetLangCode) return text;

  const cacheKey = `${sourceLangCode}|${targetLangCode}|${text}`;
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }

  try {
    let result = await translateWithMyMemory(text, sourceLangCode, targetLangCode);
    translationCache[cacheKey] = result;
    return result;
  } catch (e1) {
    try {
      let result = await translateWithLingva(text, sourceLangCode, targetLangCode);
      translationCache[cacheKey] = result;
      return result;
    } catch (e2) {
      console.error("Все провайдеры перевода не сработали", e1, e2);
      // Последний фолбэк - пытаемся через Google gtx (как раньше)
      try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLangCode}&tl=${targetLangCode}&dt=t&q=${encodeURIComponent(text)}`;
        const response = await fetch(url);
        const data = await response.json();
        if (data && data[0] && data[0][0] && data[0][0][0]) {
          const res = data[0][0][0];
          translationCache[cacheKey] = res;
          return res;
        }
      } catch (e3) {
        console.error("Фолбэк Google также не сработал", e3);
      }
      return text;
    }
  }
}

// ---------- ОБНОВЛЕНИЕ КАРТОЧЕК ПРИ ВВОДЕ ----------
async function onTextChange(changedLangCode, newText) {
  if (isUpdating) return;
  if (timeoutId) clearTimeout(timeoutId);

  // Обновляем исходный язык если изменили
  sourceLang = changedLangCode;
  saveState();

  timeoutId = setTimeout(async () => {
    isUpdating = true;
    showLoading();

    try {
      if (!newText.trim()) {
        document.querySelectorAll(".lang-textarea").forEach((textarea) => {
          if (textarea.dataset.lang !== changedLangCode) {
            textarea.value = "";
          }
        });
        return;
      }

      const targetLanguages = activeLanguages.filter(
        (lang) => lang !== changedLangCode
      );
      const promises = targetLanguages.map(async (targetLang) => {
        const translated = await translateText(newText, changedLangCode, targetLang);
        return { lang: targetLang, text: translated };
      });

      const results = await Promise.all(promises);
      results.forEach(({ lang, text }) => {
        const textarea = document.querySelector(
          `.lang-textarea[data-lang="${lang}"]`
        );
        if (textarea) textarea.value = text;
      });
    } catch (err) {
      console.error("Ошибка:", err);
    } finally {
      isUpdating = false;
      timeoutId = null;
    }
  }, 400);
}

// ---------- ГОЛОСОВОЙ ВВОД ----------
function startVoiceInput(langCode) {
  const ui = UI_TRANSLATIONS[getUILang()] || UI_TRANSLATIONS.en;
  const textarea = document.querySelector(
    `.lang-textarea[data-lang="${langCode}"]`
  );
  if (!textarea) return;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    alert("Ваш браузер не поддерживает голосовой ввод.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = langCode;
  recognition.interimResults = false;
  recognition.continuous = false;

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    textarea.value = transcript;
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
  };

  recognition.onerror = (event) => {
    console.error("Ошибка распознавания:", event.error);
    if (event.error === "not-allowed") {
      alert("Пожалуйста, разрешите доступ к микрофону.");
    } else {
      alert(ui.noSpeech || "Ошибка распознавания речи");
    }
  };

  recognition.start();
}

// ---------- ОЗВУЧИВАНИЕ ТЕКСТА ----------
function speakText(langCode) {
  const textarea = document.querySelector(
    `.lang-textarea[data-lang="${langCode}"]`
  );
  if (!textarea || !textarea.value.trim()) return;

  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
  }

  const text = textarea.value.trim();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = langCode;

  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith(langCode));
  if (voice) utterance.voice = voice;

  window.speechSynthesis.speak(utterance);
}

// ---------- КОПИРОВАНИЕ ТЕКСТА ----------
function copyText(langCode, btn) {
  const ui = UI_TRANSLATIONS[getUILang()] || UI_TRANSLATIONS.en;
  const textarea = document.querySelector(
    `.lang-textarea[data-lang="${langCode}"]`
  );
  if (!textarea || !textarea.value.trim()) {
    if (btn) {
      const old = btn.innerHTML;
      btn.innerHTML = "❌";
      setTimeout(() => (btn.innerHTML = old), 800);
    }
    return;
  }

  const text = textarea.value.trim();
  navigator.clipboard
    .writeText(text)
    .then(() => {
      if (btn) {
        const old = btn.innerHTML;
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        setTimeout(() => (btn.innerHTML = old), 1000);
      }
    })
    .catch(() => {
      textarea.select();
      document.execCommand("copy");
      if (btn) {
        const old = btn.innerHTML;
        btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
        setTimeout(() => (btn.innerHTML = old), 1000);
      }
    });
}

// ---------- ПЕРЕВОД С ФОТОГРАФИИ ----------
function handlePhotoUpload() {
  const ui = UI_TRANSLATIONS[getUILang()] || UI_TRANSLATIONS.en;
  const activeTextarea =
    document.activeElement && document.activeElement.classList.contains("lang-textarea")
      ? document.activeElement
      : document.querySelector(".lang-textarea");

  if (!activeTextarea) {
    alert("Сначала выберите карточку (нажмите на поле ввода), куда вставить распознанный текст.");
    return;
  }

  const langCode = activeTextarea.dataset.lang;
  ocrStatus.textContent = ui.ocrProcessing;
  imageInput.click();

  imageInput.onchange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      ocrStatus.textContent = "";
      return;
    }

    try {
      const tessLang = LANGUAGES[langCode]?.tesseract || langCode;
      const result = await Tesseract.recognize(file, tessLang, {
        logger: (m) => {},
      });

      const recognizedText = result.data.text.trim();
      if (recognizedText) {
        activeTextarea.value = recognizedText;
        ocrStatus.textContent = ui.ocrDone;
        activeTextarea.dispatchEvent(new Event("input", { bubbles: true }));
        setTimeout(() => (ocrStatus.textContent = ""), 2000);
      } else {
        ocrStatus.textContent = ui.ocrError + ": текст не найден";
        setTimeout(() => (ocrStatus.textContent = ""), 2000);
      }
    } catch (error) {
      console.error("Ошибка OCR:", error);
      ocrStatus.textContent = ui.ocrError;
      setTimeout(() => (ocrStatus.textContent = ""), 2000);
    } finally {
      imageInput.value = "";
    }
  };
}

// ---------- РЕНДЕРИНГ КАРТОЧЕК ----------
function renderCards() {
  cardsContainer.innerHTML = "";
  const ui = UI_TRANSLATIONS[getUILang()] || UI_TRANSLATIONS.en;

  activeLanguages.forEach((langCode) => {
    const card = document.createElement("div");
    card.className = "lang-card";
    if (langCode === "ar") {
      card.classList.add("rtl");
    }
    card.dataset.lang = langCode;

    const header = document.createElement("div");
    header.className = "card-header";
    header.innerHTML = `
            <div class="lang-name">
                <span class="flag">${getFlag(langCode)}</span>
                ${getLanguageName(langCode)}
            </div>
            <div class="badge">${langCode.toUpperCase()}</div>
        `;
    card.appendChild(header);

    const inputArea = document.createElement("div");
    inputArea.className = "input-area";
    const textarea = document.createElement("textarea");
    textarea.rows = 2;
    textarea.className = "lang-textarea";
    textarea.dataset.lang = langCode;
    textarea.placeholder = ui.placeholder;
    if (langCode === "ar") {
      textarea.dir = "rtl";
    }
    textarea.addEventListener("input", (e) => {
      onTextChange(langCode, e.target.value);
    });
    inputArea.appendChild(textarea);
    card.appendChild(inputArea);

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const clearBtn = document.createElement("button");
    clearBtn.textContent = ui.clear;
    clearBtn.addEventListener("click", () => {
      textarea.value = "";
      onTextChange(langCode, "");
    });
    actions.appendChild(clearBtn);

    const copyBtn = document.createElement("button");
    copyBtn.className = "action-btn";
    copyBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    copyBtn.title = ui.copy;
    copyBtn.addEventListener("click", () => copyText(langCode, copyBtn));
    actions.appendChild(copyBtn);

    const speakBtn = document.createElement("button");
    speakBtn.className = "action-btn";
    speakBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>';
    speakBtn.title = ui.speak;
    speakBtn.addEventListener("click", () => speakText(langCode));
    actions.appendChild(speakBtn);

    const listenBtn = document.createElement("button");
    listenBtn.className = "action-btn";
    listenBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>';
    listenBtn.title = ui.listen;
    listenBtn.addEventListener("click", () => startVoiceInput(langCode));
    actions.appendChild(listenBtn);

    if (activeLanguages.length > 2) {
      const removeBtn = document.createElement("button");
      removeBtn.className = "remove-btn";
      removeBtn.textContent = ui.remove;
      removeBtn.addEventListener("click", () => {
        if (activeLanguages.length > 2) {
          activeLanguages = activeLanguages.filter((l) => l !== langCode);
          saveState();
          renderCards();
          updateLanguageSelect();
        }
      });
      actions.appendChild(removeBtn);
    }

    card.appendChild(actions);
    cardsContainer.appendChild(card);
  });

  updatePlaceholders();
}

function updatePlaceholders() {
  const ui = UI_TRANSLATIONS[getUILang()] || UI_TRANSLATIONS.en;
  document.querySelectorAll(".lang-textarea").forEach((textarea) => {
    textarea.placeholder = ui.placeholder;
  });
}

function updateLanguageSelect() {
  const select = addLangSelect;
  const available = Object.keys(LANGUAGES).filter(
    (code) => !activeLanguages.includes(code)
  );
  select.innerHTML = "";
  available.forEach((code) => {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = `${LANGUAGES[code].flag} ${LANGUAGES[code].name}`;
    select.appendChild(option);
  });
  addLangBtn.disabled = available.length === 0;
}

function addLanguage() {
  const code = addLangSelect.value;
  if (!code || activeLanguages.includes(code)) return;
  activeLanguages.push(code);
  saveState();
  renderCards();
  updateLanguageSelect();
  const cards = document.querySelectorAll(".lang-card");
  if (cards.length > 0) {
    cards[cards.length - 1].scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}

function setUILanguage(lang) {
  if (!UI_TRANSLATIONS[lang]) {
    lang = "en";
  }
  currentUILang = lang;
  saveState();
  const t = UI_TRANSLATIONS[lang];
  uiElements.title.textContent = t.title;
  uiElements.sub.textContent = t.sub;
  uiElements.footer.textContent = t.footer;
  uiElements.addBtn.textContent = t.addBtn;
  if (photoBtn) photoBtn.textContent = t.photoBtn;
  if (cameraBtn) cameraBtn.textContent = t.cameraBtn || UI_TRANSLATIONS.en.cameraBtn;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderCards();
  updateLanguageSelect();
}

// ---------- ЖИВОЙ ПЕРЕВОД С КАМЕРЫ ----------
const cameraModal = document.getElementById("cameraModal");
const cameraStage = document.getElementById("cameraStage");
const cameraVideo = document.getElementById("cameraVideo");
const cameraOverlay = document.getElementById("cameraOverlay");
const cameraSourceSelect = document.getElementById("cameraSource");
const cameraTargetSelect = document.getElementById("cameraTarget");
const cameraStatus = document.getElementById("cameraStatus");
const cameraPauseBtn = document.getElementById("cameraPause");
const cameraCloseBtn = document.getElementById("cameraClose");

const camera = {
  stream: null,
  worker: null,
  workerLang: null,
  active: false,
  busy: false,
  paused: false,
  source: "ru",
  target: "en",
  interval: 1400,
  timer: null,
  lastText: "",
  items: [],
  frameWidth: 0,
};

function setCameraStatus(text) {
  if (cameraStatus) cameraStatus.textContent = text || "";
}

function populateCameraLangs() {
  const codes = activeLanguages.slice();
  if (!codes.length) return;

  if (!codes.includes(camera.source)) camera.source = codes[0];
  if (!codes.includes(camera.target) || camera.target === camera.source) {
    camera.target = codes.find((c) => c !== camera.source) || codes[0];
  }

  const fill = (select, selected) => {
    select.innerHTML = "";
    codes.forEach((code) => {
      const option = document.createElement("option");
      option.value = code;
      option.textContent = `${LANGUAGES[code].flag} ${LANGUAGES[code].name}`;
      select.appendChild(option);
    });
    select.value = selected;
  };

  fill(cameraSourceSelect, camera.source);
  fill(cameraTargetSelect, camera.target);
}

async function ensureCameraWorker(langCode) {
  const tessLang = LANGUAGES[langCode]?.tesseract || "eng";
  if (camera.worker && camera.workerLang === tessLang) return camera.worker;

  if (camera.worker) {
    try {
      await camera.worker.terminate();
    } catch (e) {}
    camera.worker = null;
    camera.workerLang = null;
  }

  setCameraStatus(getUI().cameraLoading);
  const worker = await Tesseract.createWorker(tessLang);
  await worker.setParameters({
    tessedit_pageseg_mode: "11",
    preserve_interword_spaces: "1",
  });
  camera.worker = worker;
  camera.workerLang = tessLang;
  return worker;
}

function extractCameraLines(data) {
  const out = [];
  const push = (line) => {
    if (!line || !line.bbox) return;
    const text = (line.text || "").replace(/\s+/g, " ").trim();
    if (text.length < 2) return;
    const confidence = typeof line.confidence === "number" ? line.confidence : 100;
    if (confidence < 35) return;
    const { x0, y0, x1, y1 } = line.bbox;
    if (x1 - x0 < 8 || y1 - y0 < 8) return;
    out.push({ text, bbox: line.bbox, confidence });
  };

  if (Array.isArray(data.lines) && data.lines.length) {
    data.lines.forEach(push);
  } else {
    (data.blocks || []).forEach((block) =>
      (block.paragraphs || []).forEach((paragraph) =>
        (paragraph.lines || []).forEach(push)
      )
    );
  }

  out.sort((a, b) => a.bbox.y0 - b.bbox.y0 || a.bbox.x0 - b.bbox.x0);
  return out.slice(0, 20);
}

async function translateCameraLines(texts, from, to) {
  const result = new Array(texts.length).fill("");
  const MAX_CHUNK = 420;
  let i = 0;

  while (i < texts.length) {
    const chunk = [];
    let length = 0;
    let j = i;
    while (
      j < texts.length &&
      chunk.length < 10 &&
      length + texts[j].length + 1 <= MAX_CHUNK
    ) {
      chunk.push(texts[j]);
      length += texts[j].length + 1;
      j++;
    }
    if (j === i) {
      chunk.push(texts[i]);
      j = i + 1;
    }

    let translated = "";
    try {
      translated = await translateText(chunk.join("\n"), from, to);
    } catch (e) {
      translated = chunk.join("\n");
    }

    const parts = translated
      .split("\n")
      .map((part) => part.trim())
      .filter(Boolean);

    if (parts.length === chunk.length) {
      parts.forEach((part, k) => (result[i + k] = part));
    } else if (chunk.length === 1) {
      result[i] = translated.trim();
    } else {
      for (let k = 0; k < chunk.length; k++) {
        try {
          result[i + k] = (await translateText(chunk[k], from, to)).trim();
        } catch (e) {
          result[i + k] = chunk[k];
        }
      }
    }

    i = j;
  }

  return result;
}

function roundRectPath(ctx, x, y, w, h, radius) {
  const r = Math.min(radius, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wrapCanvasText(ctx, text, maxWidth) {
  const words = text.split(/\s+/).filter(Boolean);
  if (!words.length) return [""];
  const lines = [];
  let current = words[0];
  for (let i = 1; i < words.length; i++) {
    const test = `${current} ${words[i]}`;
    if (ctx.measureText(test).width <= maxWidth) {
      current = test;
    } else {
      lines.push(current);
      current = words[i];
    }
  }
  lines.push(current);
  return lines;
}

function getVideoDisplayRect() {
  const vw = cameraVideo.videoWidth || 1;
  const vh = cameraVideo.videoHeight || 1;
  const cw = cameraStage.clientWidth;
  const ch = cameraStage.clientHeight;
  const scale = Math.min(cw / vw, ch / vh);
  const w = vw * scale;
  const h = vh * scale;
  return { x: (cw - w) / 2, y: (ch - h) / 2, w, h };
}

function drawCameraOverlay(items, scale, offsetX, offsetY) {
  const ctx = cameraOverlay.getContext("2d");
  const dpr = window.devicePixelRatio || 1;
  const cssW = cameraOverlay.clientWidth;
  const cssH = cameraOverlay.clientHeight;
  if (!cssW || !cssH) return;

  const pixelW = Math.round(cssW * dpr);
  const pixelH = Math.round(cssH * dpr);
  if (cameraOverlay.width !== pixelW || cameraOverlay.height !== pixelH) {
    cameraOverlay.width = pixelW;
    cameraOverlay.height = pixelH;
  }

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  ctx.clearRect(0, 0, cssW, cssH);

  const rtl = camera.target === "ar";
  ctx.direction = rtl ? "rtl" : "ltr";
  ctx.textBaseline = "top";

  items.forEach(({ bbox, text }) => {
    if (!text) return;
    const x = offsetX + bbox.x0 * scale;
    const y = offsetY + bbox.y0 * scale;
    const w = Math.max(16, (bbox.x1 - bbox.x0) * scale);
    const h = Math.max(12, (bbox.y1 - bbox.y0) * scale);
    const padX = 5;
    const padY = 3;
    const boxW = w + padX * 2;
    let boxH = h + padY * 2;

    let fontSize = Math.min(Math.max(h * 0.78, 11), 40);
    const fontFor = (size) =>
      `600 ${size}px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`;
    ctx.font = fontFor(fontSize);
    let lines = wrapCanvasText(ctx, text, boxW - padX * 2);
    let guard = 0;
    while (
      (lines.length > 4 ||
        lines.some((line) => ctx.measureText(line).width > boxW - padX * 2)) &&
      fontSize > 9 &&
      guard < 40
    ) {
      fontSize -= 1;
      ctx.font = fontFor(fontSize);
      lines = wrapCanvasText(ctx, text, boxW - padX * 2);
      guard++;
    }

    const lineHeight = fontSize * 1.25;
    const textHeight = lines.length * lineHeight;
    if (textHeight + padY * 2 > boxH) boxH = textHeight + padY * 2;

    const bx = x - padX;
    const by = y - padY;

    ctx.save();
    ctx.shadowColor = "rgba(0, 0, 0, 0.35)";
    ctx.shadowBlur = 8;
    ctx.shadowOffsetY = 2;
    roundRectPath(ctx, bx, by, boxW, boxH, Math.min(10, boxH / 2));
    ctx.fillStyle = "rgba(255, 255, 255, 0.93)";
    ctx.fill();
    ctx.restore();

    ctx.fillStyle = "rgba(12, 20, 40, 0.95)";
    ctx.textAlign = rtl ? "right" : "left";
    const tx = rtl ? bx + boxW - padX : bx + padX;
    let ty = by + padY + (boxH - padY * 2 - textHeight) / 2;
    lines.forEach((line) => {
      ctx.fillText(line, tx, ty);
      ty += lineHeight;
    });
  });
}

function scheduleCameraScan(delay) {
  if (camera.timer) clearTimeout(camera.timer);
  camera.timer = setTimeout(cameraScan, delay);
}

async function cameraScan() {
  if (!camera.active || camera.paused || camera.busy) return;
  if (!cameraVideo.videoWidth) {
    scheduleCameraScan(300);
    return;
  }

  const ui = getUI();
  camera.busy = true;

  try {
    const worker = await ensureCameraWorker(camera.source);

    const vw = cameraVideo.videoWidth;
    const vh = cameraVideo.videoHeight;
    const pw = Math.min(vw, 1280);
    const ph = Math.max(1, Math.round((vh * pw) / vw));
    const frame = camera.frameCanvas || (camera.frameCanvas = document.createElement("canvas"));
    frame.width = pw;
    frame.height = ph;
    frame.getContext("2d").drawImage(cameraVideo, 0, 0, pw, ph);
    camera.frameWidth = pw;

    setCameraStatus(ui.cameraScanning);
    const { data } = await worker.recognize(frame);
    const lines = extractCameraLines(data);
    const joined = lines.map((line) => line.text).join("|");

    if (!lines.length) {
      camera.items = [];
      camera.lastText = "";
      const rect = getVideoDisplayRect();
      drawCameraOverlay([], rect.w / pw, rect.x, rect.y);
      setCameraStatus(ui.cameraNoText);
      return;
    }

    if (joined === camera.lastText && camera.items.length) {
      setCameraStatus("");
      return;
    }
    camera.lastText = joined;

    setCameraStatus(ui.cameraTranslating);
    const translations = await translateCameraLines(
      lines.map((line) => line.text),
      camera.source,
      camera.target
    );
    camera.items = lines
      .map((line, index) => ({ bbox: line.bbox, text: translations[index] || "" }))
      .filter((item) => item.text);

    const rect = getVideoDisplayRect();
    drawCameraOverlay(camera.items, rect.w / pw, rect.x, rect.y);
    setCameraStatus("");
  } catch (err) {
    console.error("Ошибка живого перевода:", err);
    setCameraStatus(ui.cameraError);
  } finally {
    camera.busy = false;
    if (camera.active && !camera.paused) scheduleCameraScan(camera.interval);
  }
}

async function openCamera() {
  const ui = getUI();

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert(ui.cameraNeedHttps);
    return;
  }
  if (!window.Tesseract) {
    alert("Не удалось загрузить OCR-движок. Проверьте подключение к интернету.");
    return;
  }

  populateCameraLangs();
  cameraModal.classList.add("open");
  camera.active = true;
  camera.paused = false;
  camera.lastText = "";
  camera.items = [];
  cameraPauseBtn.textContent = "⏸";
  setCameraStatus(ui.cameraLoading);

  try {
    camera.stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
        width: { ideal: 1920 },
        height: { ideal: 1080 },
      },
      audio: false,
    });
    cameraVideo.srcObject = camera.stream;
    await cameraVideo.play();
    setCameraStatus(ui.cameraReady);
    scheduleCameraScan(400);
  } catch (err) {
    console.error("Ошибка камеры:", err);
    setCameraStatus(ui.cameraError);
  }
}

async function closeCamera() {
  camera.active = false;
  camera.paused = false;

  if (camera.timer) {
    clearTimeout(camera.timer);
    camera.timer = null;
  }
  if (camera.stream) {
    camera.stream.getTracks().forEach((track) => track.stop());
    camera.stream = null;
  }
  cameraVideo.srcObject = null;

  const ctx = cameraOverlay.getContext("2d");
  ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0, cameraOverlay.width, cameraOverlay.height);

  camera.lastText = "";
  camera.items = [];
  camera.frameWidth = 0;

  if (camera.worker) {
    const worker = camera.worker;
    camera.worker = null;
    camera.workerLang = null;
    try {
      await worker.terminate();
    } catch (e) {}
  }

  cameraModal.classList.remove("open");
  setCameraStatus("");
}

function toggleCameraPause() {
  if (!camera.active) return;
  camera.paused = !camera.paused;
  cameraPauseBtn.textContent = camera.paused ? "▶" : "⏸";

  if (camera.paused) {
    if (camera.timer) {
      clearTimeout(camera.timer);
      camera.timer = null;
    }
    setCameraStatus(getUI().cameraPaused);
  } else {
    setCameraStatus(getUI().cameraReady);
    scheduleCameraScan(100);
  }
}

// ---------- ИНИЦИАЛИЗАЦИЯ ----------
function init() {
  loadState();

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setUILanguage(btn.dataset.lang);
    });
  });

  addLangBtn.addEventListener("click", addLanguage);
  photoBtn.addEventListener("click", handlePhotoUpload);

  if (cameraBtn) cameraBtn.addEventListener("click", openCamera);
  cameraCloseBtn.addEventListener("click", closeCamera);
  cameraPauseBtn.addEventListener("click", toggleCameraPause);

  cameraSourceSelect.addEventListener("change", () => {
    camera.source = cameraSourceSelect.value;
    if (camera.target === camera.source) {
      camera.target =
        activeLanguages.find((code) => code !== camera.source) || camera.target;
      cameraTargetSelect.value = camera.target;
    }
    camera.lastText = "";
  });

  cameraTargetSelect.addEventListener("change", () => {
    camera.target = cameraTargetSelect.value;
    if (camera.source === camera.target) {
      camera.source =
        activeLanguages.find((code) => code !== camera.target) || camera.source;
      cameraSourceSelect.value = camera.source;
    }
    camera.lastText = "";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && cameraModal.classList.contains("open")) {
      closeCamera();
    }
  });

  window.addEventListener("resize", () => {
    if (camera.active && camera.items.length && camera.frameWidth) {
      const rect = getVideoDisplayRect();
      drawCameraOverlay(
        camera.items,
        rect.w / camera.frameWidth,
        rect.x,
        rect.y
      );
    }
  });

  renderCards();
  updateLanguageSelect();
  setUILanguage(currentUILang);

  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
  }
}

document.addEventListener("DOMContentLoaded", init);
