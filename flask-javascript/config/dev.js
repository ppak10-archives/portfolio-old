// ----------------------------------------------------------------------------
// Original Creator: Martin Angelov
// File Developer: Peter Pak
// Description: Webpack development configuration settings
// ----------------------------------------------------------------------------

// Plugin Imports -------------------------------------------------------------
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CopyWebpackPlugin = require('copy-webpack-plugin');
// ----------------------------------------------------------------------------

// Development Configuration Function -----------------------------------------
function developmentConfiguration(configDirs) {
  let devConfig = Object.assign({}, require('./common.js')(configDirs));        // Declares common settings from common.js

  // Plugins ------------------------------------------------------------------
  devConfig.plugins.push(new BundleAnalyzerPlugin());                           // Plugin to analyze bundle file sizes
  devConfig.plugins.push(new CopyWebpackPlugin([{                               // Plugin to test static files in development
    from : 'server/static/models', to: 'models'                                 // Sets static outputs to models folder
  }]))

  // Webpack Development Server Configuration ---------------------------------
  devConfig[ "devServer" ] = {                                                  // Webpack development server config settings
    publicPath: '/static/',                                                     // Set dev server public path same as output
    historyApiFallback: true,                                                   // Routing requests go back to index.html
    port: 9000                                                                  // Development server localhost port
  };

  // Miscellaneous Settings ---------------------------------------------------
  devConfig.output.publicPath = '/static/';                                     // Output public path to match index.html

  return devConfig
};
// ----------------------------------------------------------------------------

// Module Export --------------------------------------------------------------
module.exports = developmentConfiguration;                                      // Export webpack development configurations
// ----------------------------------------------------------------------------
