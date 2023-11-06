import { defineConfig } from "astro/config";
import { babel } from '@rollup/plugin-babel';
import glob from 'glob';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
export default defineConfig({

  compressHTML: false,
  output: 'static',
  build: {
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

            let entries = glob.sync('src/js/**/*.js').map(file => file)

            chunkInfo.moduleIds.filter(element => {
              entries.map((item, i) => {
                if (element.includes(item)) {
                  let lastPath = [item.split("/").length - 1];
                  let extType = item.split(".").at(1);
                  let fileName = item.split("/")[lastPath].replace(`.${extType}`, '');
                  chunkInfo.name = fileName
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


