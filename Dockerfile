FROM node:20-alpine

WORKDIR /app

# Copier les fichiers de gestion des dépendances
COPY package*.json ./

# Installer les dépendances en production
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Exposer le port de l'API
EXPOSE 5000

# Lancer le serveur Node.js
CMD ["node", "server.js"]qF