import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    compressHTML: false,
    build: {
        format: 'file',
        cssMinify: false,
        inlineStylesheets: 'never',
        cssCodeSplit: true,
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    manualChunks: (id) => {

                        let lastPath = [id.split('/').length - 1]
                        let fileName = id.split('/')[lastPath]

                        if (id.match('custom') && id.includes('css')) {
                            return `custom-${fileName}`
                        }

                        if (id.match('common') && id.includes('css')) {
                            return fileName.replace('.css', '')
                        }

                    },
                    assetFileNames: (assetInfo) => {

                        let extType = assetInfo.name.split('.').at(1);

                        let dirName;

                        if (assetInfo.name.includes('custom')) {
                            dirName = assetInfo.name.slice(assetInfo.name.indexOf('-') + 1, assetInfo.name.lastIndexOf('.'))

                            console.log('dirName', dirName)
                            return `${extType}/custom/${dirName}/${dirName}.[ext]`
                        } else {
                            dirName = assetInfo.name.split('-')[0].replace('.css', '')
                            return `${extType}/${dirName}/${dirName}.[ext]`
                        }

                    },

                },
            }
        },
    },
});
