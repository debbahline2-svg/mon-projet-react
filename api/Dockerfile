FROM node:20-alpine

WORKDIR /app

# Copier les fichiers de configuration des packages
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

EXPOSE 5000

CMD ["node", "server.js"]