FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

ENV PORT=3333

COPY . .

RUN npm run build

EXPOSE 3333

CMD ["npm", "run", "start:dev"]