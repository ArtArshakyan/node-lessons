FROM node:16-alpine

WORKDIR /app

COPY src /app/src/

COPY package.json package-lock.json /app/

RUN npm install

CMD npm run dev
