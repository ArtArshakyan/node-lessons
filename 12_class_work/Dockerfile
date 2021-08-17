FROM node:current

WORKDIR /app

RUN npm install -D nodemon

COPY src /app/src/

COPY package.json package-lock.json /app/

EXPOSE 3000

RUN npm install

CMD npm run dev

