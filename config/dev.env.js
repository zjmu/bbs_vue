module.exports = merge(prodEnv, {
    NODE_ENV: 'development',
    API_HOST:"/api/"  // 开发环境中使用上面配置的代理地址api
  })