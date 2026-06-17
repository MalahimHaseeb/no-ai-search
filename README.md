# no-ai-search

A minimal browser new-tab search page focused on clean search results. Choose your preferred search engine, avoid AI clutter, and use powerful bang shortcuts to jump directly to your favorite sites.

**Live Demo:** https://malahimhaseeb.github.io/no-ai-search/

![GitHub Pages](https://img.shields.io/badge/hosted-GitHub%20Pages-blue)
![License](https://img.shields.io/badge/license-MIT-gray)
![No AI](https://img.shields.io/badge/AI%20Overview-disabled-red)

---

## Features

* 🔍 **Multiple Search Engines**

  * Google Web Search (`udm=14`)
  * DuckDuckGo
  * Brave Search
  * Kagi

* 💾 **Persistent Preferences**

  * Remembers your selected search engine using localStorage.

* ⚡ **Bang Shortcuts**

  * Jump directly to GitHub, YouTube, Reddit, npm, and more.
  * Type commands like `!gh react` or `!yt javascript tutorial`.

* 🗂️ **Search Categories**

  * Web
  * Images
  * News
  * Videos
  * Maps

* ⌨️ **Keyboard Friendly**

  * `Enter` → Search
  * `Esc` → Clear
  * `Ctrl + K` / `⌘ + K` → Focus search box

* 🚀 **Zero Dependencies**

  * Pure HTML, CSS, and JavaScript.

* 🔒 **Privacy Focused**

  * No analytics
  * No tracking
  * No backend
  * Runs entirely in your browser

---

## Bang Shortcuts

| Shortcut  | Destination    |
| --------- | -------------- |
| `!gh`     | GitHub         |
| `!npm`    | npm            |
| `!yt`     | YouTube        |
| `!tw`     | X (Twitter)    |
| `!rd`     | Reddit         |
| `!mdn`    | MDN Docs       |
| `!so`     | Stack Overflow |
| `!li`     | LinkedIn       |
| `!fig`    | Figma          |
| `!vercel` | Vercel         |
| `!pypi`   | PyPI           |
| `!maps`   | Google Maps    |

Examples:

```text
!gh nextjs
!yt css animations
!npm react
!rd webdev
```

---

## Why Google `udm=14`?

Google's `udm=14` parameter forces results into the classic **Web** view.

Benefits:

* Removes AI Overviews
* Reduces search clutter
* Prioritizes traditional ranked links
* Provides a cleaner search experience

---

## Run Locally

```bash
git clone https://github.com/MalahimHaseeb/no-ai-search.git

cd no-ai-search

# Open directly in your browser
open index.html
```

No build process. No package manager. No installation required.

---

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. Open **Settings → Pages**.
3. Select:

   * Source: **Deploy from branch**
   * Branch: **main**
   * Folder: **/ (root)**
4. Save.

Your site will be available at:

```text
https://malahimhaseeb.github.io/no-ai-search/
```

---

## Project Structure

```text
no-ai-search/
├── index.html
├── style.css
├── main.js
└── README.md
```

---

## License

Released under the MIT License.

---

## Author

**Malahim Haseeb**

* Website: https://malahim.dev
* GitHub: https://github.com/MalahimHaseeb
