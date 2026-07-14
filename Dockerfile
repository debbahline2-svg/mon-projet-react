# 1. On utilise une image Node.js stable et légère
FROM node:20-alpine

# 2. On définit le dossier de travail dans le conteneur
WORKDIR /app

# 3. On copie uniquement les fichiers de configuration pour installer les dépendances de manière optimisée
COPY package*.json ./

# 4. On installe les dépendances du projet
RUN npm install

# 5. On copie le reste du code de notre projet
COPY . .

# 6. On expose le port par défaut de Vite (5173)
EXPOSE 5173

# 7. Commande pour lancer le projet en mode développement avec Vite
CMD ["npm", "run", "dev", "--", "--host"]