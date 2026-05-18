# 📓 Notebook

**Ad-free • Private • PWA-ready Markdown Notebook**

A beautiful, fully offline-capable text editor with powerful search and backup features.

## ✨ Key Features

- **Full-text Search** — instantly search titles + content
- **Progressive Web App (PWA)** — installable + works offline
- **Better CDN Caching** — full offline experience after first load
- **Export All Notes** — one-click JSON backup of everything
- Live Markdown preview
- Auto-save + multiple notes
- Dark/Light themes
- Keyboard shortcuts

## 🚀 Getting Started

### Best Experience: Install as PWA
1. Open `index.html`
2. Click **Install Notebook** in the browser menu / address bar
3. Use it like a native app (works offline!)

### Quick Start
Just open `index.html` in any browser.

## 🛠️ How to Use New Features

### Search Notes
- Use the search bar in the sidebar
- Matches both title and content
- Press `/` to focus search • `Esc` to clear

### Export All Notes (Backup)
- Click the **Export** button → **Export All Notes (JSON)**
- Creates a complete backup file you can re-import later (or use as archive)

### Offline Mode
Thanks to improved Service Worker + CDN caching:
- After loading once while online, the editor works fully offline
- All core libraries are cached

## 📁 Project Files

```
Notebook/
├── index.html      # Main app (PWA + Search + Export)
├── manifest.json   # PWA manifest
├── sw.js           # Service Worker (improved offline caching)
├── LICENSE
└── README.md
```

## 📄 License
MIT

---

Made with care as a clean, private writing tool. Enjoy! ✍️