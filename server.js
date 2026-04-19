// Production server — serves the Vite build from /dist
// Run with: node server.js
// Then open: http://localhost:8080

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const DIST = path.join(__dirname, 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.mjs':  'application/javascript',
  '.json': 'application/json',
  '.webp': 'image/webp',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
};

http.createServer((req, res) => {
  // Save content.json (editor support on localhost)
  if (req.method === 'POST' && req.url === '/save-content') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        JSON.parse(body);
        // Write to both root (source of truth) and dist (served at runtime)
        fs.writeFileSync(path.join(__dirname, 'content.json'), body, 'utf8');
        fs.writeFileSync(path.join(DIST, 'content.json'), body, 'utf8');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  // Strip query strings
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(DIST, urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // SPA fallback: serve index.html for all non-file routes
      fs.readFile(path.join(DIST, 'index.html'), (err2, html) => {
        if (err2) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(html);
      });
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
    res.end(data);
  });

}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop.');
});
