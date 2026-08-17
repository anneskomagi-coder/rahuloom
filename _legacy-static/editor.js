// Inline content editor
// Only activates when served from localhost

(function () {
  if (!location.hostname.match(/^(localhost|127\.0\.0\.1)$/)) return;

  // --- Build toolbar ---
  const toolbar = document.createElement('div');
  toolbar.id = 'editor-toolbar';
  toolbar.innerHTML = `
    <span id="editor-label">✏️ Muuda tekste</span>
    <button id="editor-toggle">Lülita muutmine sisse</button>
    <button id="editor-save" style="display:none">💾 Salvesta</button>
    <span id="editor-status"></span>
  `;
  document.body.appendChild(toolbar);

  // --- Styles ---
  const style = document.createElement('style');
  style.textContent = `
    #editor-toolbar {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 9999;
      background: #193626;
      color: #fff;
      padding: 10px 16px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: sans-serif;
      font-size: 14px;
      box-shadow: 0 4px 20px rgba(0,0,0,0.25);
    }
    #editor-label { opacity: 0.75; font-size: 13px; }
    #editor-toolbar button {
      background: #fff;
      color: #193626;
      border: none;
      padding: 6px 14px;
      border-radius: 30px;
      font-size: 13px;
      font-weight: 700;
      cursor: pointer;
    }
    #editor-save { background: #4caf50 !important; color: #fff !important; }
    #editor-status { font-size: 12px; opacity: 0.8; min-width: 80px; }
    [data-content][contenteditable="true"],
    [data-content-html][contenteditable="true"] {
      outline: 2px dashed rgba(255,255,255,0.6);
      outline-offset: 3px;
      border-radius: 3px;
      cursor: text;
      min-width: 20px;
      display: inline-block;
    }
    body.edit-mode [data-content],
    body.edit-mode [data-content-html] {
      outline: 2px dashed #a8c4b4;
      outline-offset: 3px;
      border-radius: 3px;
      cursor: text;
    }
    body.edit-mode [data-content]:hover,
    body.edit-mode [data-content-html]:hover {
      outline-color: #193626;
      background: rgba(25,54,38,0.05);
    }
  `;
  document.head.appendChild(style);

  let editing = false;
  const toggleBtn = document.getElementById('editor-toggle');
  const saveBtn = document.getElementById('editor-save');
  const status = document.getElementById('editor-status');

  function getEditables() {
    return [
      ...document.querySelectorAll('[data-content]'),
      ...document.querySelectorAll('[data-content-html]'),
    ];
  }

  toggleBtn.addEventListener('click', () => {
    editing = !editing;
    document.body.classList.toggle('edit-mode', editing);
    toggleBtn.textContent = editing ? 'Lõpeta muutmine' : 'Lülita muutmine sisse';
    saveBtn.style.display = editing ? 'inline-block' : 'none';
    status.textContent = '';

    getEditables().forEach(el => {
      if (editing) {
        el.setAttribute('contenteditable', 'true');
        el.setAttribute('spellcheck', 'false');
      } else {
        el.removeAttribute('contenteditable');
      }
    });
  });

  saveBtn.addEventListener('click', async () => {
    // Read current content.json, then update keys from DOM
    status.textContent = 'Salvestab...';
    saveBtn.disabled = true;

    try {
      const res = await fetch('content.json');
      const content = await res.json();

      document.querySelectorAll('[data-content]').forEach(el => {
        const key = el.getAttribute('data-content');
        const parts = key.split('.');
        let obj = content;
        for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
        obj[parts[parts.length - 1]] = el.textContent.trim();
      });

      document.querySelectorAll('[data-content-html]').forEach(el => {
        const key = el.getAttribute('data-content-html');
        const parts = key.split('.');
        let obj = content;
        for (let i = 0; i < parts.length - 1; i++) obj = obj[parts[i]];
        // Convert <br> back to \n for storage
        obj[parts[parts.length - 1]] = el.innerHTML
          .replace(/<br\s*\/?>/gi, '\n')
          .replace(/<[^>]+>/g, '')
          .trim();
      });

      const saveRes = await fetch('/save-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content, null, 2),
      });

      const result = await saveRes.json();
      if (result.ok) {
        status.textContent = '✓ Salvestatud!';
        setTimeout(() => status.textContent = '', 3000);
      } else {
        status.textContent = '✗ Viga!';
      }
    } catch (e) {
      status.textContent = '✗ Viga!';
      console.error(e);
    }

    saveBtn.disabled = false;
  });
})();
