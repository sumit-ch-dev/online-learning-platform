FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .   
CMD ["node", "./backend/server.js"]
EXPOSE 3000