/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class', // Change this to 'class' if you want to use the '.dark' class for dark mode
  theme: {
    extend: {
      colors: {
        dark: '#111111',
        gray: {
          light: '#D0D0D5',
          divide: '#B1B0B9',
        },
      },
    },
  },
  plugins: [],
}
