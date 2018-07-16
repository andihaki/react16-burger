const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js', // lazyloading (dynamic import)
    publicPath: '',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.js$/, // semua file ending .js = valid
        loader: 'babel-loader',// kalo filenya .js panggil file ini
        exclude: /node_modules/
      },
      {
        test: /\.css$/, // semua file ending .css = valid
        exclude: /node_modules/,
        use: [ // "use" = multiple loader
          { loader: 'style-loader' }, // dibaca kedua
          { 
            loader: 'css-loader',
            options: {
              importLoaders: 1, // jalanin 1 loader (postcss-loader) sebelum ini
              modules: true, // enable css lloader
              localIdentName: '[name]_[local]_[hash:base64:5]' // nama file css
            }
          }, // dibaca pertama
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer({
                  browsers: [
                    "> 1%",
                    "last 2 versions"
                  ]
                })
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: 'url-loader?limit=8000&name=images/[name].[ext]' ,// url-loader = convert jadi img base64. "?" kalo ga maka pake file loader
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // inject script ke index.html
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};