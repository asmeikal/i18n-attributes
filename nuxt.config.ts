// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/i18n"],
  i18n: {
    langDir: "locales/",
    defaultLocale: "en",
    strategy: "no_prefix",
    lazy: true,
    locales: [
      {
        code: "en",
        name: "English",
        file: "en.json",
      },
    ],
  },
});
