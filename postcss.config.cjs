module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-mixins"),
    //require('postcss-nested'),
    //require('postcss-nesting'),
    //require('postcss-custom-media'),
    require("postcss-simple-vars"),
    require("postcss-preset-env")({ stage: 2 }),
    require("postcss-sort-media-queries"),
    //require('postcss-clean')
  ],
};
