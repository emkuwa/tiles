## 🌐 Progressive Web App (PWA) Enabled

This Zanzibar Tile Price Calculator is a Progressive Web App, which means:

- ✅ You can install it on your phone or desktop like an app
- 🔌 Works offline after first visit (caches data)
- ⚡️ Loads faster thanks to local storage
- 📱 Optimized for mobile and touch

### 📲 How to Install (Mobile)

1. Visit the site on Chrome or Safari
2. Tap the **three dots menu** (⋮) or **Share button**
3. Select **"Add to Home screen"**

That's it! You’ll now have a shortcut like a native app.

### 📂 Files That Enable PWA

- `manifest.json`: Defines app name, theme color, icon, and start URL
- `service-worker.js`: Caches static files for offline support
- HTML `<head>` includes:
  ```html
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#3B82F6">
