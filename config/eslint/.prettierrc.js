module.exports = {
  semi: true,
  trailingComma: "es5",
  singleQuote: true,
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
  proseWrap: "preserve",
  overrides: [
    {
      files: "*.{md,mdx}",
      options: {
        tabWidth: 2,
        useTabs: false,
        proseWrap: "preserve",
        singleQuote: false,
        parser: "markdown",
        embeddedLanguageFormatting: "off",
      },
    },
    {
      files: ["*.yml", "*.yaml", "*.md"],
      options: {
        tabWidth: 2,
        useTabs: false,
        singleQuote: false,
        bracketSpacing: false,
        parser: "yaml",
      },
    },
  ],
};
