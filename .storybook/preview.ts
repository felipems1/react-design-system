import type { Preview } from "@storybook/react";

import { themes } from '@storybook/theming'

import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
