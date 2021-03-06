import { defineConfig } from 'vite';
const fs = require('fs');

export default defineConfig({
  base: '/example/',
  server: {
    https: {
      key: fs.readFileSync('./localhost-key.pem'),
      cert: fs.readFileSync('localhost.pem'),
    },
  },
});
