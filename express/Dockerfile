FROM node:18-alpine

WORKDIR /app

COPY package*.json /app/

RUN npm install
RUN apk update
RUN apk add --update --no-cache curl py-pip

COPY . /app

CMD ["npm", "start"]

EXPOSE 8000