FROM node:20-alpine
WORKDIR /app
RUN npm init -y && npm install sqlite3
CMD ["node", "-e", "setInterval(() => {}, 1000)"]