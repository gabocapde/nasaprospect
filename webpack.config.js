const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: ['./src/js/main.js'],
    // shared: ['./src/js/app/shared.js'],
    // vendor: [
    //   'jquery',
    //   'soundmanager2',
    //   'throttle-debounce',
    //   'hammerjs',
    //   'signals',
    //   'mdetect',
    //   'jquery.easing',
    //   'bootstrap'
    // ]
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/'
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
          test: /\.js$/,
          loader: 'shebang-loader'
      },
      {
        test: /\.less$/,
        loader: 'less-loader', // compiles Less to CSS
      },
    ]
  }
};
