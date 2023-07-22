import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  jsxFramework: 'qwik',

  preflight: false,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'src/styled-system',
})
