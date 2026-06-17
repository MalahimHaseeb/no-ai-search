# no-ai-search

A minimal browser new-tab search page. Pick your engine, search without AI clutter.

**Live demo → [MalahimHaseeb.github.io/no-ai-search](https://MalahimHaseeb.github.io/no-ai-search)**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://malahimhaseeb.github.io/no-ai-search/)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-blue)](https://malahimhaseeb.github.io/no-ai-search/)
[![License](https://img.shields.io/badge/license-MIT-gray)](./LICENSE)
[![No AI](https://img.shields.io/badge/AI%20Overview-disabled-red)](https://malahimhaseeb.github.io/no-ai-search/)

---

## Features

- **4 engines** — Google (no AI), DuckDuckGo, Brave, Kagi
- **Remembers your choice** — preference saved to localStorage
- **Search tabs** — Web, Images, News, Videos, Maps per engine
- **Keyboard first** — `Enter` search, `Esc` clear, `⌘K` focus
- **Zero dependencies** — plain HTML, CSS, JS
- **Zero tracking** — no analytics, no server, runs fully in the browser

---

## Why Google with `udm=14`

`udm=14` is Google's internal parameter for its **Web** filter tab. It strips out AI Overviews, People Also Ask panels, and shopping blocks — returning plain ranked links. It has worked reliably since May 2024 when Google removed the official AI toggle.

---

## Use as your browser new tab

**Chrome extension** — install any "custom new tab" extension and point it to the deployed GitHub Pages URL.

**Chrome default search engine** — go to `Settings → Search engine → Manage search engines → Add`:

```
Name:     Google (No AI)
Shortcut: g
URL:      https://www.google.com/search?udm=14&q=%s
```

---

## Run locally

```bash
git clone https://github.com/MalahimHaseeb/no-ai-search
cd no-ai-search
open index.html
```

No build step. No npm install.

---

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your live URL: `https://MalahimHaseeb.github.io/no-ai-search/`

---

## File structure

```
no-ai-search/
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## License

MIT

---

## Built by

[Malahim Haseeb](https://malahim.dev)