//  你无需在任何位置导入此文件。 它在启动开发服务器时会自动注册。
const ROOT_API = process.env.REACT_APP_ROOT_API
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = app => {
  app.use(
    createProxyMiddleware("/api", {
      target: ROOT_API,
      changeOrigin: true,
      pathRewrite: { "^/api": "/api" },
    }),
  );
};