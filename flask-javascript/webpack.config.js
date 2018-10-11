const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  devServer:{
    publicPath: '/dist/',                                                       // Set dev server public path same as output
    historyApiFallback: true,                                                   // Routing requests go back to index.html
    port: 9000                                                                  // Development server localhost port
  },
  entry: ['@babel/polyfill','./src'],
  output: {
    path: __dirname + '/server/static/dist',
    publicPath: 'dist/',
    filename: '[name].bundle.js',                                               // Outputs as main.bundle.js
    chunkFilename: '[name].bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
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
            plugins: [
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
      },
      {
        test:/\.scss$/,
        use: [
          { loader: 'style-loader' },                                           // inject CSS to page
          { loader: 'css-loader' },                                             // translates CSS into CommonJS modules
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: function () { // post css plugins, can be exported to postcss.config.js
                return [
                  require('precss'),
                  require('autoprefixer')
                ];
              }
            }
          },
          { loader: 'sass-loader' }                                             // compiles Sass to CSS
        ]
      }
    ]
  }
};
