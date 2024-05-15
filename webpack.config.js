import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        type: 'javascript/auto',
      },
      {
        test: /\.(jpg|png|gif)$/,
        type: 'assets',
    }
    ],
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "src/img", to: "public/img" },
      ],
      patterns: [
        { from: "src/fonts", to: "public/fonts" },
      ],
      patterns: [
        { from: "src/css", to: "public/css" },
      ],
    }),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'src'),
    },
    open: true,
  },

  mode: 'production',
};
