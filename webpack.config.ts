import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { type Configuration } from 'webpack';
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import 'webpack-dev-server';

interface EnvVars {
  production: boolean;
}

const config = (env: EnvVars): Configuration => {
  return {
    entry: './src/index.tsx',
    devServer: {
      static: './',
      open: true,
    },
    mode: env.production ? 'production' : 'development',
    devtool: env.production ? false : 'eval-cheap-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'asd',
        template: './public/index.html',
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].css',
      }),
      // new BundleAnalyzerPlugin({ openAnalyzer: true }),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            env.production ? MiniCssExtractPlugin.loader : 'style-loader',
            {
              loader: 'css-loader',
              options: {
                esModule: true,
                modules: {
                  auto: /\.module\.\w+$/i,
                  localIdentName: env.production ? '[hash:base64:8]' : '[path][name]__[local]',
                },
              },
            },
            'sass-loader',
          ],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      preferAbsolute: true,
      modules: ['node_modules', './src'],
      mainFiles: ['index'],
      alias: {
        '@': path.resolve('./src'),
      },
    },
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };
};

export default config;
