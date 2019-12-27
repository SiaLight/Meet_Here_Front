module.exports = {
    lintOnSave: false,
    configureWebpack: {},
    devServer: {
        host: "localhost",
        port: 8080,

        proxy: {
            "server":{
                target:"http://localhost:8082",
                ws:true,
                changeOrigin: true,
                pathRewrite:{
                    '^/server':''
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