import type { ViteDevServer } from 'vite';

declare module 'portfolio-fe' {
  const server: ViteDevServer;
  export { server };
}
