const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function(app) {
    app.use(createProxyMiddleware('/api/submit', {target: 'http://localhost:8000'}))
    app.use(createProxyMiddleware('/backend', {target: 'http://localhost:5000'}))
}