/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_3D_HERO?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
