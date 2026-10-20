# Jairus Carl F. Esteban — Portfolio

Personal portfolio built with React + Vite.

## Run it

```bash
npm install      # first time only
npm run build    # compile src/ into dist/ → open http://localhost/Portfolio/ (XAMPP)
npm run watch    # same, but rebuilds automatically every time you save
npm run dev      # Vite dev server with instant hot reload → http://localhost:5173
```

Browsers can't run `.jsx` directly, so `src/` is compiled into `dist/`.
`index.php` serves that build, so XAMPP shows the site at `http://localhost/Portfolio/`.
Rebuild (or keep `npm run watch` running) after editing anything in `src/` or `public/`.

## Editing content

All text, links, skills, projects, certificates and photos are in [`src/data.js`](src/data.js).
Images go in `public/images/` and are referenced with `img('folder/file.jpg')`.

## Structure

```
public/images/      profile photos, project screenshots, certificates
src/data.js         all portfolio content (incl. the nav links)
src/App.jsx         routes: /, /about, /projects, /certificates, /contact
src/pages/          one file per page
src/components/     shared pieces: Navbar, Lightbox, Reveal, SectionHead
src/hooks.js        theme and scroll-reveal hooks
src/styles.css      all styles (dark/light theme tokens at the top)
index.php           serves dist/ for XAMPP
.htaccess           clean URLs (/Portfolio/about → index.php) and hides dev files
```

To add a page: create it in `src/pages/`, add a `<Route>` in `App.jsx`, and add it to `navLinks` in `data.js`.
If you rename the Portfolio folder, update `base` in `vite.config.js` and `VITE_BASENAME` in `.env.production`.
