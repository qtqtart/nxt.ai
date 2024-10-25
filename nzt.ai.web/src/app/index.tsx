import { FC } from "react"
import { HelmetProvider } from "react-helmet-async"
import { Provider as StoreProvider } from "react-redux"
import { PersistGate as PersistorProvider } from "redux-persist/integration/react"

import { ErrorBoundaryProvider } from "./providers/error-boundary"
import { ThemeProvider } from "./providers/theme-provider"
import { persistor, store } from "./store"

export const App: FC = () => {
  return (
    <HelmetProvider>
      <StoreProvider store={store}>
        <PersistorProvider persistor={persistor}>
          <ThemeProvider>
            <ErrorBoundaryProvider fallback={<>123</>}>
              <>123</>
            </ErrorBoundaryProvider>
          </ThemeProvider>
        </PersistorProvider>
      </StoreProvider>
    </HelmetProvider>
  )
}
