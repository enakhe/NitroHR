import { createProxyMiddleware } from 'http-proxy-middleware';

export default function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'https://localhost:7259',
            changeOrigin: true,
        })
    )
}