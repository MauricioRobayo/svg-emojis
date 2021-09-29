# SVG Emojis

Choose your flavor of consistent cross-platform SVG emojis from [Twemoji](https://github.com/twitter/twemoji), [FxEMoji](https://github.com/mozilla/fxemoji), and [OpenMoji](https://www.openmoji.org/).

- [/twemoji](./twemoji)
- [/fxemoji](./fxemoji)
- [/openmoji/color](./openmoji/color)
- [/openmoji/black](./openmoji/black)

## Demo

https://svg-emojis.netlify.app

[![Netlify Status](https://api.netlify.com/api/v1/badges/387f0a53-f25f-409d-9dfb-3ca35c09ff8e/deploy-status)](https://app.netlify.com/sites/svg-emojis/deploys)

## Install

```
npm i svg-emojis
```

## Usage

You can use [babel-plugin-inline-react-svg](https://www.npmjs.com/package/babel-plugin-inline-react-svg) or [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack) to import them as a React component:

```js
import ThumbsUp from "svg-emojis/twemoji/1f44d.svg";

function App() {
  return (
    <div>
      <ThumbsUp />
    </div>
  );
}
```

### Create React App

👉 [Adding Images, Fonts, and Files](https://create-react-app.dev/docs/adding-images-fonts-and-files)

Import as URL:

```js
import React from "react";
import thumbsUp from "svg-emojis/twemoji/1f44d.svg";

function Header() {
  return <img src={thumbsUp} alt="" />;
}

export default Header;
```

Import as a `ReactComponent`:

```js
import { ReactComponent as ThumbsUp } from "svg-emojis/twemoji/1f44d.svg";

function App() {
  return (
    <div>
      <ThumbsUp />
    </div>
  );
}
```

### Nextjs

👉 [SVG components example](https://github.com/vercel/next.js/tree/canary/examples/svg-components) using [babel-plugin-inline-react-svg](https://www.npmjs.com/package/babel-plugin-inline-react-svg).

## CDN

Files can be delivered through [jsdelivr](https://www.jsdelivr.com/) (or [unpkg](https://unpkg.com/)):

- <img src="https://cdn.jsdelivr.net/npm/svg-emojis/twemoji/1f389.svg" width="16" /> https://cdn.jsdelivr.net/npm/svg-emojis/twemoji/1f389.svg
- <img src="https://cdn.jsdelivr.net/npm/svg-emojis/fxemoji/u1F389-partypopper.svg" width="16" /> https://cdn.jsdelivr.net/npm/svg-emojis/fxemoji/u1F389-partypopper.svg
- <img src="https://cdn.jsdelivr.net/npm/svg-emojis/openmoji/color/1F389.svg" width="16" /> https://cdn.jsdelivr.net/npm/svg-emojis/openmoji/color/1F389.svg
- <img src="https://cdn.jsdelivr.net/npm/svg-emojis/openmoji/black/1F389.svg" width="16" /> https://cdn.jsdelivr.net/npm/svg-emojis/openmoji/black/1F389.svg

## Contributions

All contributions are welcome!

