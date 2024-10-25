import { useThemeMode } from "@features/theme-mode"
import { CssBaseline, ThemeProvider as MUIThemeProvider, StyledEngineProvider } from "@mui/material"
import { FC, PropsWithChildren, useMemo } from "react"

import { createTheme } from "../lib/create-theme"

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const { themeMode } = useThemeMode()
  const theme = useMemo(() => createTheme(themeMode), [themeMode])

  //

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />

        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}
