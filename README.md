# Yufeng Wu — Academic Homepage

English academic homepage for https://evan-wu59.github.io/.

This is a static website. No package installation or build is required.

## Files
- `index.html`: profile, research interests, selected publications, education, talks, contact.
- `cv.html`: short public academic CV, with a print / save-as-PDF button.
- `styles.css`: responsive layout and print styles.
- `site.js`: publication filters and print control.
- `favicon.svg`: initials icon.

## GitHub Pages
In the `Evan-WU59/evan-wu59.github.io` repository, open Settings → Pages. Choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then Save.

## Editing
Edit `index.html` to update the homepage and `cv.html` to update the short CV. Keep author order, publication status, and bibliographic details accurate. Each publication's `data-topics` supplies its filter categories (`multimodal`, `metaphor`, or `dh`).

Preview locally with `python -m http.server 8765 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:8765/.
