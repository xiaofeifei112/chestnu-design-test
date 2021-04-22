import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'chestnut-design',
  favicon: 'https://www.gemii.cc/imagesV3/gemiilogo.png',
  logo: 'https://www.gemii.cc/imagesV3/gemiilogo.png',
  outputPath: 'docs-dist',
  "sass": {
    prependData: "@import './src/styles/public.scss';"
  }
  // more config: https://d.umijs.org/config
});
