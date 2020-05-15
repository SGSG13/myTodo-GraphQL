const http = require('http');
const app = require('./app');
const {apolloServer} = require('./apolloServer');

const httpServer = http.createServer(app);

apolloServer.applyMiddleware({ app });
apolloServer.installSubscriptionHandlers(httpServer);

module.exports = {
    httpServer,
    apolloServer
};