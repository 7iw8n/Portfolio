import { css } from "@emotion/react";

export const GlobalStyles = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ul,
  li {
    list-style: none;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    font-family: "Labil Grotesk", "Noto Sans KR", "DM Sans", sans-serif;
  }
  body {
    display: flex;
    flex-direction: column;
  }
  button {
    cursor: pointer;
    border: none;
    background: none;
  }
  a {
    text-decoration: none;
  }
  input {
    border: none;
    outline: none;
  }
`;
