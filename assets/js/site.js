(() => {
  'use strict';
  const html = document.documentElement;
  const languageButtons = [...document.querySelectorAll('[data-set-lang]')];
  const filter = document.querySelector('#year-filter');
  const publications = [...document.querySelectorAll('.publication')];
  const counter = document.querySelector('.publication-count');
  const dialog = document.querySelector('.image-dialog');
  const toast = document.querySelector('.toast');
  let toastTimer;
  let lastImageTrigger;
  let lang = 'en';
  try { lang = localStorage.getItem('xuan-feng-language') === 'zh' ? 'zh' : 'en'; } catch (_) {}
  function refreshCount() {
    if (!counter) return;
    const n = publications.filter(p => !p.hidden).length;
    counter.textContent = lang === 'zh' ? `${n} 篇论文` : `${n} publication${n === 1 ? '' : 's'}`;
  }
  function setLanguage(next) {
    lang = next === 'zh' ? 'zh' : 'en';
    html.dataset.lang = lang;
    html.lang = lang === 'zh' ? 'zh-CN' : 'en';
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLang === lang)));
    document.title = `${document.body.dataset[lang === 'zh' ? 'titleZh' : 'titleEn']} | ${lang === 'zh' ? '冯玄 Xuan Feng' : 'Xuan Feng'}`;
    document.querySelectorAll('[data-en][data-zh]').forEach(el => { el.textContent = el.dataset[lang]; });
    document.querySelectorAll('img[data-alt-en]').forEach(img => { img.alt = img.dataset[lang === 'zh' ? 'altZh' : 'altEn']; });
    document.querySelector('nav').setAttribute('aria-label', lang === 'zh' ? '主导航' : 'Main navigation');
    document.querySelectorAll('[data-zoom]').forEach(button => { button.setAttribute('aria-label', lang === 'zh' ? '放大研究配图' : 'Enlarge research figure'); });
    if (dialog) {
      dialog.setAttribute('aria-label', lang === 'zh' ? '研究配图' : 'Research figure');
      dialog.querySelector('.dialog-close').setAttribute('aria-label', lang === 'zh' ? '关闭图片' : 'Close image');
    }
    refreshCount();
    try { localStorage.setItem('xuan-feng-language', lang); } catch (_) {}
  }
  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.setLang)));
  setLanguage(lang);
  filter?.addEventListener('change', () => {
    publications.forEach(p => { p.hidden = filter.value !== 'all' && p.dataset.year !== filter.value; });
    refreshCount();
  });
  function notify(text) {
    clearTimeout(toastTimer);
    toast.textContent = text;
    toast.classList.add('visible');
    toastTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
  }
  document.querySelectorAll('.copy-bibtex').forEach(button => button.addEventListener('click', async () => {
    const code = button.closest('.bibtex-panel').querySelector('code');
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(code.textContent);
      notify(lang === 'zh' ? '引用已复制' : 'Citation copied');
    } catch (_) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(code);
      selection.removeAllRanges(); selection.addRange(range);
      notify(lang === 'zh' ? '引用已选中，请按 Ctrl/Cmd+C 复制' : 'Citation selected. Press Ctrl/Cmd+C to copy.');
    }
  }));
  document.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click', () => {
    const img = button.querySelector('img');
    if (!dialog?.showModal) { window.open(img.src, '_blank', 'noopener'); return; }
    const caption = button.closest('figure').querySelector('figcaption');
    dialog.querySelector('img').src = img.src;
    dialog.querySelector('img').alt = img.alt;
    const visibleCaption = [...caption.children].filter(el => getComputedStyle(el).display !== 'none').map(el => el.textContent).join(' ');
    dialog.querySelector('p').textContent = visibleCaption;
    lastImageTrigger = button;
    dialog.showModal();
  }));
  dialog?.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog?.addEventListener('close', () => lastImageTrigger?.focus());
})();
