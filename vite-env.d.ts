/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PUBLIC_GTM_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
