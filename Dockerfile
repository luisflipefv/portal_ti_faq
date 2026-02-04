# Estágio 1: Build da aplicação
FROM node:20-alpine AS build

WORKDIR /app

# Copia os arquivos de dependências primeiro para aproveitar o cache do Docker
COPY package*.json ./
RUN npm install

# Copia o restante dos arquivos e gera o build de produção
COPY . .
RUN npm run build

# Estágio 2: Servindo com Nginx
FROM nginx:stable-alpine

# Copia os arquivos estáticos gerados no estágio anterior para o diretório do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expõe a porta 80 (padrão do Nginx)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]