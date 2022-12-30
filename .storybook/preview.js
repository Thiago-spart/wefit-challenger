import React from 'react';

import { GlobalStyle } from "../src/web/pages/App/styles"

import theme from "../src/styles/theme";


export const decorators = [
  Story => (
    <>
      <GlobalStyle theme={theme} />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
