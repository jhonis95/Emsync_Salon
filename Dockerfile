# Etapa 1: Build
FROM node:22-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa 2: Produção
FROM node:22-alpine
WORKDIR /app

COPY --from=build /app/build ./build
COPY --from=build /app/package*.json ./
RUN npm install --only=production

EXPOSE 3333
CMD ["node", "build/server.js"]
