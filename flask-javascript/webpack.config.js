// ----------------------------------------------------------------------------
// Original Creator: Martin Angelov
// File Developer: Peter Pak
// Description: Webpack configuration function for development and production
// ----------------------------------------------------------------------------

// Path Variables -------------------------------------------------------------
var path = require('path');
var BUILD_DIR = path.resolve(__dirname, './server/static/dist');
var APP_DIR = path.resolve(__dirname, './src');
// ----------------------------------------------------------------------------

// Directory Configuration ----------------------------------------------------
const configDirs = {
  BUILD_DIR: BUILD_DIR,
  APP_DIR: APP_DIR,
  PATH: path
}
// ----------------------------------------------------------------------------

// Webpack Configuration Function ---------------------------------------------
function buildConfig(env) {
  if (env === 'dev' || env === 'prod') {
    return require('./config/' + env + '.js')(configDirs);
  } else {
    console.log("Webpack build parameter must either be: `dev` or `prod`.")
  }
}
// ----------------------------------------------------------------------------

// Module Export --------------------------------------------------------------
module.exports = buildConfig;
// ----------------------------------------------------------------------------
