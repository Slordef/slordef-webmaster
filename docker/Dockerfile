FROM node:22-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/package.json .

COPY --from=builder /app/dist .

RUN npm install --only=production

CMD ["npm", "start"]