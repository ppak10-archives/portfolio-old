const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  inject: true,
});

/**
 * Common configuration for webpack bundles
 * @param  {[type]} configDirs [description]
 * @return {[type]}            [description]
 */
function webpackCommonConfig(configDirs) {
  return {
    plugins: [HtmlWebpackPluginConfig],
    entry: ['@babel/polyfill',configDirs.APP_DIR],
    output: {
      path: configDirs.BUILD_DIR,
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react'],
              plugins: ['@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-syntax-dynamic-import'],
            },
          },
        },
        {
          test: /\.(scss)$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function() {
                  return [
                    require('precss'),
                    require('autoprefixer'),
                  ];
                },
              },
            },
            {
              loader: 'sass-loader'
            },
          ],
        },
      ],
    },
  };
};

module.exports = webpackCommonConfig;
