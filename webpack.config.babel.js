const autoprefixer = require('autoprefixer');
const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry:{
    app: './src/index.js',
    theme: './src/theme.scss',
    carbon: './src/carbon.scss',
    typography: './src/typography.scss'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
            },
          },
          { loader: 'extract-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
               plugins: () => [autoprefixer()]
            }
          },
          {
            loader: 'sass-loader',
            options: {
                sourceMap: true,
                sassOptions: {includePaths: './node_modules'},
            },
          }
         ]
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ],
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader',
          ],
        },
      ],
    },
};
