import "@mui/material"

declare module "@mui/material" {
  interface PaletteOptions {
    neutral: PaletteColor
  }

  interface SimplePaletteColorOptions {
    _50: string
    _100: string
    _200: string
    _300: string
    _400: string
    _500: string
    _600: string
    _700: string
    _800: string
    _900: string
  }

  interface TypeBackground {
    background: string
    //
    error: string
    errorContainer: string
    //
    info: string
    infoContainer: string
    //
    onBackground: string
    //
    onError: string
    onErrorContainer: string
    //
    onInfo: string
    onInfoContainer: string
    //
    onPrimary: string
    onPrimaryContainer: string
    //
    onSecondary: string
    onSecondaryContainer: string
    //
    onSuccess: string
    onSuccessContainer: string
    //
    onSurface: string
    //
    onWarning: string
    onWarningContainer: string
    //
    outline: string
    //
    primary: string
    primaryContainer: string
    //
    secondary: string
    secondaryContainer: string
    //
    success: string
    successContainer: string
    //
    surface: string
    surfaceAt10: string
    surfaceAt20: string
    surfaceAt30: string
    //
    warning: string
    warningContainer: string
  }
}
