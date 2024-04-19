# 使用 node:14 镜像作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json (如果存在)
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制剩余的后端应用源代码
COPY . .

# 暴露端口3000供外部访问
EXPOSE 3000

# 设置容器启动后执行的命令
CMD ["node", "index.js"]
