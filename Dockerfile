FROM node:current-slim
WORKDIR /usr/src/discordbot

# install node_modules
COPY package.json .
RUN npm install

# install sqlite
RUN apt-get update -y
RUN apt install sqlite3 -y

CMD [ "npm", "start" ]

COPY . .
