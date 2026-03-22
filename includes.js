async function loadInclude(id, file) {
  const el = document.getElementById(id);
  if (!el) return;
  const res = await fetch(file);
  el.innerHTML = await res.text();
}

// Load header and footer, then init nav + content
Promise.all([
  loadInclude('header-placeholder', 'header.html'),
  loadInclude('footer-placeholder', 'footer.html'),
]).then(() => {
  // Mark active nav link based on current page
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Init mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => nav.classList.toggle('open'));
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // Load content.json texts (includes nav + footer labels)
  fetch('content.json')
    .then(r => r.json())
    .then(c => {
      document.querySelectorAll('[data-content]').forEach(el => {
        const val = el.getAttribute('data-content').split('.').reduce((o, k) => o?.[k], c);
        if (val !== undefined) el.textContent = val;
      });
      document.querySelectorAll('[data-content-html]').forEach(el => {
        const val = el.getAttribute('data-content-html').split('.').reduce((o, k) => o?.[k], c);
        if (val !== undefined) el.innerHTML = val.replace(/\n/g, '<br>');
      });
      document.querySelectorAll('[data-href-content]').forEach(el => {
        const val = el.getAttribute('data-href-content').split('.').reduce((o, k) => o?.[k], c);
        if (val !== undefined) el.href = val;
      });
      const emailEl = document.getElementById('info-email');
      if (emailEl) emailEl.href = 'mailto:' + emailEl.textContent.trim();
      const phoneEl = document.getElementById('info-phone');
      if (phoneEl) phoneEl.href = 'tel:' + phoneEl.textContent.trim().replace(/\s/g, '');
    });
});
