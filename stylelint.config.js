module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  "overrides": [
    {
      "files": ["**/*.vue"],
      "customSyntax": "postcss-html",
      "rules": {
      }
    }
  ]
}
