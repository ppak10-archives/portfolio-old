/**
 * webpack development configuration function
 * @param  {[type]} configDirs [description]
 * @return {[type]}            [description]
 */
function webpackDevConfig(configDirs) {
  const devConfig =
    Object.assign({},require('./webpack.config.common.js')(configDirs));

  devConfig.mode = 'development';
  devConfig["devServer"] = {
    contentBase: configDirs.BUILD_DIR,
    publicPath: '/',
    historyApiFallback: true,
    port: 3000
  }

  return devConfig;
}

module.exports = webpackDevConfig;
