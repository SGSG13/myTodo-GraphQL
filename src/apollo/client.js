import {ApolloClient} from 'apollo-client';
import {loader} from 'graphql.macro';
import cache from './cache';
import link from './link';
import {filterMutation} from "./resolvers";

const typeDefs = loader('./typeDefs.graphql');

export const client = new ApolloClient({
    cache,
    link,
    typeDefs,
    resolvers: {
        Mutation: {
            ...filterMutation
        }
    }
});
