/// <reference types="vite/client" />
/// <reference types="redux-persist" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_IS_DEV: boolean
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
