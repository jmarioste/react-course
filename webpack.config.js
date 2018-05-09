const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = (env, argv) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return {
    entry: "./src/app.js",
    // entry: "./src/playground/hoc.js",
    output: {
      path: path.join(__dirname, 'public'), //absolute path
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }]
    },
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
};


//Webpack notes
//loader - tells webpack how to load a file. For jsx, need to run babel-loader
//babel-core - run from webpack
//babel-loader - webpack plugin
//how to setup presets in webpack? => .babelrc
//webpack dev-server - similar to live-server
  //speed up changes
  //contentBase - tells webpack where to find public assets
  //serves output from memory which is fast

// es6 class proerties syntax
//ExtractTextWebpackPlugin -extracts text
//loaders supports options