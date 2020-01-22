FROM node:12-alpine

WORKDIR /app

COPY . .

RUN npm i
RUN npm run build

FROM node:12-alpine

WORKDIR /app

RUN npm i -g serve

COPY --from=0 /app/build .

CMD ["serve", "-n", "-s", "/app"]
