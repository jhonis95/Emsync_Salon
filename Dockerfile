# Etapa 1: Build
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Produção
FROM node:20-slim
WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/package*.json ./
RUN npm install --only=production

EXPOSE 3333
CMD ["node", "build/server.js"]
