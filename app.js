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

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  renderCards();
  updateLanguageSelect();
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

  renderCards();
  updateLanguageSelect();
  setUILanguage(currentUILang);

  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
  }
}

document.addEventListener("DOMContentLoaded", init);
