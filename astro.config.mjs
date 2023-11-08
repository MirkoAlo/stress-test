import { defineConfig } from "astro/config";
import { babel } from '@rollup/plugin-babel';
import glob from 'glob';
import path, { dirname } from "path";
import { getFileName } from './src/utils/utils'


// https://astro.build/config
export default defineConfig({

  compressHTML: false,
  output: 'static',
  build: {
    assetsPrefix: 'https://www.repstatic.it/nazionale/2024/',
    format: "file",
    assets: 'js',
    inlineStylesheets: "always",
    cssCodeSplit: true,
  },

  vite: {
    build: {
      optimizeChunks: false,
      minify: true,
      cssMinify: false,
      rollupOptions: {
        output: {
          entryFileNames: chunkInfo => {
            let entries = glob.sync('src/js/**/*.js', { "ignore": ['**/**/modules/*.js'] }).map(file => path.resolve(file))
            chunkInfo.moduleIds.filter(element => {
              entries.map((item, i) => {
                if (element.includes(item)) {
                  chunkInfo.name = getFileName(item)
                }
              })
            });
            let name = chunkInfo.name
            return `js/${name}/${name}.js`
          },
        },
        plugins: [
          babel({ babelHelpers: 'bundled' })
        ],
      },
      assetsInlineLimit: 0
    },
  },
});


