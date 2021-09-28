import React from "react";
import { ReactComponent as TE1f0cf } from "react-emoji-svg-components/twemoji/1f0cf.svg";
import styled from "styled-components/macro";

const Emoji = styled(TE1f0cf)`
  width: 1em;
  height: 1em;
`;

function App() {
  return (
    <div>
      <header>
        <h1>React Emoji SVG Components</h1>
        <Emoji />
      </header>
    </div>
  );
}

export default App;
