const axios = require('axios')
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = '/alpha'

module.exports = {
    Post: function (baseUrl, url, data) {
        axios.defaults.baseURL = baseUrl
        return axios.post(url, data)
    },
    proxyTableConfig: {
        '/alpha': {
            target: 'http://alpha.mini.router',
            changeOrigin: true,
            pathRewrite: {
                '^/alpha': ''
            }
        },
        '/sit': {
            target: 'http://sit.mini.router',
            changeOrigin: true,
            pathRewrite: {
                '^/sit': ''
            }
        },
        '/online': {
            target: 'http://online.mini.router',
            changeOrigin: true,
            pathRewrite: {
                '^/online': ''
            }
        }
    }

}
