import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
import { qwikCity } from '@builder.io/qwik-city/vite'
import ViteTsconfigPaths from 'vite-tsconfig-paths'
import { macroPlugin } from '@builder.io/vite-plugin-macro'
import { partytownVite } from '@builder.io/partytown/utils'

import { join } from 'path'

export default defineConfig(() => {
  return {
    plugins: [
      macroPlugin({ preset: 'pandacss' }),
      qwikCity(),
      qwikVite(),
      ViteTsconfigPaths(),
      partytownVite({ dest: join(__dirname, 'dist', '~partytown') }),
    ],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  }
})
