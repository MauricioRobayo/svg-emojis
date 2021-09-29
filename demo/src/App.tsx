import React, { useEffect, useState } from "react";
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
  const [emoji, setEmoji] = React.useState("🐹");
  const [emojis, setEmojis] = React.useState<
    { name: string; file: string; src: string }[]
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
          file: twemojiIndex.find((emoji) => emoji.includes(codePoint)) || "",
          src: "twemoji",
        },
        {
          name: "FxEmoji",
          file:
            fxEmojiIndex.find((emoji) =>
              emoji.toLowerCase().includes(codePoint)
            ) || "",
          src: "fxemoji",
        },
        {
          name: "OpenMoji",
          file:
            openMojiIndex.find((emoji) =>
              emoji.toLowerCase().includes(codePoint)
            ) || "",
          src: "openmoji/color",
        },
      ].filter((emoji) => emoji.file !== "")
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
        />
        <small>
          Copy and paste from{" "}
          <a href="https://getemoji.com">https://getemoji.com</a>
        </small>
        <article>
          {emojis.map(({ name, file, src }) => {
            return (
              <section key={file}>
                <h2>
                  {name}
                  <img
                    src={`${cdn}/${packageName}/${src}/${file}`}
                    alt={file}
                  />
                </h2>
                <Code>{`${packageName}/${src}/${file}`}</Code>
              </section>
            );
          })}
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
        {copied ? "copied!" : "copy"}
      </button>
    </div>
  );
}

export default App;
