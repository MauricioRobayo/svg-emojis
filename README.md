SVG Emojis

SVG emojis from [Twemoji](https://github.com/twitter/twemoji), [FxEMoji](https://github.com/mozilla/fxemoji), and [OpenMoji](https://www.openmoji.org/).

- [/twemoji](./twemoji)
- [/fxemoji](./fxemoji)
- [/openmoji/color](./openmoji/color)
- [/openmoji/black](./openmoji/black)

## Install

```
npm i svg-emojis
```

## Usage

Import as URL:

```js
import React from "react";
import emoji from "svg-emojis/twemoji/1f0cf.svg";

function Header() {
  return <img src={emoji} alt="" />;
}

export default Header;
```

Import as a `ReactComponent`:

```js
import { ReactComponent as Emoji } from "svg-emojis/twemoji/1f0cf.svg";

function App() {
  return (
    <div>
      <Emoji />
    </div>
  );
}
```
