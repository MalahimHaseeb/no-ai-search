# no-ai-search

A minimal browser new-tab search page. Pick your engine, search without AI clutter, use bang shortcuts to jump anywhere fast.

**Live demo → [MalahimHaseeb.github.io/no-ai-search](https://MalahimHaseeb.github.io/no-ai-search)**

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

## Built By
Malahim Haseeb (malahim.dev)