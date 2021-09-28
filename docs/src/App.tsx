import React from "react";
import styled from "styled-components/macro";
import twemoji from "twemoji";
import twemojiIndex from "svg-emojis/twemoji/index.json";
import openMojiIndex from "svg-emojis/openmoji/color/index.json";
import fxEmojiIndex from "svg-emojis/fxemoji/index.json";

const cdn = "https://cdn.jsdelivr.net/npm/svg-emojis";
const EmojiInput = styled.input`
  font-size: 2rem;
  height: 3rem;
  width: 3rem;
  border: 4px solid gainsboro;
  border-radius: 0.5rem;
  text-align: center;
  padding: 0.5rem;
  margin: 0.5rem 0;
`;
const SmallParagraph = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #666;
`;
const Output = styled.div`
  text-align: left;
`;

function App() {
  const prefix = "svg-emojis";
  const [emoji, setEmoji] = React.useState("");
  const [emojis, setEmojis] = React.useState<
    { name: string; file: string; src: string }[]
  >([]);

  const emojiHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/\p{Extended_Pictographic}/u.test(value)) {
      const codePoint = twemoji.convert.toCodePoint(value);
      setEmojis([
        {
          name: "Twemoji",
          file: twemojiIndex.find((emoji) => emoji.includes(codePoint)) || "",
          src: `${cdn}/twemoji`,
        },
        {
          name: "FxEmoji",
          file:
            fxEmojiIndex.find((emoji) =>
              emoji.toLowerCase().includes(codePoint)
            ) || "",
          src: `${cdn}/fxemoji`,
        },
        {
          name: "OpenMoji",
          file:
            openMojiIndex.find((emoji) =>
              emoji.toLowerCase().includes(codePoint)
            ) || "",
          src: `${cdn}/openmoji/color`,
        },
      ]);
    }
    setEmoji(value);
  };

  return (
    <div>
      <header>
        <h1>SVG Emojis</h1>
      </header>
      <main>
        <label htmlFor="emoji">Emoji</label>
        <EmojiInput
          id="emoji"
          type="text"
          autoFocus
          onChange={emojiHandler}
          value={emoji}
        />
        <SmallParagraph>
          Copy and paste from{" "}
          <a href="https://getemoji.com">https://getemoji.com</a>
        </SmallParagraph>
        <Output>
          {emojis.map(({ name, file, src }) => {
            return (
              <section key={file}>
                <h2>
                  {name} <img src={`${src}/${file}`} alt={file} />
                </h2>
                <code>{`${prefix}/${name}/${file}`}</code>
              </section>
            );
          })}
        </Output>
      </main>
    </div>
  );
}

export default App;
