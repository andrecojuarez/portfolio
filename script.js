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
