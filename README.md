# notthatbowser.github.io

[![build-to-gh-pages](https://github.com/NotThatBowser/notthatbowser.github.io/workflows/build-to-gh-pages/badge.svg?branch=master&event=push)](https://github.com/NotThatBowser/notthatbowser.github.io/actions/workflows/main.yml)

Profile & dev story hosted on [Github Pages](https://notthatbowser.github.io), using React and Tailwind.

## CLI

- `npm run dev` Run locally with watch.
- `npm run test` Run Jest tests.
- `npm run build` Build for hosting with Github Pages (used by CI).

## Actions

- `build-to-gh-pages`: On push `master`, builds and pushes the static site to `gh-pages`.
- `pages-build-deployment`: On push `gh-pages`, deploys the site to GitHub Pages.
