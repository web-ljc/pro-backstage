const path = require('path')
const { name } = require('./package');
const CracoLessPlugin = require('craco-less');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve('src'),
      '@comm': path.resolve('src/componments'),
      '@css': path.resolve('src/static/css'),
      '@img': path.resolve('src/static/img'),
    },
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = 'build'
      webpackConfig.output= {
        ...webpackConfig.output,
        // 配置微前端
        path: path.resolve(__dirname, 'build'),
        library: `${name}-[name]`,
        libraryTarget: 'umd',
        // jsonpFunction = `webpackJsonp_${name}`,
        globalObject: 'window',
        // 打包的时候改成 /admin/， 开发时候改成 /
        publicPath: '/'
      }
      return webpackConfig;
    },
  },
  // babel: {
  //   plugins: [[
  //     'import',
  //     {
  //       libraryName: 'antd',
  //       libraryDirectory: 'es',
  //       style: true,
  //     }
  //   ]]
  // },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true,
    hot: true,
    liveReload: false
  }
}