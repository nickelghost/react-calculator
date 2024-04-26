FROM node:20-alpine as builder

WORKDIR /usr/local/src/calculator

COPY . .

RUN npm i && npm run build

FROM caddy:2-alpine

WORKDIR /usr/share/caddy

COPY --from=builder /usr/local/src/calculator/dist .
