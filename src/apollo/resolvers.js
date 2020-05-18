import {loader} from 'graphql.macro';

const queryClientFilters = loader('../hooks/useQueryFilters/gql/queryClientFilters.graphql');

export const filterMutation = {
    setFilter: (_, { filter }, { cache }) => {
        const { filters } = cache.readQuery({query: queryClientFilters});
        const newFilter = {
            [filter.filterName]: filter.value
        };
        const updatedFilters = { ...filters, ...newFilter };
        cache.writeData({ data: { filters: updatedFilters }});
        return null;
    }
};