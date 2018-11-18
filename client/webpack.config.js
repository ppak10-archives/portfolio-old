const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'dist');
const APP_DIR = path.resolve(__dirname, './src');

const configDirs = {
  BUILD_DIR: BUILD_DIR,
  APP_DIR: APP_DIR,
  PATH: path,
};

/**
 * Config function to create a webpack bundle based on environment
 * @param  {[string]} env [environment to create webpack bundle for]
 * @return {[type]}     [description]
 */
function buildConfig(env) {
  if (env === 'development' || env === 'staging' || env === 'production') {
    console.log(require('./webpack/webpack.config.' + env + '.js')(configDirs));
    return require('./webpack/webpack.config.' + env + '.js')(configDirs);
  } else {
    console.log(`"${env}" is an invalid Webpack build parameter. Build `+
    `parameter must be either "development", "staging", or "production"`);
  }
}

module.exports = buildConfig;
