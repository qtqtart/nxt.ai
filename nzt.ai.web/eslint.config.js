import js from "@eslint/js"
import i18next from "eslint-plugin-i18next"
import perfectionist from "eslint-plugin-perfectionist"
import prettier from "eslint-plugin-prettier"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import ts from "typescript-eslint"

const { config, plugin } = ts

export default config(
  ...ts.configs.recommended,
  js.configs.recommended,
  i18next.configs["flat/recommended"],
  {
    ignores: ["dist", "node_modules"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.es2024,
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": plugin,
      prettier,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/ban-ts-comment": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-unused-vars": "off",
      //
      "no-undef": "off",
      "no-unused-vars": "off",
      //
      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
      //
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  perfectionist.configs["recommended-natural"],
)
