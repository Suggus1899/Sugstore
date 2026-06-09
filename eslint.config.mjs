import pluginNext from "@next/eslint-plugin-next";

export default [
  pluginNext.configs["core-web-vitals"],
  {
    ignores: [".next/*", "node_modules/*"],
  },
];
