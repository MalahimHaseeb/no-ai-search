const ENGINES = {
  google: {
    search:  q => `https://www.google.com/search?udm=14&q=${q}`,
    images:  q => `https://www.google.com/search?udm=2&q=${q}`,
    news:    q => `https://www.google.com/search?tbm=nws&q=${q}`,
    videos:  q => `https://www.google.com/search?tbm=vid&q=${q}`,
    maps:    q => `https://www.google.com/maps/search/${q}`,
  },
  ddg: {
    search:  q => `https://duckduckgo.com/?q=${q}&kae=d&k1=-1`,
    images:  q => `https://duckduckgo.com/?q=${q}&t=h_&iax=images&ia=images`,
    news:    q => `https://duckduckgo.com/?q=${q}&t=h_&df=w&ia=news`,
    videos:  q => `https://duckduckgo.com/?q=${q}&t=h_&iax=videos&ia=videos`,
    maps:    q => `https://duckduckgo.com/?q=${q}&t=h_&ia=web&iaxm=maps`,
  },
  brave: {
    search:  q => `https://search.brave.com/search?q=${q}&source=web`,
    images:  q => `https://search.brave.com/images?q=${q}`,
    news:    q => `https://search.brave.com/news?q=${q}`,
    videos:  q => `https://search.brave.com/videos?q=${q}`,
    maps:    q => `https://www.google.com/maps/search/${q}`,
  },
  kagi: {
    search:  q => `https://kagi.com/search?q=${q}`,
    images:  q => `https://kagi.com/images?q=${q}`,
    news:    q => `https://kagi.com/news?q=${q}`,
    videos:  q => `https://kagi.com/videos?q=${q}`,
    maps:    q => `https://www.google.com/maps/search/${q}`,
  },
};

const BANGS = {
  '!gh':     q => `https://github.com/search?q=${q}`,
  '!npm':    q => `https://www.npmjs.com/search?q=${q}`,
  '!yt':     q => `https://www.youtube.com/results?search_query=${q}`,
  '!tw':     q => `https://twitter.com/search?q=${q}`,
  '!rd':     q => `https://www.reddit.com/search/?q=${q}`,
  '!mdn':    q => `https://developer.mozilla.org/en-US/search?q=${q}`,
  '!so':     q => `https://stackoverflow.com/search?q=${q}`,
  '!li':     q => `https://www.linkedin.com/search/results/all/?keywords=${q}`,
  '!fig':    q => `https://www.figma.com/search?q=${q}&model_type=files`,
  '!vercel': q => `https://vercel.com/search?query=${q}`,
  '!pypi':   q => `https://pypi.org/search/?q=${q}`,
  '!maps':   q => `https://www.google.com/maps/search/${q}`,
};

const STORAGE_KEY = 'nas_engine';

let activeEngine = localStorage.getItem(STORAGE_KEY) || 'google';

const input      = document.getElementById('q');
const clearBtn   = document.getElementById('clearBtn');
const searchBtn  = document.getElementById('searchBtn');
const imagesBtn  = document.getElementById('imagesBtn');
const newsBtn    = document.getElementById('newsBtn');
const videosBtn  = document.getElementById('videosBtn');
const mapsBtn    = document.getElementById('mapsBtn');
const engineRow  = document.getElementById('engineRow');
const kbdHint    = document.getElementById('kbdHint');

function setEngine(key) {
  activeEngine = key;
  localStorage.setItem(STORAGE_KEY, key);
  engineRow.querySelectorAll('.engine-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.engine === key);
  });
}

function openTab(url) {
  window.open(url, '_blank', 'noopener');
}

function resolveBang(raw) {
  const parts = raw.trim().split(/\s+/);
  const bang = parts[0].toLowerCase();
  const rest = encodeURIComponent(parts.slice(1).join(' '));
  if (BANGS[bang] && rest) {
    return BANGS[bang](rest);
  }
  return null;
}

function go(type) {
  const val = input.value.trim();
  if (!val) { input.focus(); return; }

  if (type === 'search') {
    const bangUrl = resolveBang(val);
    if (bangUrl) { openTab(bangUrl); return; }
  }

  const enc = encodeURIComponent(val);
  const engine = ENGINES[activeEngine] || ENGINES.google;
  openTab(engine[type](enc));
}

input.addEventListener('input', () => {
  clearBtn.classList.toggle('show', input.value.length > 0);
});

input.addEventListener('keydown', e => {
  if (e.key === 'Enter')  go('search');
  if (e.key === 'Escape') { input.value = ''; clearBtn.classList.remove('show'); }
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  clearBtn.classList.remove('show');
  input.focus();
});

searchBtn.addEventListener('click', () => go('search'));
imagesBtn.addEventListener('click', () => go('images'));
newsBtn.addEventListener('click',   () => go('news'));
videosBtn.addEventListener('click', () => go('videos'));
mapsBtn.addEventListener('click',   () => go('maps'));

engineRow.addEventListener('click', e => {
  const btn = e.target.closest('.engine-btn');
  if (btn) setEngine(btn.dataset.engine);
});

document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault();
    input.focus();
    input.select();
  }
});

setEngine(activeEngine);

setTimeout(() => { kbdHint.style.opacity = '1'; }, 1200);
setTimeout(() => { kbdHint.style.opacity = '0'; }, 3500);

document.querySelectorAll('.bang-item').forEach(item => {
  item.addEventListener('click', () => {
    const bang = item.querySelector('code').textContent.trim();
    input.value = bang + ' ';
    input.focus();
    clearBtn.classList.add('show');
  });
});