import "tailwindcss/dist/tailwind.min.css";
import { addDecorator } from "@storybook/react";
import { initialize, mswDecorator } from "msw-storybook-addon";
import { withTests } from '@storybook/addon-jest';


import results from '../.jest-test-results.json';

addDecorator(
  withTests({
    results,
  })
);

// initialize();
addDecorator(mswDecorator);

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "Internationalization locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇺🇸", title: "English" },
        { value: "fr", right: "🇫🇷", title: "Français" },
        { value: "es", right: "🇪🇸", title: "Español" },
        { value: "zh", right: "🇨🇳", title: "中文" },
        { value: "kr", right: "🇰🇷", title: "한국어" }
      ]
    }
  },
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "Glu Ash",
    toolbar: {
      icon: "eye",
      // Array of plain string values or MenuItem shape (see below)
      items: ["Glu Ash", "Legacy", "Metro", "NatWest", "Unity", "HSBC"],
      // Property that specifies if the name of the item will be displayed
      showName: false
    }
  },
  currency: {
    name: "Currency",
    description: "Currency",
    defaultValue: "£",
    toolbar: {
      icon: "credit",
      // Array of plain string values or MenuItem shape (see below)
      items: ["£", "$", "€"],
      // Property that specifies if the name of the item will be displayed
      showName: false
    }
  },
  orientation: {
    name: "Text Orientation",
    description: "Currency",
    defaultValue: "LTR",
    toolbar: {
      icon: "book",
      // Array of plain string values or MenuItem shape (see below)
      items: ["LTR", "RTL"],
      // Property that specifies if the name of the item will be displayed
      showName: false
    }
  }
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}