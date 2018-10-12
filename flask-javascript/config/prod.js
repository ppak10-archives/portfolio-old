// ----------------------------------------------------------------------------
// Original Creator: Martin Angelov
// File Developer: Peter Pak
// Description: Webpack production configuration settings
// ----------------------------------------------------------------------------

// Production Configuration Function ------------------------------------------
function productionConfiguration(configDirs) {
  let prodConfig = Object.assign({}, require('./common.js')(configDirs));       // Declares common settings from common.js

  // Miscellaneous Settings ---------------------------------------------------
  prodConfig.output.publicPath = 'static/dist/';

  return prodConfig
};
// ----------------------------------------------------------------------------

// Module Export --------------------------------------------------------------
module.exports = productionConfiguration;                                       // Export production configuration function
// ----------------------------------------------------------------------------
