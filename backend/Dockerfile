# 使用 node:14 為 base image
FROM node:14

# 設定預設的目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝 npm 套件
RUN npm install

# 複製目前目錄下所有檔案到 docker 預設目錄下(/app)
COPY . .

# 公開 3000 port 讓外部連線
EXPOSE 3000

# 設定 docker 打開後的指令
CMD ["node", "index.js"]
