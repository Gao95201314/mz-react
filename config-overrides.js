const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less')

module.exports = function(config, env) {

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, './src')
  }

  // 支持 less
  config = rewireLess(config, env);
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
  
  return config;
}
