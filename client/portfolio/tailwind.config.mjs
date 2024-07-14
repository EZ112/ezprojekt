/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Noto Sans Mono'],
        body: ['Inter'],
        'display-1': ['Fira Sans'],
        'display-2': ['IBM Plex Sans Condensed'],
      },
    },
  },
  plugins: [],
};
