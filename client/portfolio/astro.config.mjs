import tailwind from '@astrojs/tailwind';
import { qwikReact } from '@builder.io/qwik-react/vite';
import qwikdev from '@qwikdev/astro';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    qwikdev(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    plugins: [qwikReact()],
  },
  server: {
    port: 3000,
  },
  devToolbar: {
    enabled: false,
  },
});
