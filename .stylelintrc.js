export default {
  extends: ["stylelint-config-standard-scss"],
  rules: {
    "selector-class-pattern": [
      "^(?!\\d)([a-z0-9]+(-[a-z0-9]+)*)(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*){0,2}?$",
      {
        resolveNestedSelectors: true,
        message: (selector) =>
          `"${selector}" selector should be written by the BEM naming methodology: https://en.bem.info/methodology/naming-convention/#alternative-naming-schemes`,
      },
    ],
    "no-empty-source": null,
    "selector-pseudo-element-no-unknown": true,
    "media-feature-name-no-unknown": [
      true,
      {
        ignoreMediaFeatureNames: ["min-device-pixel-ratio"],
      },
    ],
    "rule-empty-line-before": null,
    "comment-empty-line-before": null,
    "declaration-block-no-duplicate-properties": null,
    "font-family-name-quotes": "always-unless-keyword",
    "alpha-value-notation": null,
    "color-hex-length": "long",
    "color-named": "never",
    "color-hex-alpha": null,
    "number-max-precision": null,
    "color-function-notation": "legacy",
    "font-weight-notation": "numeric",
    "selector-max-universal": 1,
    "declaration-block-no-redundant-longhand-properties": null,
    "function-url-quotes": "always",
    "value-keyword-case": [
      "lower",
      {
        camelCaseSvgKeywords: true,
      },
    ],
  },
};
