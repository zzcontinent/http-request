const axios = require('axios')
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.baseURL = '/alpha'

module.exports = {
    Post: function (url, data) {
        return axios.post(url, data)
    },
    proxyTableConfig: {
        '/alpha': {
            target: 'http://alpha.mini.router',
            changeOrigin: true,
            pathRewrite: {
                '^/alpha': ''
            }
        }
    }

}
