import { createGlobalStyle } from 'styled-components';

import { FONTS, LINE_HEIGHTS } from './theme';

export const GlobalStyles = createGlobalStyle`
*,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  ul,
  ol {
    padding: 0;
    list-style: none;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    min-height: 100vh;
    padding-bottom: 100px;
    font-family: ${FONTS.primary};
    line-height: ${LINE_HEIGHTS.m};
    text-rendering: optimizeSpeed;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }
`;
