function Config() {

    var files = {
        '/users/*': {},
        '/file/*': {},
        '/order/*': {},
        '/product/*': {},
        '/operations/*': {}
    }

    for (var i in files) {


        files[i].target = "http://www.baidu.com/"

        files[i].changeOrigin = true;
    }
    return {
        port: 8080,
        disableHostCheck: true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: { colors: true },
        proxy: files
    }
}

module.exports = Config();