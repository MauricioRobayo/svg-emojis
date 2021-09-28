import React from "react";
import styled from "styled-components/macro";
import twemoji from "twemoji";
import twemojiIndex from "svg-emojis/twemoji/index.json";
import openMojiColorIndex from "svg-emojis/openmoji/color/index.json";
import openMojiBlackIndex from "svg-emojis/openmoji/black/index.json";
import fxEmojiIndex from "svg-emojis/fxemoji/index.json";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const EmojiInput = styled.input`
  font-size: 4rem;
  height: 5rem;
  width: 5rem;
  border: 4px solid gainsboro;
  border-radius: 0.5rem;
  text-align: center;
  padding: 1rem;
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
  const [emoji, setEmoji] = React.useState("");
  const [twemojiFiles, setTwemojiFiles] = React.useState<string[]>([]);
  const [openMojiColorFiles, setOpenMojiColorFiles] = React.useState<string[]>(
    []
  );
  const [openMojiBlackFiles, setOpenMojiBlackFiles] = React.useState<string[]>(
    []
  );
  const [fxEmojiFiles, setFxEmojiFiles] = React.useState<string[]>([]);

  const emojiHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/\p{Extended_Pictographic}/u.test(value)) {
      const codePoint = twemoji.convert.toCodePoint(value);
      setTwemojiFiles(
        twemojiIndex.filter((emoji) => emoji.includes(codePoint))
      );
      setFxEmojiFiles(
        fxEmojiIndex.filter((emoji) => emoji.toLowerCase().includes(codePoint))
      );
      setOpenMojiColorFiles(
        openMojiColorIndex.filter((emoji) =>
          emoji.toLowerCase().includes(codePoint)
        )
      );
      setOpenMojiBlackFiles(
        openMojiBlackIndex.filter((emoji) =>
          emoji.toLowerCase().includes(codePoint)
        )
      );
    }
    setEmoji(value);
  };

  return (
    <div>
      <header>
        <h1>SVG Emojis</h1>
      </header>
      <Main>
        <label htmlFor="emoji">Emoji</label>
        <EmojiInput
          id="emoji"
          type="text"
          autoFocus
          onChange={emojiHandler}
          value={emoji}
        />
        <SmallParagraph>
          Copy and paste from:{" "}
          <a href="https://getemoji.com">https://getemoji.com</a>
        </SmallParagraph>
        <Output>
          <section>
            <h2>Twemoji</h2>
            <ul>
              {twemojiFiles.map((file) => (
                <li key={file}>{file}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>FxEmoji</h2>
            <ul>
              {fxEmojiFiles.map((file) => (
                <li key={file}>{file}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>OpenMoji Color</h2>
            <ul>
              {openMojiColorFiles.map((file) => (
                <li key={file}>{file}</li>
              ))}
            </ul>
          </section>
          <section>
            <h2>OpenMoji Black</h2>
            <ul>
              {openMojiBlackFiles.map((file) => (
                <li key={file}>{file}</li>
              ))}
            </ul>
          </section>
        </Output>
      </Main>
    </div>
  );
}

export default App;
