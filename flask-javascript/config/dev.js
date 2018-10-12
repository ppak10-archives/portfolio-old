// ----------------------------------------------------------------------------
// Original Creator: Martin Angelov
// File Developer: Peter Pak
// Description: Webpack development configuration settings
// ----------------------------------------------------------------------------

// Plugin Imports -------------------------------------------------------------
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// ----------------------------------------------------------------------------

// Development Configuration Function -----------------------------------------
function developmentConfiguration(configDirs) {
  let devConfig = Object.assign({}, require('./common.js')(configDirs));        // Declares common settings from common.js

  // Plugins ------------------------------------------------------------------
  devConfig.plugins.push(new BundleAnalyzerPlugin());

  // Development Server Configuration -----------------------------------------
  devConfig[ "devServer" ] = {
    publicPath: '/dist/',                                                       // Set dev server public path same as output
    historyApiFallback: true,                                                   // Routing requests go back to index.html
    port: 9000                                                                  // Development server localhost port
  };

  // Miscellaneous Settings ---------------------------------------------------
  devConfig.output.publicPath = 'dist/';

  return devConfig
};
// ----------------------------------------------------------------------------

// Module Export --------------------------------------------------------------
module.exports = developmentConfiguration;
// ----------------------------------------------------------------------------
