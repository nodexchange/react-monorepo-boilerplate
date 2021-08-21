import { create } from "@storybook/theming/create";

export default create({
  base: "light",

  colorPrimary: "#3400ff",
  colorSecondary: "#0070b9",

  // UI
  appBg: "white",
  appContentBg: "#F2F3F4",
  appBorderColor: "#F2F3F4",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: "monospace",

  brandTitle: "PTX Shared Libraries"
  // brandUrl: 'http://resolvvi.com.br/',
  // brandImage: ''
});
