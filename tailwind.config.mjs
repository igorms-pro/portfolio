/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        gray: {
          light: '#D0D0D5',
          divide: '#B1B0B9',
        },
        purple: '#6938EF',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/images/igor.svg')",
      },
    },
  },
  plugins: [],
}
