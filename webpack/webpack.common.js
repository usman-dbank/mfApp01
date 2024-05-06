const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { dependencies } = require('../package.json');
const { micro_fe_path_prefix } = require('../public/manifest.json');

const imageOptions = {
  limit: 10000
};

module.exports = {
  entry: path.resolve(__dirname, '..', './src/index.ts'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.join(__dirname, '..', `dist/${micro_fe_path_prefix}`)
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@src': path.resolve(__dirname, '..', 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [{ removeViewBox: false }]
              },
              titleProp: true,
              ref: true
            }
          },
          'file-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
        loader: 'url-loader',
        options: imageOptions
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
                strictMath: false
              }
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        loader: 'css-loader',
        options: {
          url: true
        }
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    new ModuleFederationPlugin({
      name: 'ToolsMicroFrontendTemplate',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: Object.fromEntries(
        Object.entries({
          '/internal-routes': './src/internal-routes.tsx',
          '/quick-filters': './src/config/quick-filters.ts',
          '/side-bar': './src/config/side-bar.ts',
          '/config': './src/config/config.ts',
          '/template': './src/components/compound/template/template.tsx'
        }).map(([key, value]) => ['./' + micro_fe_path_prefix + key, value])
      ),
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom']
        },
        'react-error-boundary': {
          singleton: true,
          requiredVersion: dependencies['react-error-boundary']
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: dependencies['react-router-dom']
        },
        '@din-global/tools-component-library': {
          singleton: true,
          requiredVersion: dependencies['@din-global/tools-component-library']
        }
      }
    })
  ],
  stats: 'errors-only'
};
