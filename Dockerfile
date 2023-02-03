FROM node:14-alpine as builder

WORKDIR /usr/local/src/calculator

COPY . .

RUN npm i && npm run build

FROM node:14-alpine

WORKDIR /var/www/html

RUN npm i -g serve

COPY --from=builder /usr/local/src/calculator/build .

CMD ["serve", "-n", "-s", "/var/www/html"]
