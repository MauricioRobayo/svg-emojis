import React, { Fragment, useEffect, useState } from "react";
import twemoji from "twemoji";
import twemojiIndex from "svg-emojis/twemoji/index.json";
import openMojiIndex from "svg-emojis/openmoji/color/index.json";
import fxEmojiIndex from "svg-emojis/fxemoji/index.json";

const packageName = "svg-emojis";
const cdn = "https://cdn.jsdelivr.net/npm";
function isEmoji(emoji: string) {
  return /\p{Extended_Pictographic}/u.test(emoji);
}

function App() {
  const [emoji, setEmoji] = React.useState("👍");
  const [emojis, setEmojis] = React.useState<
    { name: string; files: string[]; src: string }[]
  >([]);

  const emojiHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmoji(value);
  };

  useEffect(() => {
    if (!isEmoji(emoji)) {
      setEmojis([]);
      return;
    }

    const codePoint = twemoji.convert.toCodePoint(emoji);
    setEmojis(
      [
        {
          name: "Twemoji",
          files:
            twemojiIndex.filter((emoji) => emoji.includes(codePoint)) || [],
          src: "twemoji",
        },
        {
          name: "FxEmoji",
          files:
            fxEmojiIndex.filter((emoji) =>
              emoji.toLowerCase().includes(codePoint)
            ) || [],
          src: "fxemoji",
        },
        {
          name: "OpenMoji",
          files:
            openMojiIndex.filter((emoji) =>
              emoji.toLowerCase().includes(codePoint)
            ) || [],
          src: "openmoji/color",
        },
      ].filter((emoji) => emoji.files.length > 0)
    );
  }, [emoji]);

  return (
    <div className="container">
      <header>
        <h1>SVG Emojis</h1>
      </header>
      <main>
        <label htmlFor="emoji">Emoji</label>
        <input
          id="emoji"
          type="text"
          autoFocus
          onChange={emojiHandler}
          value={emoji}
          autoComplete="off"
        />
        <small>
          Copy and paste from{" "}
          <a href="https://getemoji.com">https://getemoji.com</a>
        </small>
        <article>
          {emojis.map(({ name, files, src }) => (
            <section key={name}>
              <h2>{name}</h2>
              {files.map((file) => (
                <Fragment key={file}>
                  <img
                    src={`${cdn}/${packageName}/${src}/${file}`}
                    alt={file}
                  />
                  <Code>{`${packageName}/${src}/${file}`}</Code>
                </Fragment>
              ))}
            </section>
          ))}
        </article>
      </main>
      <footer>
        View on{" "}
        <a href="https://github.com/MauricioRobayo/svg-emojis">GitHub</a>
      </footer>
    </div>
  );
}

function Code({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="code-wrapper">
      <code>{children}</code>
      <button type="button" className="copy-button" onClick={onClickHandler}>
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

export default App;
