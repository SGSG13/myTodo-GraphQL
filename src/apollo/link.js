import {split} from 'apollo-link';
import {WebSocketLink} from 'apollo-link-ws';
import {getMainDefinition} from 'apollo-utilities';
import {HttpLink} from 'apollo-link-http';

const root = 'localhost:3001/';

const uri = `http://${root}graphql`;
const httpLink = new HttpLink({uri});
const wsLink = new WebSocketLink({
    uri: `ws://${root}graphql`,
    options: {reconnect: true}
});
const link = split(
    ({query}) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        )
    },
    wsLink,
    httpLink
);

export default link;
