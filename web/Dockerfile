FROM node:12-alpine
WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

COPY . .

RUN yarn build
CMD yarn start