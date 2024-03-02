import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: true,
    port: 3000,
  },
});
