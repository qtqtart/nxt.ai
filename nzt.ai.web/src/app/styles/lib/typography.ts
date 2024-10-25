import { PaletteMode } from "@mui/material"
import { TypographyOptions } from "@mui/material/styles/createTypography"

import { palette } from "./palette"

export const typography = (themeMode: PaletteMode) => {
  const { background } = palette(themeMode)

  const _typography: TypographyOptions = {
    /* eslint-disable */
    fontFamily: "Roboto, sans-serif",
    fontWeightBold: 700,
    fontWeightMedium: 500,
    fontWeightRegular: 400,
    //
    body1: {
      color: background?.secondary,
      fontSize: 16,
      fontWeight: "normal",
      letterSpacing: "0.5px",
      lineHeight: "24px",
    },
    body2: {
      color: background?.secondary,
      fontSize: 14,
      fontWeight: "normal",
      letterSpacing: "0.25px",
      lineHeight: "20px",
    },
    //
    h1: {
      color: background?.onSurface,
      fontSize: "56px",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "64px",
      textTransform: "capitalize",
    },
    h2: {
      color: background?.onSurface,
      fontSize: "48px",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "52px",
      textTransform: "capitalize",
    },
    h3: {
      color: background?.onSurface,
      fontSize: "36px",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "44px",
      textTransform: "capitalize",
    },
    h4: {
      color: background?.onSurface,
      fontSize: 32,
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "40px",
      textTransform: "capitalize",
    },
    h5: {
      color: background?.onSurface,
      fontSize: "28px",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "36px",
      textTransform: "capitalize",
    },
    h6: {
      color: background?.onSurface,
      fontSize: 24,
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: "32px",
      textTransform: "capitalize",
    },
    button: {
      color: background?.onSurface,
      fontSize: 14,
      fontWeight: "bold",
      letterSpacing: "0.1px",
      lineHeight: "20px",
      textTransform: "capitalize",
    },
    //
    subtitle1: {
      color: background?.onSurface,
      fontSize: 22,
      fontWeight: "bold",
      lineHeight: "28px",
      textTransform: "capitalize",
    },
    subtitle2: {
      color: background?.onSurface,
      fontSize: 16,
      fontWeight: "bold",
      letterSpacing: "0.15px",
      lineHeight: "24px",
      textTransform: "capitalize",
    },
  }

  return _typography
}
