import { defineConfig, transformerCompileClass, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      brand: '#6911d4',
      dim: {
        50: '#cdcfd3',
        100: '#bfc1c5',
        200: '#b2b2b6',
        300: '#a5a4a7',
        400: '#979799',
        500: '#8a898b',
        600: '#7d7c7d',
        700: '#706f70',
        800: '#636263',
        900: '#565656',
      },
    },
    fontFamily: {
      sans: '"Work Sans", sans-serif',
    },
  },
  transformers: [transformerCompileClass(), transformerDirectives(), transformerVariantGroup()],
})
