/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID: string

  readonly SURREAL_ROOT: string
  readonly SURREAL_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
