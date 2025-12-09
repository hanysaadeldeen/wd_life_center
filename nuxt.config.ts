// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@nuxtjs/i18n"],
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  components: ["~/components", "~/utils"],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/LogoTap.svg",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Tajawal:wght@200;300;400;500;700;800;900&display=swap",
        },
      ],
      title: "WD Life",
      meta: [
        {
          name: "description",
          content: "مكانك الآمن لفهم نفسك، وإصلاح ما يؤلمك، واستعادة توازنك",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image",
          content: "https://wdlife.com.sa/OgImage.png",
        },
        {
          name: "twitter:image",
          content: "https://wdlife.com.sa/OgImage.png",
        },
      ],
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
