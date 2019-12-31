module.exports = {
    lintOnSave: false,
    configureWebpack: {},
    devServer: {
        proxy: {
            "/api":{

                target:"http://localhost:8084",
                pathRewrite:{
                    '^/api':''
                }
            }
        }
          
        }
    }