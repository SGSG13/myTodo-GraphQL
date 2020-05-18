import {InMemoryCache} from 'apollo-cache-inmemory';

const cache = new InMemoryCache();
const initialCache = {
    todos: [],
    filters: {
        searchTitle: '',
        statusFilter: 'all',
        __typename: 'Filters'
    }
};
cache.writeData({ data: initialCache });

export default cache;