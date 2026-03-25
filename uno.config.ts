import { defineConfig, presetIcons, presetWind3, transformerVariantGroup } from 'unocss'

import compositions from './src/design-system/compositions'
import ui from './src/design-system/ui'

import theme from './theme'

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(astro|html)($|\?)/,
        'src/design-system/*.{js,ts}',
      ],
    },
  },
  presets: [presetWind3({ preflight: true }), presetIcons({})],
  transformers: [transformerVariantGroup()],
  extendTheme: (themeDefault) => {
    return {
      ...themeDefault,
      colors: theme.colors,
      fontWeight: theme.fontWeight,
      lineHeight: theme.lineHeight,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSize,
      spacing: theme.spacing,
    }
  },
  shortcuts: [compositions, ui],
})
