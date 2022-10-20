const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { 
              '@primary-color': '#235347',
              '@processing-color': '#235347',
           },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};