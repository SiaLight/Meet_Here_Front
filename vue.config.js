module.exports = {
    lintOnSave: false,
    configureWebpack: {},
    devServer: {
        proxy: {
            "/api":{
                target:"http://localhost:8082",
                pathRewrite:{
                    '^/api':''
                }
            }
        }
            //     //         '/api': {
            //     //             target: 'http://localhost:8082',
            //     //             ws: true,
            //     //             changeOrigin: true,
            //     //             pathRewrite: {
            //     //                 '^/api': ''  //通过pathRewrite重写地址，将前缀/api转为/
            //     //             }
            //     //         }
            //     //     }
            //     // }
        }
    }