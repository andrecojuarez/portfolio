// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Terminal typing animation
const term = document.getElementById('term');
const lines = [
  { t: '<span class="c">$</span> whoami', d: 400 },
  { t: 'eduardo — junior penetration tester', d: 600 },
  { t: '<span class="c">$</span> cat ./certs.txt', d: 700 },
  { t: '<span class="y">✓</span> eLearnSecurity Junior Penetration Tester (eJPT)', d: 600 },
  { t: '  <span class="m">id: 160743036</span>', d: 500 },
  { t: '<span class="c">$</span> nmap -sV target.local', d: 800 },
  { t: '<span class="m">PORT     STATE  SERVICE</span>', d: 300 },
  { t: '22/tcp   open   ssh', d: 200 },
  { t: '80/tcp   open   http', d: 200 },
  { t: '443/tcp  open   https', d: 300 },
  { t: '<span class="c">$</span> ./exploit.py --target $IP', d: 700 },
  { t: '<span class="y">[*]</span> recon → enum → exploit → report', d: 600 },
  { t: '<span class="c">$</span> <span class="caret"></span>', d: 0 },
];

let i = 0;
function typeLine() {
  if (i >= lines.length) return;
  const line = lines[i];
  term.innerHTML += line.t + '\n';
  i++;
  setTimeout(typeLine, line.d);
}
setTimeout(typeLine, 400);

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.12 });

document.querySelectorAll('.block, .card, .edu, .job').forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});

// Renderizar publicaciones
const grid = document.getElementById('posts-grid');
if (grid && window.POSTS) {
  const fmtDate = (s) => {
    try {
      const d = new Date(s);
      return d.toLocaleDateString('es-MX', { year: 'numeric', month: 'short', day: '2-digit' });
    } catch { return s; }
  };

  const render = (filter = 'all') => {
    const items = window.POSTS
      .filter(p => filter === 'all' || p.kind === filter)
      .sort((a, b) => (a.date < b.date ? 1 : -1));

    if (!items.length) {
      grid.innerHTML = '<p class="prose">No hay publicaciones todavía.</p>';
      return;
    }

    grid.innerHTML = items.map(p => `
      <article class="post reveal in">
        <a class="cover" href="${p.url}" aria-label="${p.title}"></a>
        <div class="post-head">
          <span class="kind">${p.kind === 'writeup' ? 'Write-up' : 'Tool'}</span>
          <span class="date">${fmtDate(p.date)}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <div class="post-foot">
          <div class="tags-mini">${(p.tags || []).map(t => `<span>${t}</span>`).join('')}</div>
          <span class="read">leer →</span>
        </div>
      </article>
    `).join('');
  };

  render();

  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      render(tab.dataset.filter);
    });
  });
}
