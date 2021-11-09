// more config: https://d.umijs.org/config
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'antv-site-demo-rc',
  favicon: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  logo: 'https://avatars0.githubusercontent.com/u/9441414?s=200&v=4',
  outputPath: '.doc',
  exportStatic: {},
  base: '/antv-site-demo-rc/',
  publicPath: '/antv-site-demo-rc/',
  hash: true,
  styles: [
    `
      .markdown table {
        width: auto !important;
      }
    `,
  ],
});
