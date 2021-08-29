FROM node:lts

WORKDIR /app

RUN npm install -D nodemon

COPY package.json package-lock.json /app/

COPY . .

EXPOSE 3000

RUN npm install

CMD npm run generate
CMD npm run dev

