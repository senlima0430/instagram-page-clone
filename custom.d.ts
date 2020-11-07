declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
    NEXT_PUBLIC_UNSPLASH_ACCESS: string
  }
}
