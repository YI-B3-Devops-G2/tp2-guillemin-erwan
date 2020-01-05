FROM node:13.3-alpine

WORKDIR /home/app
RUN chown -R node:node /home/app

COPY package*.json ./
COPY server.js ./

RUN npm install

EXPOSE 3000
CMD [ "npm", "start" ]