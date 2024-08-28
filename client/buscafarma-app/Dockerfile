# Etapa 1: Construção da aplicação
FROM node:18 as build

WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos
COPY . .

# Construa a aplicação
RUN npm run build

# Etapa 2: Servir a aplicação com um servidor HTTP
FROM nginx:stable-alpine

# Copie os arquivos construídos da etapa anterior
COPY --from=build /app/dist /usr/share/nginx/html

# Exponha a porta 80
EXPOSE 80

# Comando para iniciar o servidor
CMD ["nginx", "-g", "daemon off;"]
