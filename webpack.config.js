// Constants
const MODE = 'development';

module.exports = {
  mode: MODE,

  entry: './src/index.js',

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
