FROM ubuntu:20.04

WORKDIR /rest-api

COPY package*.json /rest-api

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_14.x  | bash -
RUN apt-get -y install nodejs

RUN npm install -D nodemon

RUN npm install

COPY . /rest-api

EXPOSE 8000

VOLUME [ "/rest-api/node_modules" ]

CMD [ "npm", "run", "dev" ]