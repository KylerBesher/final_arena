module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    // Error Prevention
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],

    // Modern JavaScript Practices
    "prefer-const": "error",
    "arrow-parens": ["error", "always"], // (param) => {} over param => {}
    "comma-dangle": ["error", "always-multiline"], // Require trailing commas
    "arrow-body-style": ["error", "as-needed"], // Prefer implicit return when possible
    "object-shorthand": ["error", "always"], // { foo: foo } -> { foo }
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: true,
      },
    ],
    "prefer-template": "error", // Use template literals over string concatenation

    // React Specific
    "react/no-unused-prop-types": "error",
    "react/jsx-boolean-value": ["error", "never"], // <Component active /> over <Component active={true} />
    "react/self-closing-comp": "error", // <Component /> over <Component></Component>
    "react/jsx-curly-brace-presence": [
      "error",
      {
        props: "never",
        children: "never",
      },
    ],

    // Import/Export
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc" },
      },
    ],

    // Next.js
    "@next/next/no-img-element": "off",
  },
  settings: {
    next: {
      rootDir: ["."],
    },
  },
  ignorePatterns: [
    "node_modules/",
    ".next/",
    "out/",
    "public/",
    "**/*.config.js",
    "coverage/",
  ],
};
