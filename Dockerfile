FROM node:10-alpine

RUN mkdir /home/node/calculator

WORKDIR /home/node/calculator

COPY . .

RUN npm i
RUN npm run build
RUN npm i -g serve
RUN chown -R node:node /home/node/calculator

EXPOSE 5000

CMD ["serve", "-n", "-s", "/home/node/calculator/build"]
