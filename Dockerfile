# 選擇 Node.js 的基礎映像檔
FROM node:lts AS builder

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json (或 yarn.lock)
COPY package*.json ./

# 安裝依賴
RUN npm i

# 複製其他應用程式文件
COPY . .

RUN npm run build

# 選擇第二階段構建以優化大小
FROM node:lts-alpine

# 設定工作目錄
WORKDIR /app

# 複製從第一階段構建的 node_modules 和應用文件
COPY --from=builder /app .

# 暴露應用程式使用的端口
# EXPOSE 1015

# 定義啟動命令
CMD ["npm", "run", "serve", "--", "--port", "8080", "--host", "localhost"]