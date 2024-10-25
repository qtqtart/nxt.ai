import { alpha, PaletteMode, PaletteOptions } from "@mui/material"
import { SimplePaletteColorOptions } from "@mui/material"

type PaletteColor = Omit<SimplePaletteColorOptions, "main">

const ERROR_COLORS: PaletteColor = {
  _50: "#FFEBEE",
  _100: "#FFCDD2",
  _200: "#EF9A9A",
  _300: "#E57373",
  _400: "#EF5350",
  _500: "#F44336",
  _600: "#E53935",
  _700: "#D32F2F",
  _800: "#C62828",
  _900: "#B71C1C",
}

const INFO_COLORS: PaletteColor = {
  _50: "#E3F2FD",
  _100: "#BBDEFB",
  _200: "#90CAF9",
  _300: "#64B5F6",
  _400: "#42A5F5",
  _500: "#2196F3",
  _600: "#1E88E5",
  _700: "#1976D2",
  _800: "#1565C0",
  _900: "#0D47A1",
}

const NEUTRAL_COLORS: PaletteColor = {
  _50: "#FAFAFA",
  _100: "#F5F5F5",
  _200: "#EEEEEE",
  _300: "#E0E0E0",
  _400: "#BDBDBD",
  _500: "#9E9E9E",
  _600: "#757575",
  _700: "#616161",
  _800: "#424242",
  _900: "#212121",
}

const PRIMARY_COLORS: PaletteColor = {
  _50: "#F3E5F5",
  _100: "#E1BEE7",
  _200: "#CE93D8",
  _300: "#BA68C8",
  _400: "#AB47BC",
  _500: "#9C27B0",
  _600: "#8E24AA",
  _700: "#7B1FA2",
  _800: "#6A1B9A",
  _900: "#4A148C",
}

const SECONDARY_COLORS: PaletteColor = {
  _50: "#EDE7F6",
  _100: "#D1C4E9",
  _200: "#B39DDB",
  _300: "#9575CD",
  _400: "#7E57C2",
  _500: "#673AB7",
  _600: "#5E35B1",
  _700: "#512DA8",
  _800: "#4527A0",
  _900: "#311B92",
}

const SUCCESS_COLORS: PaletteColor = {
  _50: "#E8F5E9",
  _100: "#C8E6C9",
  _200: "#A5D6A7",
  _300: "#81C784",
  _400: "#66BB6A",
  _500: "#4CAF50",
  _600: "#43A047",
  _700: "#388E3C",
  _800: "#2E7D32",
  _900: "#1B5E20",
}

const WARNING_COLORS: PaletteColor = {
  _50: "#FFF8E1",
  _100: "#FFECB3",
  _200: "#FFE082",
  _300: "#FFD54F",
  _400: "#FFCA28",
  _500: "#FFC107",
  _600: "#FFB300",
  _700: "#FFA000",
  _800: "#FF8F00",
  _900: "#FF6F00",
}

const colors: PaletteOptions = {
  action: {
    activatedOpacity: 0.1,
    focusOpacity: 0.1,
    hoverOpacity: 0.1,
    selectedOpacity: 0.1,
  },
  //
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  //
  error: {
    main: ERROR_COLORS._500,
    ...ERROR_COLORS,
  },
  info: {
    main: INFO_COLORS._500,
    ...INFO_COLORS,
  },
  neutral: {
    main: NEUTRAL_COLORS._500,
    ...NEUTRAL_COLORS,
  },
  primary: {
    main: PRIMARY_COLORS._500,
    ...PRIMARY_COLORS,
  },
  secondary: {
    main: SECONDARY_COLORS._500,
    ...SECONDARY_COLORS,
  },
  success: {
    main: SUCCESS_COLORS._500,
    ...SECONDARY_COLORS,
  },
  warning: {
    main: WARNING_COLORS._500,
    ...WARNING_COLORS,
  },
}

//

export function palette(mode: PaletteMode) {
  const light: PaletteOptions = {
    ...colors,
    background: {
      background: NEUTRAL_COLORS._900,
      //
      error: ERROR_COLORS._400,
      errorContainer: ERROR_COLORS._800,
      //
      info: INFO_COLORS._400,
      infoContainer: INFO_COLORS._800,
      //
      onBackground: NEUTRAL_COLORS._100,
      //
      onError: ERROR_COLORS._900,
      onErrorContainer: ERROR_COLORS._100,
      //
      onInfo: INFO_COLORS._900,
      onInfoContainer: INFO_COLORS._100,
      //
      onPrimary: PRIMARY_COLORS._900,
      onPrimaryContainer: PRIMARY_COLORS._100,
      //
      onSecondary: SECONDARY_COLORS._900,
      onSecondaryContainer: SECONDARY_COLORS._100,
      //
      onSuccess: SUCCESS_COLORS._900,
      onSuccessContainer: SUCCESS_COLORS._100,
      //
      onSurface: NEUTRAL_COLORS._900,
      //
      onWarning: WARNING_COLORS._900,
      onWarningContainer: WARNING_COLORS._100,
      //
      outline: NEUTRAL_COLORS._400,
      //
      primary: PRIMARY_COLORS._400,
      primaryContainer: PRIMARY_COLORS._800,
      //
      secondary: SECONDARY_COLORS._400,
      secondaryContainer: SECONDARY_COLORS._800,
      //
      success: SUCCESS_COLORS._400,
      successContainer: SUCCESS_COLORS._800,
      //
      surface: NEUTRAL_COLORS._900,
      surfaceAt10: alpha(PRIMARY_COLORS._700, 0.1),
      surfaceAt20: alpha(PRIMARY_COLORS._700, 0.2),
      surfaceAt30: alpha(PRIMARY_COLORS._700, 0.3),
    },
    mode: "light",
  }

  const dark: PaletteOptions = {
    ...colors,
    background: {
      background: NEUTRAL_COLORS._100,
      //
      error: ERROR_COLORS._700,
      errorContainer: ERROR_COLORS._300,
      //
      info: INFO_COLORS._700,
      infoContainer: INFO_COLORS._300,
      //
      onBackground: NEUTRAL_COLORS._900,
      //
      onError: ERROR_COLORS._200,
      onErrorContainer: ERROR_COLORS._900,
      //
      onInfo: INFO_COLORS._200,
      onInfoContainer: INFO_COLORS._900,
      //
      onPrimary: PRIMARY_COLORS._200,
      onPrimaryContainer: PRIMARY_COLORS._900,
      //
      onSecondary: SECONDARY_COLORS._200,
      onSecondaryContainer: SECONDARY_COLORS._900,
      //
      onSuccess: SUCCESS_COLORS._200,
      onSuccessContainer: SUCCESS_COLORS._900,
      //
      onSurface: NEUTRAL_COLORS._900,
      //
      onWarning: WARNING_COLORS._200,
      onWarningContainer: WARNING_COLORS._900,
      //
      outline: NEUTRAL_COLORS._600,
      //
      primary: PRIMARY_COLORS._700,
      primaryContainer: PRIMARY_COLORS._300,
      //
      secondary: SECONDARY_COLORS._700,
      secondaryContainer: SECONDARY_COLORS._300,
      //
      success: SUCCESS_COLORS._700,
      successContainer: SUCCESS_COLORS._300,
      //
      surface: NEUTRAL_COLORS._100,
      surfaceAt10: alpha(PRIMARY_COLORS._300, 0.1),
      surfaceAt20: alpha(PRIMARY_COLORS._300, 0.2),
      surfaceAt30: alpha(PRIMARY_COLORS._300, 0.3),
    },
    mode: "dark",
  }

  return mode === "light" ? light : dark
}
