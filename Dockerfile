FROM node:current-slim
WORKDIR /usr/src/discordbot
COPY package.json .
RUN npm install

CMD [ "npm", "start" ]

COPY . .
