import { createGlobalStyle } from 'styled-components';

import { FONTS, FONT_SIZES, LINE_HEIGHTS } from './theme';
import { COLORS } from './theme';

import MariupolRegular from './assets/font/Mariupol-Regular.woff';
import MariupolMedium from './assets/font/Mariupol-Medium.woff';
import MariupolBold from './assets/font/Mariupol-Bold.woff';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Mariupol';
    src: url(${MariupolRegular}) format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Mariupol';
    src: url(${MariupolMedium}) format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Mariupol';
    src: url(${MariupolBold}) format('woff');
    font-weight: 700;
  }

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
    font-family: ${FONTS.primary};
    font-size: ${FONT_SIZES.s16};
    line-height: ${LINE_HEIGHTS.h22};
    text-rendering: optimizeSpeed;
    color: ${COLORS.black};

    background-color: ${COLORS.background};
  }

  a:not([class]) {
    text-decoration: none;
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
