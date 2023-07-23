import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  jsxFramework: 'qwik',

  preflight: false,

  // Where to look for your css declarations
  include: ['./src/**/*.{ts,tsx}'],

  // Files to exclude
  exclude: [],
  utilities: {
    extend: {
      mwInline: {
        className: 'mw-inline',
        values: { type: 'number' },
        transform(value: string) {
          console.log('transform  👻  value:', value)
          if (!value || !+value) return {}
          return {
            marginInline: `max(0px, 50% - ${value}px / 2)`,
          }
        },
      },
    },
  },

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: 'src/styled-system',
})
