FROM node:12-alpine

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

RUN npm i -g serve

CMD ["serve", "-n", "-s", "/app/build"]
