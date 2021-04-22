import {defineConfig} from 'dumi';

const dev = process.env.NODE_ENV === "development"

export default defineConfig({
  title: 'chestnut-design',
  favicon: 'https://www.gemii.cc/imagesV3/gemiilogo.png',
  logo: 'https://www.gemii.cc/imagesV3/gemiilogo.png',
  outputPath: 'docs-dist',
  publicPath: dev ? '/' : './',
  "sass": {
    // prependData: "@import './src/styles/public.scss';"
  },
  base: dev ? "/" : "/chestnu-design-test/docs-dist/",
  dynamicImport: {}
});
