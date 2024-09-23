import "./index.css";
import { ThemeDecorator } from "./utils/Decorators";

export const parameters = {
  viewMode: "docs",
  previewTabs: { "storybook/docs/panel": { index: -1 } },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: [
        "Design System",
        [
          "Introduction",
          "How To(s)",
          "Core",
          "Quarks",
          "Atoms",
          "Molecules",
          "Organisms",
        ],
      ],
    },
  },
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "paintbrush",
      items: ["light", "dark"],
    },
  },
  language: {
    name: "Language",
    description: "Language for translations",
    defaultValue: "en-GB",
    toolbar: {
      icon: "globe",
      items: ["en-GB", "fr-FR"],
    },
  },
};

export const decorators = [ThemeDecorator];
