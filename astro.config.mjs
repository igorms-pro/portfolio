import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import astroI18next from 'astro-i18next'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), astroI18next()],
})
