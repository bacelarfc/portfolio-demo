FROM node:20-alpine AS build

# Frotend setup
FROM build AS client

WORKDIR /usr/src/client

COPY client/package*.json ./
RUN npm install 

COPY client/ .
RUN npm run build 

# Backend setup
FROM build AS server

WORKDIR /usr/src/app

COPY server/package*.json ./
RUN npm install

COPY server/ .

COPY --from=client /usr/src/client/dist ./public

EXPOSE 5001

CMD ["node", "server.js"]
