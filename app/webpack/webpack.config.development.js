
const CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * webpack development configuration function
 * @param  {[type]} configDirs [description]
 * @return {[type]}            [description]
 */
function webpackDevConfig(configDirs) {
  const devConfig =
    Object.assign({},require('./webpack.config.common.js')(configDirs));

  devConfig.mode = 'development';
  devConfig.plugins.push(new CopyWebpackPlugin([{
    from: configDirs.PUBLIC_DIR,
    to: 'public',
  }]));
  devConfig["devServer"] = {
    contentBase: configDirs.BUILD_DIR,
    publicPath: '/',
    historyApiFallback: true,
    port: 3000,
    host: '0.0.0.0'
  }

  return devConfig;
}

module.exports = webpackDevConfig;
