FROM node:12.15.0-alpine

WORKDIR /src/app

COPY package.json /src/app/package.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "serve"]
