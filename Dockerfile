# 構建階段
FROM node:18-alpine AS builder

WORKDIR /app

# 複製 package.json 和 package-lock.json（如果存在）
COPY package*.json ./

# 只安裝生產依賴
RUN npm ci --only=production

# 複製源代碼
COPY . .

# 構建應用
RUN npm run build

# 運行階段
FROM nginx:alpine

# 複製構建結果到 Nginx 服務目錄
COPY --from=builder /app/build /usr/share/nginx/html

# 複製自定義 Nginx 配置（如果有的話）
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 啟動 Nginx
CMD ["nginx", "-g", "daemon off;"]