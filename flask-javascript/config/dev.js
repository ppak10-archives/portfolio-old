// ----------------------------------------------------------------------------
// Original Creator: Martin Angelov
// File Developer: Peter Pak
// Description: Webpack development configuration settings
// ----------------------------------------------------------------------------

// Module Imports -------------------------------------------------------------
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// ----------------------------------------------------------------------------

// Development Configuration Function -----------------------------------------
function developmentConfiguration(configDirs) {
  let devConfig = Object.assign({}, require('./common.js')(configDirs));        // Declares common settings from common.js

  devConfig.plugins.push(new BundleAnalyzerPlugin());
  return devConfig
};
// ----------------------------------------------------------------------------

// Module Export --------------------------------------------------------------
module.exports = developmentConfiguration;
// ----------------------------------------------------------------------------
