const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    publicPath: process.env.VUE_APP_BASE_PATH ? process.env.VUE_APP_BASE_PATH + '/' : '/',
    productionSourceMap: false,
    configureWebpack: {
        optimization: {
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                }),
            ],
        },
    },
}
