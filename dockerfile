FROM node:18.13-alpine3.16
RUN mkdir /opt/server
WORKDIR /opt/server
COPY * /opt/server/
RUN npm install
CMD ["node", "index.js"]