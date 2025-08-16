import vueI18n from "@intlify/eslint-plugin-vue-i18n";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(...vueI18n.configs.recommended, {
  settings: {
    "vue-i18n": {
      localeDir: "./i18n/locales/*.json",
      messageSyntaxVersion: "11.1.11",
    },
  },
});
