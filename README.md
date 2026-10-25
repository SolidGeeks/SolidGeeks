# Solid Geeks website

The Solid Geeks website, served at https://solidgeeks.github.io/SolidGeeks/: a static page, no build step.

| File | What it is |
|---|---|
| `index.html` | The page. *Pitch a project* opens the form of the [organization's Discussions](https://github.com/orgs/SolidGeeks/discussions/categories/pitch-a-project). |
| `styles.css`, `main.js` | Styles and the manifesto interaction. |
| `solid-geeks.html` | The 30 s intro film (self-contained, embedded in the hero). |
| `studio.html` | The card studio (first-merge cards, linked from the `first-merge` workflow). |
| `fonts/` | DejaVu Sans Mono Bold (Bitstream Vera licence) and Inter (SIL OFL), subset to Latin. |
| `favicon.*`, `*.png`, `site.webmanifest` | Icons from the logo kit. |
| `img/og.png` | Social preview image. |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are. |

Preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000.

Site content: [CC BY-SA 4.0](LICENSE). The Solid Geeks name and logo are trademarks of the project.
