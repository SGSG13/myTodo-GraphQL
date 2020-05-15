const { ApolloServer} = require('apollo-server-express');

const typeDefs = require('../schema');
const resolvers = require('../resolvers');


const apolloServer = new ApolloServer({
    typeDefs,
    resolvers
});

const { graphqlPath, subscriptionsPath } = apolloServer;

module.exports = {
    apolloServer,
    graphqlPath,
    subscriptionsPath
};