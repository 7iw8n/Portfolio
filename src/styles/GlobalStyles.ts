import { css } from "@emotion/react";

export const GlobalStyles = css`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css");

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: "Pretendard", sans-serif;
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 600;
    src: url("../main/fonts/Pretendard-SemiBold.woff2") format("woff2"),
      url("../main/fonts/Pretendard-SemiBold.woff") format("woff"),
      url("../main/fonts/Pretendard-SemiBold.ttf") format("truetype");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    src: url("../main/fonts/Pretendard-Medium.woff2") format("woff2"),
      url("../main/fonts/Pretendard-Medium.woff") format("woff"),
      url("../main/fonts/Pretendard-Medium.ttf") format("truetype");
  }
  @font-face {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 400;
    src: url("../main/fonts/Pretendard-Regular.woff2") format("woff2"),
      url("../main/fonts/Pretendard-Regular.woff") format("woff"),
      url("../main/fonts/Pretendard-Regular.ttf") format("truetype");
  }
  ul,
  li {
    list-style: none;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    font-family: "Pretendard", sans-serif;
  }
  @media (max-width: 700px) {
    html {
      font-size: 50%;
    }
  }

  body {
    display: flex;
    flex-direction: column;
    font-family: "Pretendard", sans-serif;
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
  span {
    white-space: pre-line;
  }
`;
