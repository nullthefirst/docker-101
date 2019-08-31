# An official Docker image for Node.js
FROM node:10-alpine

# Working directory for the containerised application
WORKDIR /src/app

# This copies significant package.json files to the current directory
COPY package*.json ./
# Install essential Node.js dependencies
RUN npm install

COPY . .

# Opens up this port on the Docker container
EXPOSE 8080

# This starts the Docker application
CMD [ "npm", "start" ]