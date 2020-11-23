import { theme as chakraTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  sm: '485px',
  md: '720px',
  lg: '1024px',
  xl: '1240px',
})

export const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
  },
  fonts,
  breakpoints,
}
