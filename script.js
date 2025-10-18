// Theme toggle + print handling
const themeToggle = document.getElementById('theme-toggle');
const printBtn = document.getElementById('print-cv');

const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const stored = localStorage.getItem('zhd_theme');

function applyTheme(theme){
  if(theme === 'light') {
    document.documentElement.style.setProperty('--bg', '#f7fafc');
    document.documentElement.style.setProperty('--card', '#ffffff');
    document.documentElement.style.setProperty('--muted', '#475569');
    document.documentElement.style.setProperty('--accent', '#0369a1');
    document.body.style.color='#0b1320';
    themeToggle.textContent = '☀️';
  } else {
    // default dark
    document.documentElement.style.setProperty('--bg', '#0b0f13');
    document.documentElement.style.setProperty('--card', '#0f1720');
    document.documentElement.style.setProperty('--muted', '#9aa3ad');
    document.documentElement.style.setProperty('--accent', '#7dd3fc');
    document.body.style.color = '#bed5ecff';
    themeToggle.textContent = '🌙';
  }
}

applyTheme(stored || (prefersDark ? 'dark' : 'dark'));

themeToggle.addEventListener('click', () => {
  const current = localStorage.getItem('zhd_theme') || 'dark';
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem('zhd_theme', next);
  applyTheme(next);
});

printBtn.addEventListener('click', () => {
  window.print();
});

// Smooth anchor scrolling if needed
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
