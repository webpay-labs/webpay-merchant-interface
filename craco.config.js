const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#CC02FE',
              '@font-family':
                '-apple-system, BlinkMacSystemFont, CircularStd, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,Noto Color Emoji',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
