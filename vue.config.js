module.exports = {
  //相当于webpack-dev-server,  对本地服务器进行配置
  devServer: {
    proxy: {
      "/api": {
        //表示
        target: "http://localhost:3000", //需要跨域的目标url ,我这里是自己本地起的一个服务端口
        changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
        pathRewrite: {
          "^/api": "", //若请求的路径在目标url下但不在/api 下，则将其转换成空
        },
      },
    },
  },
};

// /api/xxx/ccc=======>http://localhost:8888/xxx/ccc
