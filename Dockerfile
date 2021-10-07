FROM node:12

WORKDIR /app

COPY /app/package.json .

RUN npm install

COPY /app .

EXPOSE 4444

CMD [ "npm", "start" ]