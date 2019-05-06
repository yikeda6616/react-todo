// Constants
const MODE = 'development';
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,

  entry: './src/index.js',

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/react']
            }
          }
        ]
      },

      {
        test: /\.scss/,
        use: [
          // style-loader will embed <link> tag into <head> tag
          'style-loader',

          // css-loader will bundle .css into js
          {
            loader: 'css-loader',
            options: {
              url: true,
              sourceMap: enabledSourceMap,
              /*
               * 0 => no loaders (default)
               * 1 => postcss-loader
               * 2 => postcss-loader, sass-loader
               */
              importLoaders: 2
            }
          },
          // postcss-loader will enable autoprefixer
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: enabledSourceMap,
              plugins: [
                // Enable Autoprefixer
                require('autoprefixer')({ grid: true })
              ]
            }
          },

          // sass-loader will compile .scss into .css
          { loader: 'sass-loader', options: { sourceMap: enabledSourceMap } }
        ]
      },
      {
        // Target file extensions
        test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },

  output: {
    path: `${__dirname}/dist`,
    filename: 'main.js'
  },

  devServer: {
    contentBase: 'dist',
    open: true
  }
};
