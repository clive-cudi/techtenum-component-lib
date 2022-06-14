import React from 'react';
import { ThemeCtxProvider } from '../src/providers';
import { Themes } from '../src/utils';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
      <Story />
  )
]