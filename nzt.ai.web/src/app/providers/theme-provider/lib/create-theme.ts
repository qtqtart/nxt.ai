import { breakpoints, palette, shadows, typography } from "@app/styles"
import { createTheme as _createTheme, PaletteMode, ThemeOptions } from "@mui/material"

export function createTheme(themeMode: PaletteMode) {
  const themeOptions: ThemeOptions = {
    breakpoints,
    palette: palette(themeMode),
    shadows: shadows(themeMode),
    shape: {
      borderRadius: 8,
    },
    typography: typography(themeMode),
  }

  return _createTheme(themeOptions)
}
