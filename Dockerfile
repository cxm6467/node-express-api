FROM node:16-bullseye-slim

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY /app/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY /app .

EXPOSE 8080
# CMD [ "npm", "run", "test"]
CMD [ "node", "app.js" ]